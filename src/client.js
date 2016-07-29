// @flow
import { Axios } from 'axios';
import RequestQueue from './requestQueue';

export default class GigwalkAxios extends Axios {
    constructor(defaultConfig?: AxiosXHRConfigBase<*> = {}) {
        let adapter;

        // Copied from axios/core/dispatchRequest.js
        if (typeof XMLHttpRequest !== 'undefined') {
            // For browsers use XHR adapter
            adapter = require('axios/lib/adapters/xhr'); // eslint-disable-line global-require
        } else if (typeof process !== 'undefined') {
            // For node use HTTP adapter
            adapter = require('axios/lib/adapters/http'); // eslint-disable-line global-require
        }

        const requestQueue = new RequestQueue(adapter);
        const config = {
            baseURL: 'https://api.app.gigwalk.com',
            ...defaultConfig,

            // Use a custom adapter which adds the request to a RequestQueue
            adapter(requestConfig: AxiosXHRConfig<*>) {
                return requestQueue.add(requestConfig);
            }
        };

        super(config);
    }
}
