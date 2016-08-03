// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type TargetListTemplate = {
  name: string,
  observation_target_type: string,
  observation_targets: Array<{
      title: string
  }>,
  status: string
}

type GetTargetListParams = {
    observation_target_list_id: number
}

type GetOrganizationTargetListsParams = {
    organization_id: number
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

type SearchTargetsInObservationListParams = {
    target_list_id: number,
    query_string: string
}

type SearchTargetsInListParams = {
    target_list_id: number,
    query_string: string
}

type GetTargetsFromListParams = {
    target_list_id: number
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
     * @apiName getTargetLists
     * @apiDescription Return all target lists of all organizations. This can be invoked only by the platform admin. Return (obs_target_id, title, status,
                       org_data, obs_target_type_id). Can be sorted by specifying a order_by field ('id', 'name', 'status') and order_dir
     * @apiExample {js} Example:
     *             gigwalk.customers.getTargetLists({...})
     */
    getTargetLists(): APIPromise<GetTargetListsData> {
        const url = '/v1';
        const data = {

        };

        return this.client.get(url, data);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName getTargetList
     * @apiDescription Return the specified org_observation_target_list Return (obs_target_id, title, status, org_data, obs_target_type_id).
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTargetList({...})
     */
    getTargetList(params: GetTargetListParams): APIPromise<GetTargetListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.get(url, data);
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
    getOrganizationTargetLists(params: GetOrganizationTargetListsParams): APIPromise<GetOrganizationTargetListsData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.get(url, data);
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
    createOrganizationTargetList(params: CreateOrganizationTargetListParams): APIPromise<CreateOrganizationTargetListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.post(url, data);
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
    getOrganzationTargetList(params: GetOrganzationTargetListParams): APIPromise<GetOrganzationTargetListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.get(url, data);
    }

    /**
     * @api {delete} /v1/v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName deleteTargetList
     * @apiDescription Delete the specified org_obs_target_list_id. Soft delete, org_obs_target_list marked as DELETED, but not removed from db
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteTargetList({...})
     */
    deleteTargetList(params: DeleteTargetListParams): APIPromise<DeleteTargetListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.delete(url, data);
    }

    /**
     * @api {put} /v1/v1/organization_observation_target_lists/{observation_target_list_id}
     * @apiName updateTargetList
     * @apiDescription Modify the specified org_obs_target_list. JSON Payload is (name, obs_target_type, array of obs_targets and status)
     * @apiParam {Number} observation_target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTargetList({...})
     */
    updateTargetList(params: UpdateTargetListParams): APIPromise<UpdateTargetListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v1/organization_observation_target_lists/{target_list_id}/search/observation_targets
     * @apiName searchTargetsInObservationList
     * @apiDescription Search all the targets of the specified org_obs_target_list for the specified query_string Return (title, attributes,
                       obs_target_type_id, status, org_id, date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTargetsInObservationList({...})
     */
    searchTargetsInObservationList(params: SearchTargetsInObservationListParams): APIPromise<SearchTargetsInObservationListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v1/target_lists/{target_list_id}/search/targets
     * @apiName searchTargetsInList
     * @apiDescription Search all the targets of the specified org_obs_target_list for the specified query_string Return (title, attributes,
                       obs_target_type_id, status, org_id, date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTargetsInList({...})
     */
    searchTargetsInList(params: SearchTargetsInListParams): APIPromise<SearchTargetsInListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiName getTargetsFromList
     * @apiDescription Return all the targets of the specified org_obs_target_list Return (title, attributes, obs_target_type_id, status, org_id,
                       date_created, date_updated)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTargetsFromList({...})
     */
    getTargetsFromList(params: GetTargetsFromListParams): APIPromise<GetTargetsFromListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.get(url, data);
    }

    /**
     * @api {put} /v1/organization_observation_target_lists/{target_list_id}/observation_targets
     * @apiName updateTargetsInList
     * @apiDescription Add/Remove targets to the specified org_obs_target_list JSON payload is (action, list of targets)
     * @apiParam {Number} target_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTargetsInList({...})
     */
    updateTargetsInList(params: UpdateTargetsInListParams): APIPromise<UpdateTargetsInListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v1/target_lists/target_history
     * @apiName searchDataItemsInList
     * @apiDescription Search all the data_items for the specified obs_target_id and location_id Return (data_type_questions, data_item_value,
                       data_item_timestamp, _id) Results sorted by data_item_timestamp Photo data_items will be excluded from returned data
     * @apiExample {js} Example:
     *             gigwalk.customers.searchDataItemsInList({...})
     */
    searchDataItemsInList(params: SearchDataItemsInListParams): APIPromise<SearchDataItemsInListData> {
        const url = '/v1';
        const data = {
            params
        };

        return this.client.post(url, data);
    }
}
