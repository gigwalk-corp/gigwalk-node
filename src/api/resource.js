// @flow
import type { Axios, $AxiosXHR } from 'axios';

export type APIResponse<T> = {
    _meta: Object,
    _metadata: Object,
    warnings: mixed,
    errors: mixed,
    gw_api_response: Array<Object>,
    code: number,
    data: T,
}

export type APIPromise<T> = Promise<$AxiosXHR<APIResponse<T>>>

export type ESResults<T> = {
    _shards: {
        failed: number,
        successful: number,
        total: number
    },
    timed_out: boolean,
    took: number,
    hits: {
        hits: Array<{
            _source: T,
            _type: string,
            _score: number,
            _index: string,
            _id: string
        }>,
        max_score: number,
        total: number
    }
}

export type ESPromise<T> = Promise<$AxiosXHR<ESResults<T>>>

export default class Resource {
    client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }

    stringForQueryObject(queryObject: any): string {
        if (!queryObject) {
            return '';
        }

        return Object.entries(queryObject)
            .reduce((str: string, [key, value]: [string, mixed], i: number): string => {
                if (typeof value === 'number' || typeof value === 'string') {
                    return `${str}${i === 0 ? '?' : '&'}${key}=${value}`;
                }
                return str;
            }, '');
    }
}
