// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type DataItemTemplate = {
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

type TicketSearchTemplate = {
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

type QueryParamTemplate = {
    field: string,
    operator: string,
    value: string
}

type BoundingBoxTemplate = {
    top_left: {
        lat: number,
        lon: number
    },
    bottom_right: {
        lat: number,
        lon: number
    }
}

type SearchGroupTicketsQuery = {
    limit?: number,
    offset?: number
}

type SearchGroupTicketsParams = {
    group_id: number,
    query_params?: Array<QueryParamTemplate>,
    bounding_box?: BoundingBoxTemplate,
    timezone?: string,
    query?: SearchGroupTicketsQuery
}

type GetCurrentCustomerTicketsQuery = {
    show_customer_metadata?: boolean
}

type GetCurrentCustomerTicketsParams = {
    query?: GetCurrentCustomerTicketsQuery
}

type GetCustomerTicketsQuery = {
    show_customer_metadata?: boolean
}

type GetCustomerTicketsParams = {
    customer_id: number,
    query: GetCustomerTicketsQuery
}

type SearchOrganizationTicketsQuery = {
    limit?: number,
    offset?: number
}

type SearchOrganizationTicketsParams = {
    organization_id: number,
    query_string: string,
    query?: SearchOrganizationTicketsQuery
}

type SearchOrganizationTicketsWithFieldQuery = {
    limit?: number,
    offset?: number
}

type SearchOrganizationTicketsWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string,
    query?: SearchOrganizationTicketsWithFieldQuery
}

type CreateTicketDataItemParams = {
    ticket_id: number,
    data_item: DataItemTemplate
}

type DeleteTicketDataItemParams = {
    ticket_id: number,
    data_item_id: number
}

type CreateClonedTicketParams = {
    ticket_id: number
}

type SubmitTicketParams = {
    ticket_id: number
}

type GetTicketQuery = {
    show_customer_metadata?: boolean
}

type GetTicketParams = {
    ticket_id: number,
    query?: GetTicketQuery
}

type SearchTicketsWithIDQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

type SearchTicketsWithIDParams = {
    ticket_id: number,
    search: TicketSearchTemplate,
    query?: SearchTicketsWithIDQuery
}

type UpdateTicketParams = {
    ticket_id: number,
    action: string,
    ticket_ids: Array<number>,
    customer_id: string
}

type SearchTicketsQuery = {
    offset?: number,
    limit?: number
}

type SearchTicketsParams = {
    search: TicketSearchTemplate,
    query?: SearchTicketsQuery
}

type UpdateTicketWithStateParams = {
    ticket_id: number,
    execution_state: string,
    action: string,
    ticket_ids: Array<number>,
    customer_id: string
}

type GetOrganizationTicketsQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

type GetOrganizationTicketsParams = {
    organization_id: number,
    query?: GetOrganizationTicketsQuery
}

type SearchOrganizationTicketsWithCriteriaQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

type SearchOrganizationTicketsWithCriteriaParams = {
    organization_id: number,
    search: TicketSearchTemplate,
    query?: SearchOrganizationTicketsWithCriteriaQuery
}

type GetSubscriptionTicketsQuery = {
    offset?: number,
    limit?: number
}

type GetSubscriptionTicketsParams = {
    subscription_id: number,
    query?: GetSubscriptionTicketsQuery
}

type SearchSubscriptionTicketsQuery = {
    limit?: number,
    offset?: number,
    show_customer_metadata?: boolean
}

type SearchSubscriptionTicketsParams = {
    subscription_id: number,
    search: TicketSearchTemplate,
    query?: SearchSubscriptionTicketsQuery
}

type GetTicketEventsQuery = {
    limit?: number,
    offset?: number
}

type GetTicketEventsParams = {
    ticket_id: number,
    query?: GetTicketEventsQuery
}

type GetTicketsInAreaParams = {
    map_lat: number,
    map_lon: number,
    radius: number
}

