// @flow
import { Axios } from 'axios';
import type { $AxiosXHRConfig, $AxiosXHRConfigBase, $AxiosXHR } from 'axios';
import RequestQueue from './requestQueue';

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

        // FlowIssue - Can't suppress this error because it generates an error on line 0 of this file
        // See https://github.com/facebook/flow/issues/2167. Using destructuring on types
        // that implement an interface doesn't work with properties that are maybe types
        /*
        const config: $AxiosXHRConfigBase<*> = {
            baseURL: 'https://api.app.gigwalk.com',
            ...defaultConfig,

            // Use a custom adapter which adds the request to a RequestQueue
            adapter(requestConfig: $AxiosXHRConfig<any>): Promise<$AxiosXHR<any>> {
                return requestQueue.add(requestConfig);
            }
        };
        */

        const config: $AxiosXHRConfigBase<*> = {};
        config.baseURL = defaultConfig.baseURL ? defaultConfig.baseURL : 'https://api.app.gigwalk.com';
        config.adapter = (requestConfig: $AxiosXHRConfig<any>): Promise<$AxiosXHR<any>> => requestQueue.add(requestConfig);

        // Note: To pass type checking, manual assignment of maybe types is required. See above FlowIssue
        if (defaultConfig.auth) config.auth = defaultConfig.auth;
        if (defaultConfig.progress) config.progress = defaultConfig.progress;
        if (defaultConfig.maxContentLength) config.maxContentLength = defaultConfig.maxContentLength;
        if (defaultConfig.maxRedirects) config.maxRedirects = defaultConfig.maxRedirects;
        if (defaultConfig.headers) config.headers = defaultConfig.headers;
        if (defaultConfig.params) config.params = defaultConfig.params;
        if (defaultConfig.paramsSerializer) config.paramsSerializer = defaultConfig.paramsSerializer;
        if (defaultConfig.responseType) config.responseType = defaultConfig.responseType;
        if (defaultConfig.transformResponse) config.transformResponse = defaultConfig.transformResponse;
        if (defaultConfig.transformRequest) config.transformRequest = defaultConfig.transformRequest;
        if (defaultConfig.timeout) config.timeout = defaultConfig.timeout;
        if (defaultConfig.validateStatus) config.validateStatus = defaultConfig.validateStatus;
        if (defaultConfig.withCredentials) config.withCredentials = defaultConfig.withCredentials;
        if (defaultConfig.xsrfCookieName) config.xsrfCookieName = defaultConfig.xsrfCookieName;
        if (defaultConfig.xsrfHeaderName) config.xsrfHeaderName = defaultConfig.xsrfHeaderName;
        if (defaultConfig.httpAgent) config.httpAgent = defaultConfig.httpAgent;
        if (defaultConfig.httpsAgent) config.httpsAgent = defaultConfig.httpsAgent;

        super(config);

        this.baseURL = config.baseURL;
    }

    get(url) {
        // TODO: add curl
        return super.get(url);
    }

    post(url, data) {
        const headers = '-H "Autorization: Token abc123" -H "Content-Type: application/json"';
        const data_str = JSON.stringify(JSON.stringify(data));
        console.log(`curl ${this.baseURL}${url} ${headers} -d ${data_str}`);
        return super.post(url, data);
    }

    put(url, data) {
        // TODO: Add curl
        return super.put(url, data);
    }
}
