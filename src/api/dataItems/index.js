// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {

} from './types';

export default class DataItems extends Resource {

    /**
     * @api {get} /v1/data_items/search get
     * @apiGroup DataItems
     * @apiName get
     * @apiDescription Get the results of a mongo aggregate query.
     * @apiParam {String} aggregate
     * @apiExample {js} Example:
     *             gigwalk.dataItems.get({...})
     */
    get(params: any): APIPromise<any> {
        const data = {
            aggregate: params.aggregate
        };

        return this.client.get('/v1/data_items/search', data);
    }

    /**
     * @api {post} /v1/data_items/search search
     * @apiGroup DataItems
     * @apiName search
     * @apiDescription Search for dataItems. No permissions check.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.dataItems.search({...})
     */
    search(params: any): APIPromise<any> {
        return this.client.post('/v1/data_items/search', { ...params.query });
    }

    /**
     * @api {post} /v1/organizations/:organization_id/data_items/search searchForOrganization
     * @apiGroup DataItems
     * @apiName searchForOrganization
     * @apiDescription Search for dataItems. No permissions check.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.dataItems.searchForOrganization({...})
     */
    searchForOrganization(params: any): APIPromise<any> {
        return this.client.post(`/v1/organizations/${params.organization_id}/data_items/search`, { ...params.query });
    }

    /**
     * @api {post} /v1/subscriptions/:subscription_id/data_items/search searchForSubscription
     * @apiGroup DataItems
     * @apiName searchForSubscription
     * @apiDescription Search for dataItems. No permissions check.
     * @apiParam {Number} subscription_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dataItems.searchForSubscription({...})
     */
    searchForSubscription(params: any): APIPromise<any> {
        return this.client.post(`/v1/subscriptions/${params.subscription_id}/data_items/search`, { ...params.query });
    }
}
