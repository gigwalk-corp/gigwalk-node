// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

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
    organization_data: Object,
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
     * @apiDescription Delete the given organization_subscription from the db
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteSubscription({...})
     */
    deleteSubscription(params: DeleteSubscriptionParams): APIPromise<DeleteSubscriptionData> {
        const url = `/v1/organization_subscriptions/${params.organization_subscription_id}`;

        return this.client.delete(url);
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
        const url = `/v1/organization_subscriptions/${params.organization_subscription_id}`;

        return this.client.get(url);
    }

    /**
     * @api {post} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName createClonedSubscription
     * @apiDescription Schedule autoassignment for the given organization_subscription; or create a new org_subscription by cloning the given org_subscription
     and return the info
     * @apiParam {Number} organization_subscription_id
     * @apiParam {String} action
     * @apiExample {js} Example:
     *             gigwalk.customers.createClonedSubscription({...})
     */
    createClonedSubscription(params: CreateClonedSubscriptionParams): APIPromise<CreateClonedSubscriptionData> {
        const url = `/v1/organization_subscriptions/${params.organization_subscription_id}`;
        const data = {
            action: params.action
        };

        return this.client.post(url, data);
    }

    /**
     * @api {put} /v1/organization_subscriptions/{organization_subscription_id}
     * @apiName updateSubscription
     * @apiDescription Using the given parameters, update the organization_subscription
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {SubscriptionTemplate} subscription
     * @apiExample {js} Example:
     *             gigwalk.customers.updateSubscription({...})
     */
    updateSubscription(params: UpdateSubscriptionParams): APIPromise<UpdateSubscriptionData> {
        const url = `/v1/organization_subscriptions/${params.organization_subscription_id}`;
        const data = params.subscription;

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions
     * @apiName createSubscriptions
     * @apiDescription Create new organization_subscriptions using the data provided (max 5)
     * @apiParam {Number} organization_id
     * @apiParam {Array<SubscriptionTemplate>} subscriptions
     * @apiExample {js} Example:
     *             gigwalk.customers.createSubscriptions({...})
     */
    createSubscriptions(params: CreateSubscriptionsParams): APIPromise<CreateSubscriptionsData> {
        const url = `/v1/organizations/${params.organization_id}/subscriptions`;
        const data = {
            subscriptions: params.subscriptions
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/search
     * @apiName searchSubscriptionsWithParams
     * @apiDescription search_parameters can be of the form key op value e.g. date_created > now, or title = 'project_name'
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithParams({...})
     */
    searchSubscriptionsWithParams(params: SearchSubscriptionsWithParamsParams): APIPromise<SearchSubscriptionsWithParamsData> {
        const url = `/v1/organizations/${params.organization_id}/subscriptions/search`;
        const data = {
            query_string: params.query_string
        };

        return this.client.post(url, data);
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
        const url = `/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`;

        return this.client.delete(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/subscriptions/{organization_subscription_id}
     * @apiName updateOrganizationSubscription
     * @apiDescription Edit the specified project with the given JSON payload
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {SubscriptionTemplate} subscription
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationSubscription({...})
     */
    updateOrganizationSubscription(params: UpdateOrganizationSubscriptionParams): APIPromise<UpdateOrganizationSubscriptionData> {
        const url = `/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`;
        const data = params.subscription;

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions/filters
     * @apiName searchSubscriptionsWithField
     * @apiDescription This searches the specified search_field in the ES document and finds a match only if the specified search_field contain the
     given value. Does not handle limit/offset, metadata not filled up, why?
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionsWithField({...})
     */
    searchSubscriptionsWithField(params: SearchSubscriptionsWithFieldParams): APIPromise<SearchSubscriptionsWithFieldData> {
        const url = `/v2/organizations/${params.organization_id}/search/subscriptions/filters`;
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/subscriptions
     * @apiName searchSubscriptions
     * @apiDescription This searches all strings in the ES document and finds a match if any of these strings contain the given string. Metadata not
     filled up, why?
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptions({...})
     */
    searchSubscriptions(params: SearchSubscriptionsParams): APIPromise<SearchSubscriptionsData> {
        const url = `/v2/organizations/${params.organization_id}/search/subscriptions`;
        const data = {
            query_string: params.query_string
        };

        return this.client.post(url, data);
    }
}
