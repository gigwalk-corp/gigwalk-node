// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type GetData = [{
    minimum_ios_version: string,
    minimum_android_version: string,
    version: string
}];

export default class Versions extends Resource {
    /**
     * @api {get} /v1/versions/current
     * @apiName get
     * @apiDescription Get version. Get the current API version, and the minimum mobile apps versions allowed.
     * @apiExample {js} Example:
     *             gigwalk.versions.get({...})
     */
    get(): APIPromise<GetData> {
        return this.client.get('/v1/versions/current');
    }
}
