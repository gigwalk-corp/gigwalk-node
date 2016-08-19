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
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getAll({...})
     */
    getAll(params: GetTargetListsParams): APIPromise<Array<TargetList>> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/organization_observation_target_lists${query}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/:observation_target_list_id get
     * @apiGroup TargetLists
     * @apiName get
     * @apiDescription Get organizationObservationTargetList.
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
     * @apiDescription Get all organizationObservationTargetLists in organiation. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetOrganizationTargetListsParams): APIPromise<Array<TargetList>> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/target_lists${query}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/target_lists createForOrganization
     * @apiGroup TargetLists
     * @apiName createForOrganization
     * @apiDescription Create a new orgObservationTargetList. Currently, there are no permissions checks.
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
     * @apiDescription Get organizationObservationTargetList.
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
     * @apiDescription Delete organizationObservationTargetListID. This is a soft delete; organizationObservationTargetList marked as DELETED.
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
     * @apiDescription Modify the specified organizationObservationTargetList.
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
     * @apiDescription Search all targets of an organizationObservationTargetList for the specified queryString. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchObservationList({...})
     */
    searchObservationList(params: SearchTargetsInObservationListParams): APIPromise<[]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.post(`/v1/organization_observation_target_lists/${params.target_list_id}/search/observation_targets${query}`);
    }

    /**
     * @api {post} /v1/target_lists/:target_list_id/search/targets searchList
     * @apiGroup TargetLists
     * @apiName searchList
     * @apiDescription Search all targets of an organizationObservationTargetList for the specified queryString. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchList({...})
     */
    searchList(params: SearchTargetsInListParams): APIPromise<[]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.post(`/v1/target_lists/${params.target_list_id}/search/targets${query}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/:target_list_id/observation_targets getTargets
     * @apiGroup TargetLists
     * @apiName getTargets
     * @apiDescription Return all targets of the specified organizationObservationTargetList.
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
     * @apiDescription ADD or REMOVE targets from the specified organizationObservationTargetList.
     * @apiParam {Number} target_list_id
     * @apiParam {String} [action='add']
     * @apiParam {Number[]} target_ids
     * @apiExample {js} Example:
     *             gigwalk.targetLists.updateTargets({...})
     */
    updateTargets(params: UpdateTargetsInListParams): APIPromise<Array<ObservationTarget>> {
        const data = {
            action: (params.action) ? params.action : 'ADD',
            target_ids: params.target_ids
        };

        return this.client.put(`/v1/organization_observation_target_lists/${params.target_list_id}/observation_targets`, data);
    }

    /**
     * @api {post} /v1/target_lists/target_history searchDataItems
     * @apiGroup TargetLists
     * @apiName searchDataItems
     * @apiDescription Search all the dataItems for the specified organizationObservationID and locationID. Results sorted by dataItemTimestamp.
                       Photo dataItems will be excluded from returned data.
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
