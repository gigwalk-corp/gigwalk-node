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

export default class Targets extends ResourceBase {
    /**
     * @api {post} /v1/organizations/{organization_id}/observation_targets
     * @apiName createOrganizationTargets
     * @apiDescription Create new obs_targets of the org using the JSON payload. Even though this is a POST method, it does update/deletion as well.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationTargets({...})
     */
    createOrganizationTargets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/observation_targets/{observation_target_id}
     * @apiName getOrganizationTarget
     * @apiDescription If target_id is specified, return org_observation_target_id info for the specified target_id or return the info for all targets
                       of the org. Return data fields (id, title, status, org_data, obs_target_type_id)
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTarget({...})
     */
    getOrganizationTarget(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/observation_targets/{observation_target_id}
     * @apiName updateOrganizationTarget
     * @apiDescription If target_id is specified, update a single org_observation_target. Else update all targets of the org using the JSON payload.
                       Even though this is a PUT method, it does creation/deletion as well.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationTarget({...})
     */
    updateOrganizationTarget(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/observation_targets/search
     * @apiName searchOrganizationTargets
     * @apiDescription Find a match if the given string is found in the obs_target titles. If no search string is specified, return all obs targets of the org.
                       Return data fields (id, title, status, org_data, obs_target_type_id)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTargets({...})
     */
    searchOrganizationTargets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }
}
