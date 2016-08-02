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

type SubscriptionTemplate = {
    version_id: string,
    group_ids: Array<number>,
    frequency_amount: number,
    frequency_byweekday: string,
    frequency_weekly: string,
    frequency_window: number,
    autoassign: boolean,
    bundle_autoassign: boolean,
    can_reschedule: boolean,
    recurrence: boolean,
    organization_data: {},
    optin_type: string,
    dashboard_visible: boolean,
    location_override: boolean,
    two_way_rating_enabled: boolean,
    rating_email: string,
    is_multi_day: boolean,
    multi_day_template_id: number,
    state: string
}

type DeleteSubscriptionParams = {
    organization_subscription_id: number
}

type GetSubscriptionParams = {
    organization_subscription_id: number
}

type CreateClonedSubscriptionParams = {
    organization_subscription_id: number,
    action: string
}

type UpdateSubscriptionParams = {
    organization_subscription_id: number,
    version_id: number,
    subscription: SubscriptionTemplate
}

type CreateSubscriptionsParams = {
    organization_id: number,
    subscriptions: Array<SubscriptionTemplate>
}

type SearchSubscriptionsWithParamsParams = {
    organization_id: number,
    query_string: string
}

type DeleteOrganizationSubscriptionParams = {
    organization_id: number,
    organization_subscription_id: number
}

type UpdateOrganizationSubscriptionParams = {
    organization_id: number,
    organization_subscription_id: number,
    version_id: number,
    subscription: SubscriptionTemplate
}

type SearchSubscriptionsWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string
}

type SearchSubscriptionsParams = {
    organization_id: number,
    query_string: string
}

type DeleteSubscriptionData = {

}

type GetSubscriptionData = {

}

type CreateClonedSubscriptionData = {

}

type UpdateSubscriptionData = {

}

type CreateSubscriptionsData = {

}

type SearchSubscriptionsWithParamsData = {

}

type DeleteOrganizationSubscriptionData = {

}

type UpdateOrganizationSubscriptionData = {

}

type SearchSubscriptionsWithFieldData = {

}

type SearchSubscriptionsData = {

}

export default class Subscriptions extends ResourceBase {
    /**
     * @api {delete} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName deleteSubscription
     * @apiDescription Delete the given organization_subscription from the db
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteSubscription({...})
     */
    deleteSubscription(params: DeleteSubscriptionParams): APIPromise<DeleteSubscriptionData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName getSubscription
     * @apiDescription Return info about the organization_subscription, if specified. Otherwise list all organization_subscriptions of the given organization.
                       If no organization is specified, use the current_user's organization_id.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getSubscription({...})
     */
    getSubscription(params: GetSubscriptionParams): APIPromise<GetSubscriptionData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName createClonedSubscription
     * @apiDescription Schedule autoassignment for the given organization_subscription; or create a new org_subscription by cloning the given org_subscription
                       and return the info
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createClonedSubscription({...})
     */
    createClonedSubscription(params: CreateSubscriptionsParams): APIPromise<CreateClonedSubscriptionData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName updateSubscription
     * @apiDescription Using the given parameters, update the organization_subscription
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateSubscription({...})
     */
    updateSubscription(params: UpdateSubscriptionParams): APIPromise<UpdateSubscriptionData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions
     * @apiName createSubscriptions
     * @apiDescription Create new organization_subscriptions using the data provided (max 5)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createSubscriptions({...})
     */
    createSubscriptions(params: CreateSubscriptionsParams): APIPromise<CreateSubscriptionsData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/search
     * @apiName searchSubscriptionsWithParams
     * @apiDescription search_parameters can be of the form key op value e.g. date_created > now, or title = 'project_name'
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithParams({...})
     */
    searchSubscriptionsWithParams(params: SearchSubscriptionsWithParamsParams): APIPromise<SearchSubscriptionsWithParamsParams> {
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
    deleteOrganizationSubscription(params: DeleteOrganizationSubscriptionParams): APIPromise<DeleteOrganizationSubscriptionData> {
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
    updateOrganizationSubscription(params: UpdateOrganizationSubscriptionParams): APIPromise<UpdateOrganizationSubscriptionData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions/filters
     * @apiName searchSubscriptionsWithField
     * @apiDescription This searches the specified search_field in the ES document and finds a match only if the specified search_field contain the
                       given value. Does not handle limit/offset, metadata not filled up, why?
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithField({...})
     */
    searchSubscriptionsWithField(params: SearchSubscriptionsWithFieldParams): APIPromise<SearchSubscriptionsWithFieldData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v2`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions
     * @apiName searchSubscriptions
     * @apiDescription This searches all strings in the ES document and finds a match if any of these strings contain the given string. Metadata not
                       filled up, why?
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptions({...})
     */
    searchSubscriptions(params: SearchSubscriptionsParams): APIPromise<SearchSubscriptionsData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v2`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
