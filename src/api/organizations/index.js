// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Organization,
    DeleteOrganizationParams,
    GetOrganizationParams,
    UpdateOrganizationParams,
    GetOrganizationsParams,
    CreateOrganizationParams
} from './types';

export default class Organzations extends Resource {
    /**
     * @api {delete} /v1/organizations/:organization_id delete
     * @apiGroup Organizations
     * @apiName delete
     * @apiDescription Delete organization.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.organizations.delete({...})
     */
    delete(params: DeleteOrganizationParams): APIPromise<null> {
        return this.client.delete(`/v1/organizations/${params.organization_id}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id get
     * @apiGroup Organizations
     * @apiName get
     * @apiDescription Get organization.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.organizations.get({...})
     */
    get(params: GetOrganizationParams): APIPromise<[Organization]> {
        return this.client.get(`/v1/organizations/${params.organization_id}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id update
     * @apiGroup Organizations
     * @apiName update
     * @apiDescription Update organization information. The endpoint can also be used to update the company logo. A file with
                       name 'logo' has to be added in a multipart form in order to do that. For example, the following curl:
                       - curl -X PUT http://stage-api.apps.gigwalk.com/v1/organizations/7 -F logo=@path/to/file.png --user user:password
     * @apiParam {Number} organization_id
     * @apiParam {Object} organization
     * @apiExample {js} Example:
     *             gigwalk.organizations.update({...})
     */
    update(params: UpdateOrganizationParams): APIPromise<[Organization]> {
        return this.client.put(`/v1/organizations/${params.organization_id}`, { ...params.organization });
    }

    /**
     * @api {get} /v1/organizations getAll
     * @apiGroup Organizations
     * @apiName getAll
     * @apiDescription Get all organizations. Capable of returning paginated results.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.organizations.getAll({...})
     */
    getAll(params: GetOrganizationsParams): APIPromise<Array<Organization>> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/organizations${query}`);
    }

    /**
     * @api {post} /v1/organizations create
     * @apiGroup Organizations
     * @apiName create
     * @apiDescription Crete organization. Only super-admins and above can create or update organization information.
     * @apiParam {Object} organization
     * @apiExample {js} Example:
     *             gigwalk.organizations.create({...})
     */
    create(params: CreateOrganizationParams): APIPromise<[Organization]> {
        return this.client.post('/v1/organizations', { ...params.organization });
    }
}
