// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    ESSearch,
    SearchDocumentsParams,
    SearchOrganizationParams
} from './types';

export default class Search extends Resource {
    /**
     * @api {get} /v1/search searchDocuments
     * @apiGroup Search
     * @apiName searchDocuments
     * @apiDescription Search all ES docs for the given query_string. Returns results in ES idiom.
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.customers.searchDocuments({...})
     */
    searchDocuments(params: SearchDocumentsParams): APIPromise<[ESSearch]> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/search${query}`);
    }

    /**
     * @api {post} /v1/search create
     * @apiGroup Search
     * @apiName create
     * @apiDescription Not implemented.
     * @apiExample {js} Example:
     *             gigwalk.search.create({...})
     */
    create(): APIPromise<[string]> {
        return this.client.post('/v1/search');
    }

    /**
     * @api {get} /v1/organizations/:organization_id/search/:index_type searchOrganization
     * @apiGroup Search
     * @apiName searchOrganization
     * @apiDescription Search in an organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} [index_type='tickets']
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.search.searchOrganization({...})
     */
    searchOrganization(params: SearchOrganizationParams): APIPromise<[ESSearch]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/search/${(params.index_type) ? params.index_type : 'tickets'}${query}`);
    }
}
