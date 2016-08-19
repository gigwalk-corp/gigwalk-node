// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    SearchGroupWithTypeParams,
    SearchGroupParams,
    SearchGroupTicketsParams
} from './types';

export default class GroupSearch extends Resource {

    /**
     * @api {get} /v1/groups/:group_id/search/:index_type searchWithType
     * @apiGroup GroupSearch
     * @apiName searchWithType
     * @apiDescription Search for the given queryString in either groups tickets or members.
     * @apiParam {Number} group_id
     * @apiParam {String} [index_type='tickets']
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.groupSearch.searchWithType({...})
     */
    searchWithType(params: SearchGroupWithTypeParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/groups/${params.group_id}/search/${(params.index_type) ? params.index_type : 'tickets'}${query}`);
    }

    /**
     * @api {post} /v2/groups/:group_id/search/tickets search
     * @apiGroup GroupSearch
     * @apiName search
     * @apiDescription Search for the given queryString in tickets within the group. This will search in all strings in the group doc.
     * @apiParam {Number} group_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.groupSearch.search({...})
     */
    search(params: SearchGroupParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.post(`/v2/groups/${params.group_id}/search/tickets${query}`);
    }

    /**
     * @api {post} /v2/groups/:group_id/search/tickets/filters searchTickets
     * @apiGroup GroupSearch
     * @apiName searchTickets
     * @apiDescription Filter tickets of the group (e.g. TICKET_STATUS = SUBMITTED).
     * @apiParam {Number} group_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.groupSearch.searchTickets({...})
     */
    searchTickets(params: SearchGroupTicketsParams): APIPromise<any> {
        return this.client.post(`/v2/groups/${params.group_id}/search/tickets/filters`, { ...params.query });
    }
}
