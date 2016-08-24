// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    VersionList
} from './types.js';

export default class Versions extends Resource {
    /**
     * @api {get} /v1/versions/current get
     * @apiGroup Versions
     * @apiName get
     * @apiDescription Get version. Get the current API version, and the minimum mobile apps versions allowed.
     * @apiExample {js} Example:
     *             gigwalk.versions.get({...})
     */
    get(): APIPromise<[VersionList]> {
        return this.client.get('/v1/versions/current');
    }
}
