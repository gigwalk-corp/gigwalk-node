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

export type ESParams = {
    from?: number,
    size?: number,
    sort_field?: string,
    sort_order?: string,
    q?: string
}

export type PaginationParams = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string,
    query_string?: string
}

export default class Resource {
    client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }

    queryStringForSearchObject(queryObject: any): string {
        if (!queryObject) return '';
        let queryString: string = '';
        for (let i = 0; i < Object.keys(queryObject).length; i++) {
            const key: string = Object.keys(queryObject)[i];
            queryString += (queryString.length === 0) ? `?${key}=${queryObject[key]}` : `&${key}=${queryObject[key]}`;
        }
        return queryString;
    }
}
