// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    SearchOrganizationParams
} from './types';

export default class OrganizationSearch extends Resource {

    /**
     * @api {get} /v1/organizations/search search
     * @apiGroup OrganizationSearch
     * @apiName search
     * @apiDescription Returns matching organizations. Requires platform admin permissions.
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.organizationSearch.search({...})
     */
    search(params: SearchOrganizationParams): APIPromise<any> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/organizations/search${query}`);
    }
}