type TicketMediumSchema = {
    id: number,
    start_date: string,
    due_date: string,
    time_estimate: number,
    date_created: string,
    date_updated: string,
    date_scheduled: string,
    date_submitted: string,
    status: string,
    customer: Object,
    calendar_event: Object,
    location: Object,
    organization_subscription: Object
}

type TicketSummarySchema = {
    id: number,
    user_distance: number,
    map_distance: number,
    start_date: string,
    due_date: string,
    time_estimate: number,
    optin_type: string,
    is_double_optin: boolean,
    status: string,
    location: Object,
    organization_subscription: Object
}

type TicketEventSchema = {
    id: string,
    ticket_id: number,
    ticket_event_type: string,
    ticket_event_date: string,
    ticket_event_data: Object,
    created_customer: {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        photo_url: string
    }
}

type TicketSchema = {
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

type TicketSearchSchema = {
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

type SearchGroupTicketsData = Array<TicketMediumSchema>

type GetCurrentCustomerTicketsData = Array<TicketSchema>

type GetCustomerTicketsData = Array<TicketSchema> // NEED TO CHECK

type SearchOrganizationTicketsData = TicketSearchSchema

type SearchOrganizationTicketsWithFieldData = TicketSearchSchema // NEED TO CHECK

type CreateTicketDataItemData = [ // NEED TO CHECK
    TicketSchema
]

type DeleteTicketDataItemData = [ // NEED TO CHECK
    number
]

type CreateClonedTicketData = [
    TicketSchema
]

type SubmitTicketData = [ // NEED TO CHECK
    TicketSchema
]

type GetTicketData = [ // NEED TO CHECK
    TicketSchema
]

type SearchTicketsWithIDData = Array<TicketSchema>

type UpdateTicketData = Array<TicketSchema> // NEED TO CHECK

type GetTicketsData = Array<TicketSchema>

type SearchTicketsData = Array<TicketSchema> // NEED TO CHECK

type UpdateTicketWithStateData = Array<number> // NEED TO CHECK

type GetOrganizationTicketsData = Array<TicketSchema> // NEED TO CHECK

type SearchOrganizationTicketsWithCriteriaData = Array<TicketSchema> // NEED TO CHECK

type GetSubscriptionTicketsData = Array<TicketSchema> // NEED TO CHECK

type SearchSubscriptionTicketsData = Array<TicketSchema> // NEED TO CHECK

type GetTicketEventsData = Array<TicketEventSchema>

type GetTicketsInAreaData = Array<TicketSummarySchema>

export default class Tickets extends Resource {
    /**
     * @api {post} /v1/groups/{group_id}/tickets/search
     * @apiGroup Tickets
     * @apiName searchGroupTickets
     * @apiDescription Get all tickets from the specified group that satisfy the search criteria, now we support field bundle_autoassign with
                       operator = and values true or false. Capable of returning paginated results.
     * @apiParam {Number} group_id
     * @apiParam {Array<Object>} query_params
     * @apiParam {Object} bounding_box
     * @apiParam {String} timezone
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchGroupTickets({...})
     */
    searchGroupTickets(params: SearchGroupTicketsParams): APIPromise<SearchGroupTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            query_params: params.query_params,
            bounding_box: params.bounding_box,
            timezone: params.timezone
        };

        return this.client.post(`/v1/groups/${params.group_id}/tickets/search${queryString}`, data);
    }

    /**
     * @api {get} /v1/tickets/my_list
     * @apiGroup Tickets
     * @apiName getCurrentCustomerTickets
     * @apiDescription Get all tickets that belong to current user's id.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getCurrentCustomerTickets({...})
     */
    getCurrentCustomerTickets(params: GetCurrentCustomerTicketsParams): APIPromise<GetCurrentCustomerTicketsData> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/tickets/my_list${queryString}`);
    }

    /**
     * @api {get} /v1/customers/{customer_id}/tickets
     * @apiGroup Tickets
     * @apiName getCustomerTickets
     * @apiDescription Get all tickets that belong to the given customer.
     * @apiParam {Number} customer_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getCustomerTickets({...})
     */
    getCustomerTickets(params: GetCustomerTicketsParams): APIPromise<GetCustomerTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/customers/${params.customer_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets
     * @apiGroup Tickets
     * @apiName searchOrganizationTickets
     * @apiDescription Search all tickets of an organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchOrganizationTickets({...})
     */
    searchOrganizationTickets(params: SearchOrganizationTicketsParams): APIPromise<SearchOrganizationTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/tickets${queryString}`, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets/filters
     * @apiGroup Tickets
     * @apiName searchOrganizationTicketsWithField
     * @apiDescription Search all tickets of an organization in the specified search_field. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchOrganizationTicketsWithField({...})
     */
    searchOrganizationTicketsWithField(params: SearchOrganizationTicketsWithFieldParams): APIPromise<SearchOrganizationTicketsWithFieldData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/tickets/filters${queryString}`, data);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/data_items
     * @apiGroup Tickets
     * @apiName createTicketDataItem
     * @apiDescription Create a new data_item for the ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} data_item
     * @apiExample {js} Example:
     *             gigwalk.tickets.createTicketDataItem({...})
     */
    createTicketDataItem(params: CreateTicketDataItemParams): APIPromise<CreateTicketDataItemData> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/data_items`, { ...params.data_item });
    }

    /**
     * @api {delete} /v1/tickets/{ticket_id}/data_items/{data_item_id}
     * @apiGroup Tickets
     * @apiName deleteTicketDataItem
     * @apiDescription Delete the specified data_item from the specified ticket. This is a hard delete.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} data_item_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.deleteTicketDataItem({...})
     */
    deleteTicketDataItem(params: DeleteTicketDataItemParams): APIPromise<DeleteTicketDataItemData> {
        return this.client.delete(`/v1/tickets/${params.ticket_id}/data_items/${params.data_item_id}`);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/clone
     * @apiGroup Tickets
     * @apiName createClonedTicket
     * @apiDescription Create a new ticket by cloning the given ticket. This is a deep copy: metadata is copied as well. Ticket status will be UNASSIGNED.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.createClonedTicket({...})
     */
    createClonedTicket(params: CreateClonedTicketParams): APIPromise<CreateClonedTicketData> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/clone`);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/submit
     * @apiGroup Tickets
     * @apiName submitTicket
     * @apiDescription Submit the given ticket. This is a terminal state for the ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.submitTicket({...})
     */
    submitTicket(params: SubmitTicketParams): APIPromise<SubmitTicketData> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/submit`);
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}
     * @apiGroup Tickets
     * @apiName getTicket
     * @apiDescription Get ticket information. it returns information about the specified ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getTicket({...})
     */
    getTicket(params: GetTicketParams): APIPromise<GetTicketData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}${queryString}`);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}
     * @apiGroup Tickets
     * @apiName searchTicketsWithID
     * @apiDescription You should use only /v1/tickets/search, other endpoints directed to the search method. Capable of returning paginated results.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchTicketsWithID({...})
     */
    searchTicketsWithID(params: SearchTicketsWithIDParams): APIPromise<SearchTicketsWithIDData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/tickets/${params.ticket_id}${queryString}`, { ...params.search });
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}
     * @apiGroup Tickets
     * @apiName updateTicket
     * @apiDescription Edit ticket(s). If ticket_id is present, assign the corresponding ticket. Otherwise, perform action to multiple tickets.
     * @apiParam {Number} ticket_id
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.updateTicket({...})
     */
    updateTicket(params: UpdateTicketParams): APIPromise<UpdateTicketData> {
        const data = {
            action: params.action,
            force: true,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(`/v1/tickets/${params.ticket_id}`, data);
    }

    /**
     * @api {get} /v1/tickets
     * @apiGroup Tickets
     * @apiName getTickets
     * @apiDescription Gets all tickets of the current user's organization.
     * @apiExample {js} Example:
     *             gigwalk.tickets.getTickets({...})
     */
    getTickets(): APIPromise<GetTicketsData> {
        return this.client.get('/v1/tickets');
    }

    /**
     * @api {post} /v1/tickets
     * @apiGroup Tickets
     * @apiName searchTickets
     * @apiDescription You should use only /v1/tickets/search, other endpoints directed to the search method. Capable of returning paginated results.
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchTickets({...})
     */
    searchTickets(params: SearchTicketsParams): APIPromise<SearchTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/tickets${queryString}`, { ...params.search });
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}/execution_state/{execution_state}
     * @apiGroup Tickets
     * @apiName updateTicketWithState
     * @apiDescription Edit ticket(s). If ticket_id is present, assign the corresponding ticket. Otherwise, perform action to multiple tickets.
     * @apiParam {Number} ticket_id
     * @apiParam {String} execution_state
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.updateTicketWithState({...})
     */
    updateTicketWithState(params: UpdateTicketWithStateParams): APIPromise<UpdateTicketWithStateData> {
        const data = {
            action: params.action,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(`/v1/tickets/${params.ticket_id}/execution_state/${params.execution_state}`, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/tickets
     * @apiGroup Tickets
     * @apiName getOrganizationTickets
     * @apiDescription Get information about all tickets of the organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getOrganizationTickets({...})
     */
    getOrganizationTickets(params: GetOrganizationTicketsParams): APIPromise<GetOrganizationTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/tickets/search
     * @apiGroup Tickets
     * @apiName searchOrganizationTicketsWithCriteria
     * @apiDescription Search tickets filtered by organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchOrganizationTicketsWithCriteria({...})
     */
    searchOrganizationTicketsWithCriteria(params: SearchOrganizationTicketsWithCriteriaParams): APIPromise<SearchOrganizationTicketsWithCriteriaData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/organizations/${params.organization_id}/tickets/search${queryString}`, { ...params.search });
    }

    /**
     * @api {get} /v1/subscriptions/{subscription_id}/tickets
     * @apiGroup Tickets
     * @apiName getSubscriptionTickets
     * @apiDescription Get information of all tickets in organization_subscription (project). Capable of returning paginated results.
     * @apiParam {Number} subscription_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getSubscriptionTickets({...})
     */
    getSubscriptionTickets(params: GetSubscriptionTicketsParams): APIPromise<GetSubscriptionTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/subscriptions/${params.subscription_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v1/subscriptions/{subscription_id}/tickets/search
     * @apiGroup Tickets
     * @apiName searchSubscriptionTickets
     * @apiDescription Search tickets filtered by the organization_subscription (project). Capable of returning paginated results.
     * @apiParam {Number} subscription_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchSubscriptionTickets({...})
     */
    searchSubscriptionTickets(params: SearchSubscriptionTicketsParams): APIPromise<SearchSubscriptionTicketsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/subscriptions/${params.subscription_id}/tickets/search${queryString}`, { ...params.search });
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}/events
     * @apiGroup Tickets
     * @apiName getTicketEvents
     * @apiDescription Return events of ticket. Capable of returning paginated results.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getTicketEvents({...})
     */
    getTicketEvents(params: GetTicketEventsParams): APIPromise<GetTicketEventsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}/events${queryString}`);
    }

    /**
     * @api {get} /v1/ticket_map
     * @apiGroup Tickets
     * @apiName getTicketsInArea
     * @apiDescription Return all applicable tickets within a radius of the specified location for a map display. Only nassigned tickets that fit the
                       certification criteria and are not yet due are returned.
     * @apiParam {Number} map_lat
     * @apiParam {Number} map_lon
     * @apiParam {Number} radius
     * @apiExample {js} Example:
     *             gigwalk.tickets.getTicketsInArea({...})
     */
    getTicketsInArea(params: GetTicketsInAreaParams): APIPromise<GetTicketsInAreaData> {
        const data = {
            map_lat: params.map_lat,
            map_lon: params.map_lon,
            radius: params.radius,
        };

        return this.client.get('/v1/ticket_map', data);
    }
}
