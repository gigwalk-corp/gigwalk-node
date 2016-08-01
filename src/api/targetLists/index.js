// @flow
import ResourceBase from '../resourceBase';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>

export default class TargetLists extends ResourceBase {
    /**
     * @api {get} /v1/organization_observation_target_lists
     * @apiName getTargetLists
     * @apiDescription Return all target lists of all organizations. This can be invoked only by the platform admin. Return (obs_target_id, title, status,
                       org_data, obs_target_type_id). Can be sorted by specifying a order_by field ('id', 'name', 'status') and order_dir
     * @apiExample {js} Example:
     *             gigwalk.customers.getTargetLists({...})
     */
    getTargetLists(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName getTargetList
     * @apiDescription Return the specified org_observation_target_list Return (obs_target_id, title, status, org_data, obs_target_type_id).
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTargetList({...})
     */
    getTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/target_lists
     * @apiName getOrganizationTargetLists
     * @apiDescription Return the organization_observation_target_lists of the specified org Return (obs_target_id, title, status, org_data,
                       obs_target_type_id). Can be sorted by specifying a order_by field ('id', 'name', 'status') and order_dir
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTargetLists({...})
     */
    getOrganizationTargetLists(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/target_lists
     * @apiName createOrganizationTargetList
     * @apiDescription Create a new org_observation_target_list using the JSON payload. JSON payload is (name, obs_target_type, array of obs_targets and
                       status) No permissions check
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationTargetList({...})
     */
    createOrganizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/target_lists/{observation_target_list_id}
     * @apiName getOrganzationTargetList
     * @apiDescription Return the specified organization_observation_target_list Return (obs_target_id, title, status, org_data, obs_target_type_id).
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganzationTargetList({...})
     */
    getOrganzationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName deleteOranizationTargetList
     * @apiDescription Delete the specified org_obs_target_list_id. Soft delete, org_obs_target_list marked as DELETED, but not removed from db
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOranizationTargetList({...})
     */
    deleteOranizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName updateOrganizatioTargetList
     * @apiDescription Modify the specified org_obs_target_list. JSON Payload is (name, obs_target_type, array of obs_targets and status)
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizatioTargetList({...})
     */
    updateOrganizatioTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organization_observation_target_lists/{target_list_id}/search/observation_targets
     * @apiName searchOrganizationTargetList
     * @apiDescription Search all the targets of the specified org_obs_target_list for the specified query_string Return (title, attributes,
                       obs_target_type_id, status, org_id, date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTargetList({...})
     */
    searchOrganizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/target_lists/{target_list_id}/search/targets
     * @apiName searchOrganizationTargetList
     * @apiDescription Search all the targets of the specified org_obs_target_list for the specified query_string Return (title, attributes,
                       obs_target_type_id, status, org_id, date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTargetList({...})
     */
    searchOrganizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiName getOrganizationTargetList
     * @apiDescription Return all the targets of the specified org_obs_target_list Return (title, attributes, obs_target_type_id, status, org_id,
                       date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTargetList({...})
     */
    getOrganizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiName updateOrganizationTargetList
     * @apiDescription Add/Remove targets to the specified org_obs_target_list JSON payload is (action, list of targets)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationTargetList({...})
     */
    updateOrganizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/target_lists/target_history
     * @apiName searchTargetList
     * @apiDescription Search all the data_items for the specified obs_target_id and location_id Return (data_type_questions, data_item_value,
                       data_item_timestamp, _id) Results sorted by data_item_timestamp Photo data_items will be excluded from returned data
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTargetList({...})
     */
    searchTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
