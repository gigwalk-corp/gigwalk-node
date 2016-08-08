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
