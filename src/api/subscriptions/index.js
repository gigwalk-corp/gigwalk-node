// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type SubscriptionTemplate = {
    title: string,
    description: string,
    start_date: string, // format yyyy-m-d
    end_date: string, // format yyyy-m-d
    version_id?: string,
    group_ids?: Array<number>,
    frequency_amount?: number,
    frequency_byweekday?: string,
    frequency_weekly?: string,
    frequency_window?: number,
    autoassign?: boolean,
    bundle_autoassign?: boolean,
    can_reschedule?: boolean,
    recurrence?: boolean,
    organization_data?: Object,
    optin_type?: string,
    dashboard_visible?: boolean,
    location_override?: boolean,
    two_way_rating_enabled?: boolean,
    rating_email?: string,
    is_multi_day?: boolean,
    multi_day_template_id?: number,
    state?: string
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

type SubscriptionSchema = {
    title: string,
    description: string,
    id: number,
    start_date: string,
    end_date: string,
    can_reschedule: boolean,
    worker_count: number,
    ticket_time_estimate: number,
    frequency_type: string,
    frequency_window: string,
    frequency_amount: number,
    frequency_byweekday: number,
    recurrence: string,
    optin_type: string,
    is_double_optin: boolean,
    location_override: boolean,
    two_way_rating_enabled: boolean,
    rating_email: string,
    schedule_type: string,
    autoassign: boolean,
    bundle_autoassign: boolean,
    dashboard_visible: boolean,
    version_id: number,
    state: string,
    date_created: string,
    date_updated: string,
    needs_core: boolean,
    groups: Array<number>,
    wave: {
        id: string,
        start_date: string,
        end_date: string,
        execution: number,
        total_locations: number
    },
    created_customer_id: number,
    created_customer: {
        id: number,
        first_name: string,
        last_name: string
    },
    organization_observation_target_lists: Array<{
        observation_target_list_id: number,
        data_types: Array<{
            data_type_id: number
        }>
    }>,
    organization_location_lists: Array<number>,
    organization_data: {
        hasMaterial: boolean,
        certifications: Object
    }
}

type DeleteSubscriptionData = [ // NEED TO CHECK
    number
]

type GetSubscriptionData = [
    SubscriptionSchema
]

type CreateClonedSubscriptionData = [ // NEED TO CHECK
    SubscriptionSchema
]

type UpdateSubscriptionData = [ // NEED TO CHECK
    SubscriptionSchema
]

type CreateSubscriptionsData = Array<SubscriptionSchema> // NEED TO CHECK

type SearchSubscriptionsWithParamsData = [ // NEED TO CHECK

]

type DeleteOrganizationSubscriptionData = [
    number
]

type UpdateOrganizationSubscriptionData = [
    SubscriptionSchema
]

type SearchSubscriptionsWithFieldData = { // NEED TO FINISH
    search_field: string,
    search_results: Object
}

type SearchSubscriptionsData = {
    total_records: number,
    search_results: Array<{
        score: number,
        data: {
            title: string,
            description: string,
            id: number,
            organization_id: number,
            start_date: string,
            end_date: string,
            total_locations: number,
            execution: number,
            state: string,
            created_customer: string,
            group_id: Array<number>,
            metadata: Object
        }
    }>
  }

export default class Subscriptions extends Resource {
    /**
     * @api {delete} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName deleteSubscription
     * @apiDescription Delete the organization_subscription. This is a hard delete.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteSubscription({...})
     */
    deleteSubscription(params: DeleteSubscriptionParams): APIPromise<DeleteSubscriptionData> {
        return this.client.delete(`/v1/organization_subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {get} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName getSubscription
     * @apiDescription If specified, return information about the organization_subscription. Otherwise, list all organization_subscriptions of the organization.
                       Defaults to the current_user's organization if no organization_id is specified.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getSubscription({...})
     */
    getSubscription(params: GetSubscriptionParams): APIPromise<GetSubscriptionData> {
        return this.client.get(`/v1/organization_subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {post} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName createClonedSubscription
     * @apiDescription Create a new subscription by cloning the given org_subscription or schedule autoassignment for the subscription.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {String} action
     * @apiExample {js} Example:
     *             gigwalk.customers.createClonedSubscription({...})
     */
    createClonedSubscription(params: CreateClonedSubscriptionParams): APIPromise<CreateClonedSubscriptionData> {
        const data = {
            action: params.action
        };

        return this.client.post(`/v1/organization_subscriptions/${params.organization_subscription_id}`, data);
    }

    /**
     * @api {put} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName updateSubscription
     * @apiDescription Update organization_subscription.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {SubscriptionTemplate} subscription
     * @apiExample {js} Example:
     *             gigwalk.customers.updateSubscription({...})
     */
    updateSubscription(params: UpdateSubscriptionParams): APIPromise<UpdateSubscriptionData> {
        return this.client.put(`/v1/organization_subscriptions/${params.organization_subscription_id}`, { ...params.subscription });
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions
     * @apiName createSubscriptions
     * @apiDescription Create new organization_subscription(s). Maximum of five new subscriptions.
     * @apiParam {Number} organization_id
     * @apiParam {Array<SubscriptionTemplate>} subscriptions
     * @apiExample {js} Example:
     *             gigwalk.customers.createSubscriptions({...})
     */
    createSubscriptions(params: CreateSubscriptionsParams): APIPromise<CreateSubscriptionsData> {
        const data = {
            projects: params.subscriptions
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions`, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/search
     * @apiName searchSubscriptionsWithParams
     * @apiDescription Search organization_subscriptions. search_parameters should be in key op value (e.g. date_created > now; title = 'project_name').
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithParams({...})
     */
    searchSubscriptionsWithParams(params: SearchSubscriptionsWithParamsParams): APIPromise<SearchSubscriptionsWithParamsData> {
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions/search`, data);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/subscriptions/{organization_subscription_id}
     * @apiName deleteOrganizationSubscription
     * @apiDescription Delete the specified project. Only DRAFT projects may be deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationSubscription({...})
     */
    deleteOrganizationSubscription(params: DeleteOrganizationSubscriptionParams): APIPromise<DeleteOrganizationSubscriptionData> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/subscriptions/{organization_subscription_id}
     * @apiName updateOrganizationSubscription
     * @apiDescription Modify project.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {SubscriptionTemplate} subscription
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationSubscription({...})
     */
    updateOrganizationSubscription(params: UpdateOrganizationSubscriptionParams): APIPromise<UpdateOrganizationSubscriptionData> {
        return this.client.put(`/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`, { ...params.subscription });
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions/filters
     * @apiName searchSubscriptionsWithField
     * @apiDescription Searches ES documents using search_field.
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithField({...})
     */
    searchSubscriptionsWithField(params: SearchSubscriptionsWithFieldParams): APIPromise<SearchSubscriptionsWithFieldData> {
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/subscriptions/filters`, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions
     * @apiName searchSubscriptions
     * @apiDescription Searches all strings in ES documents.
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptions({...})
     */
    searchSubscriptions(params: SearchSubscriptionsParams): APIPromise<SearchSubscriptionsData> {
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/subscriptions`, data);
    }
}
