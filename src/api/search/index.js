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
    _shards: {
        successful: number,
        total: number,
        failed: number
    },
    hits: {
        total: number,
        max_score: number,
        hits: Array<{
            _source: Object,
            _score: number,
            _type: string,
            _id: number,
            _index: string,
            highlight?: Object
        }>
    },
    took: number,
    timed_out: boolean
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
     * @apiName searchDocuments
     * @apiDescription ES Search for the given query_string This searches all the ES docs for the given query_string and returns results in ES idiom. Unused?
     * @apiParam {SearchDocumentsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchDocuments({...})
     */
    searchDocuments(params: SearchDocumentsParams): APIPromise<SearchDocumentsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/search${queryString}`);
    }

    /**
     * @api {post} /v1/search
     * @apiName createSearch
     * @apiDescription Not implemented
     * @apiExample {js} Example:
     *             gigwalk.customers.createSearch({...})
     */
    createSearch(): APIPromise<CreateSearchData> {
        return this.client.post('/v1/search');
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/search/{index_type}
     * @apiName searchOrganization
     * @apiDescription We can search in groups, members, location_lists, target_lists, tickets or subscriptions filtered by the org
     * @apiParam {Number} organization_id
     * @apiParam {String} index_type
     * @apiParam {SearchOrganizationQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganization({...})
     */
    searchOrganization(params: SearchOrganizationParams): APIPromise<SearchOrganizationData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/search/${params.index_type}${queryString}`);
    }
}
