// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type TargetTemplate = {
    title: string
}

type TargetListTemplate = {
  name: string,
  observation_target_type: number,
  observation_targets: Array<TargetTemplate>,
  status?: string
}

type GetTargetListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    include_auto_generated?: number
}

type GetTargetListsParams = {
    query?: GetTargetListsQuery
}

type GetTargetListParams = {
    observation_target_list_id: number
}

type GetOrganizationTargetListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    auto_generated?: number
}

type GetOrganizationTargetListsParams = {
    organization_id: number,
    query?: GetOrganizationTargetListsQuery
}

type CreateOrganizationTargetListParams = {
    organization_id: number,
    target_list: TargetListTemplate
}

type GetOrganzationTargetListParams = {
    organization_id: number,
    observation_target_list_id: number
}

type DeleteTargetListParams = {
    observation_target_list_id: number
}

type UpdateTargetListParams = {
    observation_target_list_id: number,
    target_list: TargetListTemplate
}

type SearchTargetsInObservationListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

type SearchTargetsInObservationListParams = {
    target_list_id: number,
    query?: SearchTargetsInObservationListQuery
}

type SearchTargetsInListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

type SearchTargetsInListParams = {
    target_list_id: number,
    query?: SearchTargetsInListQuery
}

type GetTargetsFromListQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

type GetTargetsFromListParams = {
    target_list_id: number,
    query?: GetTargetsFromListQuery
}

type UpdateTargetsInListParams = {
    target_list_id: number,
    action: string,
    target_ids: Array<number>
}

type SearchDataItemsInListParams = {
    observation_target_id: number,
    location_id: number,
    item_count: number
}

type TargetListSummarySchema = {
    name: string,
    id: number,
    observation_target_count: number,
    observation_target_type_id: number,
    status: string
}

type ObservationTargetSchema = {
    title: string,
    id: number,
    organization_id: number,
    observation_target_type_id: number
}

type GetTargetListsData = Array<TargetListSummarySchema>

type GetTargetListData = [
    TargetListSummarySchema
]

type GetOrganizationTargetListsData = Array<TargetListSummarySchema>

type CreateOrganizationTargetListData = [
    TargetListSummarySchema
]

type GetOrganzationTargetListData = [
    TargetListSummarySchema
]

type DeleteTargetListData = [
    number
]

type UpdateTargetListData = [
    TargetListSummarySchema
]

type SearchTargetsInObservationListData = [ // NEED TO CHECK

]

type SearchTargetsInListData = [ // NEED TO CHECK

]

type GetTargetsFromListData = Array<ObservationTargetSchema>

type UpdateTargetsInListData = Array<ObservationTargetSchema>

type SearchDataItemsInListData = Array<ObservationTargetSchema> // NEED TO CHECK

