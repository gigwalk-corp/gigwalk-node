// @flow
import Resource from '../resource';
import type { $AxiosXHR } from 'axios';

export type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
};

export type APIPromise<T> = Promise<$AxiosXHR<APIRes<T>>>;

export type GetData = [{
    minimum_ios_version: string,
    minimum_android_version: string,
    version: string
}];

export default class Versions extends Resource {
    /**
     * @api {get} /v1/versions/current
     * @apiName Get
     * @apiDescription Get Version. Get the current API version, and the minimum mobile apps versions allowed
     * @apiExample {js} Example:
     *             gigwalk.versions.get({...})
     */
    get(): APIPromise<GetData> {
        return this.client.get('/v1/versions/current');
    }
}
