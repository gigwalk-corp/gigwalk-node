// @flow

export type ESTicket = {
    id: number,
    start_date: string,
    due_date: string,
    time_estimate: number,
    status: string,
    location: Object,
    organization_subscription: Object,

    date_created?: string,
    date_updated?: string,
    date_scheduled?: string,
    date_submitted?: string,
    customer?: Object,
    calendar_event?: Object,

    user_distance?: number,
    map_distance?: number,
    optin_type?: string,
    is_double_optin?: boolean
}

export type TicketEvent = {
    id: string,
    ticket_id: number,
    ticket_event_type: string,
    ticket_event_date: string,
    ticket_event_data: Object,
    created_customer: Object
}

export type Ticket = {
    title: string,
    description: string,
    id: number,
    organization_id: number,
    start_date: string,
    due_date: string,
    time_estimate: number,
    date_created: string,
    date_updated: string,
    omni_date_updated: string,
    date_scheduled: string,
    can_reschedule: boolean,
    date_submitted: string,
    execution_state: string,
    wave_id: string,
    status: string,
    assigned_customer_name: string,
    assigned_customer_id: number,
    assigned_customer_email: string,
    template_map: Object,
    data_items: Object,
    data_types: Array<Object>,
    data_type_map: Object,
    observation_target_map: Object,
    observation_target_metadata_map: Object,
    location: Object,
    calendar_event: Object,
    subscription_id: number,
    organization_subscription_version_id_ref: number,
    subscription: Object,
    subscription_metadata: Object,
    ticket_metadata: Object
}

export type ESTicketSearch = {
    total_records: number,
    search_results: Array<{
        score: number,
        data: {
            title: string,
            ticket_id: number,
            date_created: string,
            date_updated: string,
            start_date: string,
            due_date: string,
            time_estimate: number,
            dashboard_visible: boolean,
            optin_type: string,
            is_double_optin: boolean,
            ticket_status: string,
            assigned_customer_id: number,
            assigned_customer_name: string,
            assigned_customer_email: string,
            organization_id: number,
            organization_subscription_id: number,
            organization_subscription_description: string,
            organization_subscription_can_reschedule: boolean,
            organization_subscription_groups: Array<number>,
            location_title: string,
            location_id: number,
            location_organization_id: number,
            location_date_created: string,
            location_date_updated: string,
            location_country: string,
            location_locality: string,
            location_postal_code: number,
            location_geopoint: string,
            location_administrative_area_level_1: string,
            location_administrative_area_level_2: string,
            location_formatted_address: string,
            location_specificity: string,
            location_status: string,
            group_id: Array<number>,
            targets: Array<number>,
        }
    }>
}

type DataItemFields = {
  data_type_id: number,
  observation_target_id: number,
  data_item_value: Array<number>,
  timestamp: number,
  latitude: number,
  longitude: number,
  template_id: number,
  device_id: number,
  app_version: number,
  user_agent: string
}

type ESTicketSearchFields = {
  search_type: string,
  latitude?: number,
  uom?: number,
  longitude?: number,
  radius?: number,
  status?: string,
  date_type?: string,
  start_date?: string,
  end_date?: string,
  timezone?: string
}

type SearchGroupTicketsQuery = {
    field: string,
    operator: string,
    value: string | boolean
}

type BoundingBoxFields = {
    top_left: {
        lat: number,
        lon: number
    },
    bottom_right: {
        lat: number,
        lon: number
    }
}

type QueryParamFields = {
    limit?: number,
    offset?: number
}

export type SearchGroupTicketsParams = {
    group_id: number,
    query_params?: QueryParamFields,
    bounding_box?: BoundingBoxFields,
    timezone?: string,
    query?: Array<SearchGroupTicketsQuery>
}

type GetCurrentCustomerTicketsQuery = {
    show_customer_metadata?: boolean
}

export type GetCurrentCustomerTicketsParams = {
    query?: GetCurrentCustomerTicketsQuery
}

type GetCustomerTicketsQuery = {
    show_customer_metadata?: boolean
}

export type GetCustomerTicketsParams = {
    customer_id: number,
    query: GetCustomerTicketsQuery
}

type SearchOrganizationTicketsQuery = {
    limit?: number,
    offset?: number
}

export type SearchOrganizationTicketsParams = {
    organization_id: number,
    query_string: string,
    query?: SearchOrganizationTicketsQuery
}

type SearchOrganizationTicketsWithFieldQuery = {
    limit?: number,
    offset?: number
}

export type SearchOrganizationTicketsWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string,
    query?: SearchOrganizationTicketsWithFieldQuery
}

export type CreateTicketDataItemParams = {
    ticket_id: number,
    data_item: DataItemFields
}

export type DeleteTicketDataItemParams = {
    ticket_id: number,
    data_item_id: number
}

export type CreateClonedTicketParams = {
    ticket_id: number
}

export type SubmitTicketParams = {
    ticket_id: number
}

type GetTicketQuery = {
    show_customer_metadata?: boolean
}

export type GetTicketParams = {
    ticket_id: number,
    query?: GetTicketQuery
}

type SearchTicketsWithIDQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

export type SearchTicketsWithIDParams = {
    ticket_id: number,
    search: ESTicketSearchFields,
    query?: SearchTicketsWithIDQuery
}

type UpdateAction = 'assign' | 'extend' | 'schedule' | 'edit' | 'optin';

export type UpdateTicketParams = {
    ticket_id: number,
    action: UpdateAction,
    customer_id: string,
    force?: boolean,
}

export type BulkUpdateTicketParams = {
    ticket_ids: Array<number>,
    action: UpdateAction,
    customer_id: string,
    force?: boolean,
}

type SearchTicketsQuery = {
    offset?: number,
    limit?: number
}

export type SearchTicketsParams = {
    search: ESTicketSearchFields,
    query?: SearchTicketsQuery
}

export type UpdateTicketWithStateParams = {
    ticket_id: number,
    execution_state: string,
    action: 'assign' | 'extend' | 'schedule' | 'edit' | 'optin',
    ticket_ids: Array<number>,
    customer_id: string
}

type GetOrganizationTicketsQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

export type GetOrganizationTicketsParams = {
    organization_id: number,
    query?: GetOrganizationTicketsQuery
}

type SearchOrganizationTicketsWithCriteriaQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

export type SearchOrganizationTicketsWithCriteriaParams = {
    organization_id: number,
    search: ESTicketSearchFields,
    query?: SearchOrganizationTicketsWithCriteriaQuery
}

type GetSubscriptionTicketsQuery = {
    offset?: number,
    limit?: number
}

export type GetSubscriptionTicketsParams = {
    subscription_id: number,
    query?: GetSubscriptionTicketsQuery
}

type SearchSubscriptionTicketsQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

export type SearchSubscriptionTicketsParams = {
    subscription_id: number,
    search: ESTicketSearchFields,
    query?: SearchSubscriptionTicketsQuery
}

type GetTicketEventsQuery = {
    limit?: number,
    offset?: number
}

export type GetTicketEventsParams = {
    ticket_id: number,
    query?: GetTicketEventsQuery
}

export type GetTicketsInAreaParams = {
    map_lat: number,
    map_lon: number,
    radius: number
}
