// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetWaveSubCollectionParams,
    GetWaveParams,
    CreateWaveParams
} from './types';

export default class Waves extends Resource {

    /**
     * @api {get} /v1/waves/:organization_subscription_wave_id/:sub_collection/:sub_sub_collection getSubCollection
     * @apiGroup Waves
     * @apiName getSubCollection
     * @apiDescription Get information regarding the specified sub-collection of the wave.
     * @apiParam {Number} organization_subscription_wave_id
     * @apiParam {String} sub_collection
     * @apiParam {String} sub_sub_collection
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.waves.getSubCollection({...})
     */
    getSubCollection(params: GetWaveSubCollectionParams): APIPromise<any> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/waves/${params.organization_subscription_wave_id}/${params.sub_collection}/${params.sub_sub_collection}${queryString}`);
    }

    /**
     * @api {get} /v1/organization_subscription_waves/:organization_subscription_wave_id get
     * @apiGroup Waves
     * @apiName get
     * @apiDescription Get information regarding the specified wave.
     * @apiParam {Number} organization_subscription_wave_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.waves.get({...})
     */
    get(params: GetWaveParams): APIPromise<any> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organization_subscription_waves/${params.organization_subscription_wave_id}${queryString}`);
    }

    /**
     * @api {post} /v1/waves/:organization_subscription_wave_id/csv create
     * @apiGroup Waves
     * @apiName create
     * @apiDescription Create wave using csv.
     * @apiParam {Number} organization_subscription_wave_id
     * @apiExample {js} Example:
     *             gigwalk.waves.create({...})
     */
    create(params: CreateWaveParams): APIPromise<any> {
        return this.client.post(`/v1/waves/${params.organization_subscription_wave_id}/csv`);
    }
}
