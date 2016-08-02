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

type ObservationTargetBasicTemplate = {
    observation_target_type_id: number,
    title: string
}

type ObservationTargetTemplate = {
    obs_target_id: number,
    title: string,
    status: string,
    key_value_pairs: Array<{
        key: string,
        value: string
    }>
}

type CreateOrganizationTargetsParams = {
    organization_id: number,
    observation_target: ObservationTargetBasicTemplate
}

type GetOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number
}

type UpdateOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number,
    observation_target: ObservationTargetTemplate
}

type SearchOrganizationTargetsParams = {
    organization_id: number,
    query_string: string
}

type CreateOrganizationTargetsData = {

}

type GetOrganizationTargetData = {

}

type UpdateOrganizationTargetData = {

}

type SearchOrganizationTargetsData = {

}

export default class Targets extends ResourceBase {
    /**
     * @api {post} /v1/organizations/{organization_id}/observation_targets
     * @apiName createOrganizationTargets
     * @apiDescription Create new obs_targets of the org using the JSON payload. Even though this is a POST method, it does update/deletion as well.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationTargets({...})
     */
    createOrganizationTargets(params: CreateOrganizationTargetsParams): APIPromise<CreateOrganizationTargetsData> {
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
    getOrganizationTarget(params: GetOrganizationTargetParams): APIPromise<GetOrganizationTargetData> {
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
    updateOrganizationTarget(params: UpdateOrganizationTargetParams): APIPromise<UpdateOrganizationTargetData> {
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
    searchOrganizationTargets(params: SearchOrganizationTargetsParams): APIPromise<SearchOrganizationTargetsData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }
}
