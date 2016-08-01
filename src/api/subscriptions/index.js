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

export default class Subscriptions extends ResourceBase {
    /**
     * @api {delete} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName deleteOrganizationSubscription
     * @apiDescription Delete the given organization_subscription from the db
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationSubscription({...})
     */
    deleteOrganizationSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName getOrganizationSubscription
     * @apiDescription Return info about the organization_subscription, if specified. Otherwise list all organization_subscriptions of the given organization.
                       If no organization is specified, use the current_user's organization_id.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationSubscription({...})
     */
    getOrganizationSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName createClonedOrganizationSubscription
     * @apiDescription Schedule autoassignment for the given organization_subscription; or create a new org_subscription by cloning the given org_subscription
                       and return the info
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createClonedOrganizationSubscription({...})
     */
    createClonedOrganizationSubscription(params: any): APIPromise<any> { // POSSIBLY SPLIT INTO 2?
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName updateOrganiztionSubscription
     * @apiDescription Using the given parameters, update the organization_subscription
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganiztionSubscription({...})
     */
    updateOrganiztionSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions
     * @apiName createOranizationSubscriptions
     * @apiDescription Create new organization_subscriptions using the data provided (max 5)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOranizationSubscriptions({...})
     */
    createOranizationSubscriptions(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/search
     * @apiName searchOrganizationSubscription
     * @apiDescription search_parameters can be of the form "key op value" e.g. date_created > now, or title = 'project_name'
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationSubscription({...})
     */
    searchOrganizationSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/subscriptions/{organization_subscription_id}
     * @apiName deleteOrganizationSubscription
     * @apiDescription Delete the specified project (Only Draft projects may be deleted)
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationSubscription({...})
     */
    deleteOrganizationSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/subscriptions/{organization_subscription_id}
     * @apiName updateOrganizationSubscription
     * @apiDescription Edit the specified project with the given JSON payload
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationSubscription({...})
     */
    updateOrganizationSubscription(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions/filters
     * @apiName searchOrganizationSubscriptions
     * @apiDescription This searches the specified search_field in the ES document and finds a match only if the specified search_field contain the
                       given value. Does not handle limit/offset, metadata not filled up, why?
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationSubscriptions({...})
     */
    searchOrganizationSubscriptions(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v2`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions
     * @apiName searchOrganizationSubscriptions
     * @apiDescription This searches all strings in the ES document and finds a match if any of these strings contain the given string. Metadata not
                       filled up, why?
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationSubscriptions({...})
     */
    searchOrganizationSubscriptions(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v2`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
