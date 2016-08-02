// @flow
import ResourceBase from '../resourceBase';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>

type OrganizationTemplate = {
    organization_name: string,
    type: string,
    needs_core: boolean,
    core_customer_account: string,
    core_private_workforce: string,
    config: {
        logo_uri: string,
        hours_after_due: number
    },
    cloud9urls: Array<{
        url: string,
        customer_id: number,
        name: string
    }>
}

type DeleteOrganizationParams = {
    organization_id: number
}

type GetOrganizationParams = {
    organization_id: number
}

type UpdateOrganizationParams = {
    organization_id: number,
    organization: OrganizationTemplate
}

type CreateOrganizationParams = {
    organization: OrganizationTemplate
}

type DeleteOrganizationData = {

}

type GetOrganizationData = {

}

type UpdateOrganizationData = {

}

type GetOrganizationsData = {

}

type CreateOrganizationData = {

}

export default class Organzations extends ResourceBase {
    /**
     * @api {delete} /v1/organizations/{organization_id}
     * @apiName deleteOrganization
     * @apiDescription Delete specified organization
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganization({...})
     */
    deleteOrganization(params: DeleteOrganizationParams): APIPromise<DeleteOrganizationData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id
     * @apiName getOrganization
     * @apiDescription Return data fields (id, org_name, needs_core, core_customer_account, core_private_workforce, type, user_count, date_updated, status,
                       cloud9_urls, config)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganization({...})
     */
    getOrganization(params: GetOrganizationParams): APIPromise<GetOrganizationData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}
     * @apiName updateOrganization
     * @apiDescription JSON payload (email, org_name, needs_core, core_customer_account, core_private_workforce, type, status, config). Only super-admins
                       and above can update organization info. The endpoint can also be used to update the company logo. A file with name 'logo' has to be
                       added in a multipart form in order to do that. For example the following curl - curl -X PUT
                       http://stage-api.apps.gigwalk.com/v1/organizations/7 -F logo=@path/to/file.png --user user:password
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganization({...})
     */
    updateOrganization(params: UpdateOrganizationParams): APIPromise<UpdateOrganizationData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations
     * @apiName getOrganizations
     * @apiDescription Return data fields (id, org_name, needs_core, core_customer_account, core_private_workforce, type, user_count, date_updated, status,
                       cloud9_urls, config)
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizations({...})
     */
    getOrganizations(): APIPromise<GetOrganizationsData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations
     * @apiName createOrganization
     * @apiDescription JSON payload may have (email, org_name, needs_core, core_customer_account, core_private_workforce, type, status, config).
                       Only super-admins and above can update organization info
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganization({...})
     */
    createOrganization(params: CreateOrganizationParams): APIPromise<CreateOrganizationData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
