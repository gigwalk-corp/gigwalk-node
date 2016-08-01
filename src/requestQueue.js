// @flow
import axios from 'axios';
import stringify from 'json-stable-stringify';
import type { Axios, $AxiosXHR, $AxiosXHRConfig } from 'axios';

interface Request<T> extends $AxiosXHRConfig<T> {
    success: Function,
    error: Function
}

interface ActiveRequestRecord<T> {
    request: Request<T>,
    promise: Promise<T>
}

export default class RequestQueue {

    // Queue of requests awaiting dispatch
    dispatchQueue: Array<Request<*>> = [];

    // Map of all pending requests
    activeRequests: Map<string, ActiveRequestRecord<*>> = new Map();

    client: Axios;

    constructor(client?: Axios = axios) {
        this.client = client;
    }

    /**
     * Adds a request to the RequestQueue. Returns a promise that is resolved or rejected when
     * the request completes.
     * @param config
     * @returns {Promise}
     */
    add(config: $AxiosXHRConfig<*>): Promise<$AxiosXHR<*>> {
        const request = {
            ...config,
            success: () => {},
            error: () => {}
        };

        const key = stringify(config);

        if (this.activeRequests.has(key)) {
            const record = this.activeRequests.get(key);
            if (record) {
                return record.promise;
            }
        }

        // Create a promise that we can return immediately. Since the dispatch happens
        // asynchronously, we won't have the axios promise to return.
        const promise = new Promise((resolve: Function, reject: Function) => {
            // Attach the resolve and reject functions to the request so that
            // we can fulfill/reject the promise when the request completes.
            request.success = resolve;
            request.error = reject;
        });

        this.activeRequests.set(key, { request, promise });

        this.dispatchQueue.push(request);
        if (this.dispatchQueue.length === 1) {
            setTimeout(() => this.checkQueue(), 1);
        }

        return promise;
    }

    checkQueue() {
        if (this.dispatchQueue.length > 0) {
            const request = this.dispatchQueue.shift();
            const promise = this.client(request);

            // Add then/catch to the promise chain so that we can fulfill/reject
            // the promise returned by RequestQueue.add().
            promise
                .then((...args: Array<any>) => request.success(...args))
                .catch((...args: Array<any>) => request.error(...args))
                .then(() => {
                    const key = stringify(request);
                    this.activeRequests.delete(key);
                });

            setTimeout(() => this.checkQueue(), 1);
        }
    }

    cancel() {
        // No API exists for cancelling active HTTP requests yet
        // See https://github.com/whatwg/fetch/issues/27 and https://github.com/mzabriskie/axios/issues/50
    }

    cancelAll() {
        // No API exists for cancelling active HTTP requests yet
        // See https://github.com/whatwg/fetch/issues/27 and https://github.com/mzabriskie/axios/issues/50
    }
}
