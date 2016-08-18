// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type SearchDocumentsQuery = {
    q?: string
}

type SearchDocumentsParams = {
    query?: SearchDocumentsQuery
}

type SearchOrganizationQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    certification_id?: number
}

type SearchOrganizationParams = {
    organization_id: number,
    index_type: string,
    query?: SearchOrganizationQuery
}

type searchResultsSchema = {
    took: number,
    timed_out: boolean,
    _shards: {
        successful: number,
        failed: number,
        total: number
    },
    hits: {
        total: number,
        max_score: number,
        hits: Array<{
            _score: number,
            _id: number,
            _type: string,
            _index: string,
            _source: Object,
            highlight?: Object
        }>
    }
}

type SearchDocumentsData = [
    searchResultsSchema
]

type CreateSearchData = [
    string
]

type SearchOrganizationData = [
    searchResultsSchema
]

export default class Search extends Resource {
    /**
     * @api {get} /v1/search
     * @apiGroup Search
     * @apiName searchDocuments
     * @apiDescription Search all ES docs for the given query_string. Returns results in ES idiom.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchDocuments({...})
     */
    searchDocuments(params: SearchDocumentsParams): APIPromise<SearchDocumentsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/search${queryString}`);
    }

    /**
     * @api {post} /v1/search
     * @apiGroup Search
     * @apiName createSearch
     * @apiDescription Not implemented.
     * @apiExample {js} Example:
     *             gigwalk.search.createSearch({...})
     */
    createSearch(): APIPromise<CreateSearchData> {
        return this.client.post('/v1/search');
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/search/{index_type}
     * @apiGroup Search
     * @apiName searchOrganization
     * @apiDescription Search in an organization within groups, members, location_lists, target_lists, tickets or subscriptions.
                       Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} index_type
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.search.searchOrganization({...})
     */
    searchOrganization(params: SearchOrganizationParams): APIPromise<SearchOrganizationData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/search/${params.index_type}${queryString}`);
    }
}
