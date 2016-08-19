// @flow

export type Subscription = {
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
    wave: Object,
    created_customer_id: number,
    created_customer: Object,
    organization_observation_target_lists: Array<Object>,
    organization_location_lists: Array<number>,
    organization_data: Object
}

export type ESSubcriptionSearch = {
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

type SubscriptionFields = {
    title: string,
    description: string,
    start_date: string,
    end_date: string,
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

export type DeleteSubscriptionParams = {
    organization_subscription_id: number
}

export type GetSubscriptionParams = {
    organization_subscription_id: number
}

export type CreateClonedSubscriptionParams = {
    organization_subscription_id: number,
    action: string
}

export type UpdateSubscriptionParams = {
    organization_subscription_id: number,
    version_id: number,
    subscription: SubscriptionFields
}

export type CreateSubscriptionsParams = {
    organization_id: number,
    subscriptions: Array<SubscriptionFields>
}

export type SearchSubscriptionsWithParamsParams = {
    organization_id: number,
    query_string: string
}

export type DeleteOrganizationSubscriptionParams = {
    organization_id: number,
    organization_subscription_id: number
}

export type UpdateOrganizationSubscriptionParams = {
    organization_id: number,
    organization_subscription_id: number,
    version_id: number,
    subscription: SubscriptionFields
}

export type SearchSubscriptionsWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string
}

export type SearchSubscriptionsParams = {
    organization_id: number,
    query_string: string
}
