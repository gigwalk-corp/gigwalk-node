// @flow
import axios from 'axios';
import stringify from 'json-stable-stringify';

interface Request<T> extends AxiosXHRConfig<T> {
    onSuccess: Function,
    onError: Function
}

interface ActiveRequestRecord<T> {
    request: Request<T>,
    promise: Promise<T>
}

export default class RequestQueue {
    dispatchQueue: Array<Request<*>> = [];

    activeRequests: Map<string, ActiveRequestRecord<*>> = new Map();

    httpClient: Axios;

    constructor(httpClient?: Axios = axios) {
        this.httpClient = httpClient;
    }

    /**
     * Adds a request to the RequestQueue. Returns a promise that is resolved or rejected when
     * the request completes.
     * @param config
     * @returns {Promise}
     */
    add(config: AxiosXHRConfig<*>) {
        const request = {
            ...config,
            onSuccess: () => {},
            onError: () => {}
        };

        const key = stringify(config);

        if (this.activeRequests.get(key)) {
            const record = this.activeRequests.get(key);
            if (record) {
                return record.promise;
            }
        }

        // todo: provide better flow annotations
        const promise = new Promise((resolve: Function, reject: Function) => {
            request.onSuccess = resolve;
            request.onError = reject;
        });

        // $FlowFixMe
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
            const promise = this.httpClient(request);

            // todo: provide better flow annotations
            promise
                .then((...args: Array<any>) => request.onSuccess(...args))
                .catch((...args: Array<any>) => request.onError(...args))
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
