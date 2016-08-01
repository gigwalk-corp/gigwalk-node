// @flow
import { Axios } from 'axios';
import RequestQueue from './requestQueue';
import type { $AxiosXHRConfig, $AxiosXHRConfigBase, $AxiosXHR } from 'axios';

export default class GigwalkAxios extends Axios {

    defaults: {
        headers: {
            common: {
                Authorization: string
            }
        }
    };

    constructor(defaultConfig?: $AxiosXHRConfigBase<*> = {}) {
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

        const config: $AxiosXHRConfigBase<*> = {
            baseURL: 'https://api.app.gigwalk.com',
            ...defaultConfig,

            // Use a custom adapter which adds the request to a RequestQueue
            adapter(requestConfig: $AxiosXHRConfig<*>): Promise<$AxiosXHR<*>> {
                return requestQueue.add(requestConfig);
            }
        };

        super(config);
    }
}
