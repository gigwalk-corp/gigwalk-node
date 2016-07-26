// @flow
import axios from 'axios';
import stringify from 'json-stable-stringify';
import type AxiosXHRConfig from 'axios';

export type Request = AxiosXHRConfig & {
    onSuccess?: Function,
    onError?: Function
};

export type ActiveRequestRecord = {
    request: Request,
    promise: Promise
};

export default class RequestQueue {
    dispatchQueue: Array = [];

    activeRequests: Map<String, ActiveRequestRecord> = new Map();

    /**
     * Adds a request to the RequestQueue. Returns a promise that is resolved or rejected when
     * the request completes.
     * @param request
     * @returns {Promise}
     */
    add(request: Request) {
        const { dispatchQueue, activeRequests } = this;
        const key = stringify(request);

        if (activeRequests.has(key)) {
            return activeRequests.get(key).promise;
        }

        const promise = new Promise((resolve, reject) => {
            request.onSuccess = resolve;
            request.onError = reject;

            dispatchQueue.push(request);
        });

        activeRequests.set(key, { request, promise });

        if (dispatchQueue.length === 1) {
            setTimeout(() => this.checkQueue(), 0);
        }

        return promise;
    }

    checkQueue() {
        const { dispatchQueue, activeRequests } = this;

        if (dispatchQueue.length > 0) {
            const request = dispatchQueue.shift();
            const promise = axios.request(request);

            promise
                .then((...args) => request.onSuccess(...args))
                .catch((...args) => request.onError(...args))
                .then(() => {
                    const key = stringify(request);
                    activeRequests.delete(key);
                });

            setTimeout(() => this.checkQueue(), 0);
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
