// @flow
import type { Axios } from 'axios';

export type APIResponse<T> = {
    _meta: Object,
    _metadata: Object,
    warnings: mixed,
    errors: mixed,
    gw_api_response: Array<Object>,
    code: number,
    data: T,
}

export default class Resource {
    client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }
}
