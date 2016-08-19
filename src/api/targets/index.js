// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    ObservationTarget,
    CreateOrganizationTargetParams,
    GetOrganizationTargetParams,
    UpdateOrganizationTargetParams,
    SearchOrganizationTargetsParams
} from './types';

export default class Targets extends Resource {
    /**
     * @api {post} /v1/organizations/:organization_id/observation_targets create
     * @apiGroup Targets
     * @apiName create
     * @apiDescription Create new obs_target(s). Endpoint also does update/deletion.
     * @apiParam {Number} organization_id
     * @apiParam {Object} observation_target
     * @apiExample {js} Example:
     *             gigwalk.targets.create({...})
     */
    create(params: CreateOrganizationTargetParams): APIPromise<[ObservationTarget]> {
        return this.client.post(`/v1/organizations/${params.organization_id}/observation_targets`, { ...params.observation_target });
    }

    /**
     * @api {get} /v1/organizations/:organization_id/observation_targets/:observation_target_id get
     * @apiGroup Targets
     * @apiName get
     * @apiDescription If target_id is specified, return org_observation_target_id information; else return the information for all targets of the org.
                       Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targets.get({...})
     */
    get(params: GetOrganizationTargetParams): APIPromise<[ObservationTarget]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/observation_targets/${params.observation_target_id}${query}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/observation_targets/:observation_target_id update
     * @apiGroup Targets
     * @apiName update
     * @apiDescription If target_id is specified, update org_observation_target; else update all targets of the organization.
                       Endpoint also does update/deletion.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_id
     * @apiParam {Object} observation_target
     * @apiExample {js} Example:
     *             gigwalk.targets.update({...})
     */
    update(params: UpdateOrganizationTargetParams): APIPromise<[ObservationTarget]> {
        return this.client.put(`/v1/organizations/${params.organization_id}/observation_targets/${params.observation_target_id}`,
                               { ...params.observation_target });
    }

    /**
     * @api {get} /v1/organizations/:organization_id/observation_targets/search search
     * @apiGroup Targets
     * @apiName search
     * @apiDescription Search obs_target titles. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targets.search({...})
     */
    search(params: SearchOrganizationTargetsParams): APIPromise<Array<ObservationTarget>> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/observation_targets/search${query}`);
    }
}
