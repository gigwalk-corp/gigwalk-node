// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetCloud9UrlsParams
} from './types';

export default class Cloud9Urls extends Resource {

    /**
     * @api {get} /v1/organizations/:organization_id/cloud9 get
     * @apiGroup Cloud9Urls
     * @apiName get
     * @apiDescription Returns cloud9 URLs associated with an organization's customers.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.cloud9Urls.get({...})
     */
    get(params: GetCloud9UrlsParams): APIPromise<any> {
        return this.client.get(`/v1/organizations/${params.organization_id}/cloud9`);
    }
}
