// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type ObservationTargetBasicTemplate = {
    observation_target_type_id: number,
    title: string
}

type ObservationTargetTemplate = {
    obs_target_id?: number,
    title?: string,
    status?: string,
    key_value_pairs?: Array<{
        key: string,
        value: string
    }>
}

type CreateOrganizationTargetParams = {
    organization_id: number,
    observation_target: ObservationTargetBasicTemplate
}

type GetOrganizationTargetQuery = {
    limit?: number,
    offset?: number
}

type GetOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number,
    query?: GetOrganizationTargetQuery
}

type UpdateOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number,
    observation_target: ObservationTargetTemplate
}

type SearchOrganizationTargetsQuery = {
    q?: string,
    limit?: number,
    offset?: number
}

type SearchOrganizationTargetsParams = {
    organization_id: number,
    query_string: string,
    query?: SearchOrganizationTargetsQuery
}

type ObservationTargetSchema = {
    title: string,
    id: number,
    observation_target_type_id: number,
    status: string,
    organization_data: Object
}

type CreateOrganizationTargetData = [
    ObservationTargetSchema
]

type GetOrganizationTargetData = [ // NEED TO CHECK
    ObservationTargetSchema
]

type UpdateOrganizationTargetData = [
    ObservationTargetSchema
]

type SearchOrganizationTargetsData = Array<ObservationTargetSchema>

export default class Targets extends Resource {
    /**
     * @api {post} /v1/organizations/{organization_id}/observation_targets
     * @apiName createOrganizationTarget
     * @apiDescription Create new obs_target(s). Endpoint also does update/deletion.
     * @apiParam {Number} organization_id
     * @apiParam {ObservationTargetBasicTemplate} observation_target
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationTarget({...})
     */
    createOrganizationTarget(params: CreateOrganizationTargetParams): APIPromise<CreateOrganizationTargetData> {
        return this.client.post(`/v1/organizations/${params.organization_id}/observation_targets`, { ...params.observation_target });
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/observation_targets/{observation_target_id}
     * @apiName getOrganizationTarget
     * @apiDescription If target_id is specified, return org_observation_target_id information; else return the information for all targets of the org.
                       Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiParam {GetOrganizationTargetQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTarget({...})
     */
    getOrganizationTarget(params: GetOrganizationTargetParams): APIPromise<GetOrganizationTargetData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/observation_targets/${params.observation_target_id}${queryString}`);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/observation_targets/{observation_target_id}
     * @apiName updateOrganizationTarget
     * @apiDescription If target_id is specified, update org_observation_target; else update all targets of the organization.
                       Endpoint also does update/deletion.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiParam {ObservationTargetTemplate} observation_target
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationTarget({...})
     */
    updateOrganizationTarget(params: UpdateOrganizationTargetParams): APIPromise<UpdateOrganizationTargetData> {
        return this.client.put(`/v1/organizations/${params.organization_id}/observation_targets/${params.observation_target_id}`,
                               { ...params.observation_target });
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/observation_targets/search
     * @apiName searchOrganizationTargets
     * @apiDescription Search obs_target titles. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {SearchOrganizationTargetsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTargets({...})
     */
    searchOrganizationTargets(params: SearchOrganizationTargetsParams): APIPromise<SearchOrganizationTargetsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/observation_targets/search${queryString}`);
    }
}
