// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    RateParams,
    RateForWorkerParams
} from './types';

export default class TwoWayRatings extends Resource {

    /**
     * @api {put} /v1/ratings/organization_subscription/:organization_subscription_id rate
     * @apiGroup TwoWayRatings
     * @apiName rate
     * @apiDescription If the user has not been invited to submit a rating the call will fail.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Object} rating
     * @apiExample {js} Example:
     *             gigwalk.twoWayRatings.rate({...})
     */
    rate(params: RateParams): APIPromise<any> {
        return this.client.put(`/v1/ratings/organization_subscription/${params.organization_subscription_id}`, { ...params.rating });
    }

    /**
     * @api {put} /v1/ratings/organization_subscription/:organization_subscription_id/worker/:worker_id rate
     * @apiGroup TwoWayRatings
     * @apiName rate
     * @apiDescription If the user has not been invited to submit a rating the call will fail.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} worker_id
     * @apiParam {Object} rating
     * @apiExample {js} Example:
     *             gigwalk.twoWayRatings.rate({...})
     */
    rateForWorker(params: RateForWorkerParams): APIPromise<any> {
        return this.client.put(`/v1/ratings/organization_subscription/${params.organization_subscription_id}/worker/${params.worker_id}`, { ...params.rating });
    }
}