export default class TargetLists extends Resource {
    /**
     * @api {get} /v1/organization_observation_target_lists
     * @apiGroup TargetLists
     * @apiName getTargetLists
     * @apiDescription Return all target lists. This can only be invoked by the platform admin. Capable of returning paginated results.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getTargetLists({...})
     */
    getTargetLists(params: GetTargetListsParams): APIPromise<GetTargetListsData> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/organization_observation_target_lists${queryString}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiGroup TargetLists
     * @apiName getTargetList
     * @apiDescription Get org_observation_target_list.
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getTargetList({...})
     */
    getTargetList(params: GetTargetListParams): APIPromise<GetTargetListData> {
        return this.client.get(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/target_lists
     * @apiGroup TargetLists
     * @apiName getOrganizationTargetLists
     * @apiDescription Get all organization_observation_target_lists in organiation. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getOrganizationTargetLists({...})
     */
    getOrganizationTargetLists(params: GetOrganizationTargetListsParams): APIPromise<GetOrganizationTargetListsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/target_lists${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/target_lists
     * @apiGroup TargetLists
     * @apiName createOrganizationTargetList
     * @apiDescription Create a new org_observation_target_list. Currently, there are no permissions checks.
     * @apiParam {Number} organization_id
     * @apiParam {Object} target_list
     * @apiExample {js} Example:
     *             gigwalk.targetLists.createOrganizationTargetList({...})
     */
    createOrganizationTargetList(params: CreateOrganizationTargetListParams): APIPromise<CreateOrganizationTargetListData> {
        return this.client.post(`/v1/organizations/${params.organization_id}/target_lists`, { ...params.target_list });
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/target_lists/{observation_target_list_id}
     * @apiGroup TargetLists
     * @apiName getOrganzationTargetList
     * @apiDescription Get organization_observation_target_list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getOrganzationTargetList({...})
     */
    getOrganzationTargetList(params: GetOrganzationTargetListParams): APIPromise<GetOrganzationTargetListData> {
        return this.client.get(`/v1/organizations/${params.organization_id}/target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {delete} /v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiGroup TargetLists
     * @apiName deleteTargetList
     * @apiDescription Delete org_obs_target_list_id. This is a soft delete; org_obs_target_list marked as DELETED.
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.deleteTargetList({...})
     */
    deleteTargetList(params: DeleteTargetListParams): APIPromise<DeleteTargetListData> {
        return this.client.delete(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiGroup TargetLists
     * @apiName updateTargetList
     * @apiDescription Modify the specified org_obs_target_list.
     * @apiParam {Number} observation_target_list_id
     * @apiParam {Object} target_list
     * @apiExample {js} Example:
     *             gigwalk.targetLists.updateTargetList({...})
     */
    updateTargetList(params: UpdateTargetListParams): APIPromise<UpdateTargetListData> {
        return this.client.put(`/v1/organization_observation_target_lists/${params.observation_target_list_id}`, { ...params.target_list });
    }

    /**
     * @api {post} /v1/organization_observation_target_lists/{target_list_id}/search/observation_targets
     * @apiGroup TargetLists
     * @apiName searchTargetsInObservationList
     * @apiDescription Search all targets of an org_obs_target_list for the specified query_string. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchTargetsInObservationList({...})
     */
    searchTargetsInObservationList(params: SearchTargetsInObservationListParams): APIPromise<SearchTargetsInObservationListData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/organization_observation_target_lists/${params.target_list_id}/search/observation_targets${queryString}`);
    }

    /**
     * @api {post} /v1/target_lists/{target_list_id}/search/targets
     * @apiGroup TargetLists
     * @apiName searchTargetsInList
     * @apiDescription Search all targets of an org_obs_target_list for the specified query_string. Capable of returning paginated results.
     * @apiParam {Number} target_list_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchTargetsInList({...})
     */
    searchTargetsInList(params: SearchTargetsInListParams): APIPromise<SearchTargetsInListData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/target_lists/${params.target_list_id}/search/targets${queryString}`);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiGroup TargetLists
     * @apiName getTargetsFromList
     * @apiDescription Return all targets of the specified org_obs_target_list.
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.targetLists.getTargetsFromList({...})
     */
    getTargetsFromList(params: GetTargetsFromListParams): APIPromise<GetTargetsFromListData> {
        return this.client.get(`/v1/organization_observation_target_lists/${params.target_list_id}/observation_targets`);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiGroup TargetLists
     * @apiName updateTargetsInList
     * @apiDescription ADD or REMOVE targets from the specified org_obs_target_list.
     * @apiParam {Number} target_list_id
     * @apiParam {String} action
     * @apiParam {Array<Number>} target_ids
     * @apiExample {js} Example:
     *             gigwalk.targetLists.updateTargetsInList({...})
     */
    updateTargetsInList(params: UpdateTargetsInListParams): APIPromise<UpdateTargetsInListData> {
        const data = {
            action: params.action,
            target_ids: params.target_ids
        };

        return this.client.put(`/v1/organization_observation_target_lists/${params.target_list_id}/observation_targets`, data);
    }

    /**
     * @api {post} /v1/target_lists/target_history
     * @apiGroup TargetLists
     * @apiName searchDataItemsInList
     * @apiDescription Search all the data_items for the specified obs_target_id and location_id. Results sorted by data_item_timestamp.
                       Photo data_items will be excluded from returned data.
     * @apiParam {Number} observation_target_id
     * @apiParam {Number} location_id
     * @apiParam {Number} item_count
     * @apiExample {js} Example:
     *             gigwalk.targetLists.searchDataItemsInList({...})
     */
    searchDataItemsInList(params: SearchDataItemsInListParams): APIPromise<SearchDataItemsInListData> {
        const data = {
            observation_target_id: params.observation_target_id,
            location_id: params.location_id,
            item_count: params.item_count
        };

        return this.client.post('/v1/target_lists/target_history', data);
    }
}
