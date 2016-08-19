// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    TargetList,
    ObservationTarget,
    GetTargetListsParams,
    GetTargetListParams,
    GetOrganizationTargetListsParams,
    CreateOrganizationTargetListParams,
    GetOrganizationTargetListParams,
    DeleteTargetListParams,
    UpdateTargetListParams,
    SearchTargetsInObservationListParams,
    SearchTargetsInListParams,
    GetTargetsFromListParams,
    UpdateTargetsInListParams,
    SearchDataItemsInListParams
} from './types';

export default class TargetLists extends Resource {
    /**
     * @api {get} /v1/organization_observation_target_lists getAll
     * @apiGroup TargetLists
     * @apiName getAll
     * @apiDescription Return all target lists. This can only be invoked by the platform admin. Capable of returning paginated results.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getAll({...})
     */
    getAll(params: GetTargetListsParams): APIPromise<Array<TargetList>> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/organization_observation_target_lists${queryString}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/:observation_target_list_id get
     * @apiGroup TargetLists
     * @apiName get
     * @apiDescription Get org_observation_target_list.
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.get({...})
     */
    get(params: GetTargetListParams): APIPromise<[TargetList]> {
        return this.client.get(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/target_lists getAllForOrganization
     * @apiGroup TargetLists
     * @apiName getAllForOrganization
     * @apiDescription Get all organization_observation_target_lists in organiation. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetOrganizationTargetListsParams): APIPromise<Array<TargetList>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/target_lists${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/target_lists createForOrganization
     * @apiGroup TargetLists
     * @apiName createForOrganization
     * @apiDescription Create a new org_observation_target_list. Currently, there are no permissions checks.
     * @apiParam {Number} organization_id
     * @apiParam {Object} target_list
     * @apiExample {js} Example:
     *             gigwalk.targetLists.createForOrganization({...})
     */
    createForOrganization(params: CreateOrganizationTargetListParams): APIPromise<[TargetList]> {
        return this.client.post(`/v1/organizations/${params.organization_id}/target_lists`, { ...params.target_list });
    }

    /**
     * @api {get} /v1/organizations/:organization_id/target_lists/:observation_target_list_id getForOrganization
     * @apiGroup TargetLists
     * @apiName getForOrganization
     * @apiDescription Get organization_observation_target_list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getForOrganization({...})
     */
    getForOrganization(params: GetOrganizationTargetListParams): APIPromise<[TargetList]> {
        return this.client.get(`/v1/organizations/${params.organization_id}/target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {delete} /v1/organization_observation_target_lists/:observation_target_list_id delete
     * @apiGroup TargetLists
     * @apiName delete
     * @apiDescription Delete org_obs_target_list_id. This is a soft delete; org_obs_target_list marked as DELETED.
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.delete({...})
     */
    delete(params: DeleteTargetListParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/:observation_target_list_id update
     * @apiGroup TargetLists
     * @apiName update
     * @apiDescription Modify the specified org_obs_target_list.
     * @apiParam {Number} observation_target_list_id
     * @apiParam {Object} target_list
     * @apiExample {js} Example:
     *             gigwalk.targetLists.update({...})
     */
    update(params: UpdateTargetListParams): APIPromise<[TargetList]> {
        return this.client.put(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`, { ...params.target_list });
    }

    /**
     * @api {post} /v1/organization_observation_target_lists/:target_list_id/search/observation_targets searchObservationList
     * @apiGroup TargetLists
     * @apiName searchObservationList
     * @apiDescription Search all targets of an org_obs_target_list for the specified query_string. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchObservationList({...})
     */
    searchObservationList(params: SearchTargetsInObservationListParams): APIPromise<[]> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/organization_observation_target_lists/${params.target_list_id}/search/observation_targets${queryString}`);
    }

    /**
     * @api {post} /v1/target_lists/:target_list_id/search/targets searchList
     * @apiGroup TargetLists
     * @apiName searchList
     * @apiDescription Search all targets of an org_obs_target_list for the specified query_string. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchList({...})
     */
    searchList(params: SearchTargetsInListParams): APIPromise<[]> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/target_lists/${params.target_list_id}/search/targets${queryString}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/:target_list_id/observation_targets getTargets
     * @apiGroup TargetLists
     * @apiName getTargets
     * @apiDescription Return all targets of the specified org_obs_target_list.
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getTargets({...})
     */
    getTargets(params: GetTargetsFromListParams): APIPromise<Array<ObservationTarget>> {
        return this.client.get(`/v1/organization_observation_target_lists/${params.target_list_id}/observation_targets`);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/:target_list_id/observation_targets updateTargets
     * @apiGroup TargetLists
     * @apiName updateTargets
     * @apiDescription ADD or REMOVE targets from the specified org_obs_target_list.
     * @apiParam {Number} target_list_id
     * @apiParam {String} action
     * @apiParam {Array<Number>} target_ids
     * @apiExample {js} Example:
     *             gigwalk.targetLists.updateTargets({...})
     */
    updateTargets(params: UpdateTargetsInListParams): APIPromise<Array<ObservationTarget>> {
        const data = {
            action: params.action,
            target_ids: params.target_ids
        };

        return this.client.put(`/v1/organization_observation_target_lists/${params.target_list_id}/observation_targets`, data);
    }

    /**
     * @api {post} /v1/target_lists/target_history searchDataItems
     * @apiGroup TargetLists
     * @apiName searchDataItems
     * @apiDescription Search all the data_items for the specified obs_target_id and location_id. Results sorted by data_item_timestamp.
                       Photo data_items will be excluded from returned data.
     * @apiParam {Number} observation_target_id
     * @apiParam {Number} location_id
     * @apiParam {Number} item_count
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchDataItems({...})
     */
    searchDataItems(params: SearchDataItemsInListParams): APIPromise<Array<ObservationTarget>> {
        const data = {
            observation_target_id: params.observation_target_id,
            location_id: params.location_id,
            item_count: params.item_count
        };

        return this.client.post('/v1/target_lists/target_history', data);
    }
}
