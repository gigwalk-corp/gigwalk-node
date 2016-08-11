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
    latitude: number,
    uom: number,
    longitude: number,
    radius: number,
    status: string,
    date_type: string,
    start_date: string,
    end_date: string,
    timezone: string
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

type SearchGroupTicketsParams = {
    group_id: number,
    query_params: Array<QueryParamTemplate>,
    bounding_box: BoundingBoxTemplate,
    timezone: string
}

type GetCustomerTicketsParams = {
    customer_id: number
}

type SearchOrganizationTicketsParams = {
    organization_id: number,
    query_string: string
}

type SearchOrganizationTicketsWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string
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

type GetTicketParams = {
    ticket_id: number
}

type SearchTicketsWithIDParams = {
    ticket_id: number,
    query: TicketSearchTemplate
}

type UpdateTicketParams = {
    ticket_id: number,
    action: string,
    ticket_ids: Array<number>,
    customer_id: string
}

type SearchTicketsParams = {
    query: TicketSearchTemplate
}

type UpdateTicketWithStateParams = {
    ticket_id: number,
    execution_state: string,
    action: string,
    ticket_ids: Array<number>,
    customer_id: string
}

type GetOrganizationTicketsParams = {
    organization_id: number
}

type SearchOrganizationTicketsWithCriteriaParams = {
    organization_id: number,
    query: TicketSearchTemplate
}

type GetSubscriptionTicketsParams = {
    subscription_id: number
}

type SearchSubscriptionTicketsParams = {
    subscription_id: number,
    query: TicketSearchTemplate
}

type GetTicketEventsParams = {
    ticket_id: number
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

type CreateClonedTicketData = [ // NEED TO CHECK
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
     * @apiName searchGroupTickets
     * @apiDescription Get all tickets from the specified group that satisfy the search criteria, now we support field bundle_autoassign with
     operator = and values true or false
     * @apiParam {Number} group_id
     * @apiParam {Array<QueryParamTemplate>} query_params
     * @apiParam {BoundingBoxTemplate} bounding_box
     * @apiParam {String} timezone
     * @apiExample {js} Example:
     *             gigwalk.customers.searchGroupTickets({...})
     */
    searchGroupTickets(params: SearchGroupTicketsParams): APIPromise<SearchGroupTicketsData> {
        const url = `/v1/groups/${params.group_id}/tickets/search`;
        const data = {
            query_params: params.query_params,
            bounding_box: params.bounding_box,
            timezone: params.timezone
        };

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/tickets/my_list
     * @apiName getCurrentCustomerTickets
     * @apiDescription Get all tickets that belong to current_user's id
     * @apiExample {js} Example:
     *             gigwalk.customers.getCurrentCustomerTickets({...})
     */
    getCurrentCustomerTickets(): APIPromise<GetCurrentCustomerTicketsData> {
        return this.client.get('/v1/tickets/my_list');
    }

    /**
     * @api {get} /v1/customers/{customer_id}/tickets
     * @apiName getCustomerTickets
     * @apiDescription Get all tickets that belong to the given customer
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerTickets({...})
     */
    getCustomerTickets(params: GetCustomerTicketsParams): APIPromise<GetCustomerTicketsData> {
        const url = `/v1/customers/${params.customer_id}/tickets`;

        return this.client.get(url);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets
     * @apiName searchOrganizationTickets
     * @apiDescription Search all tickets of the organization for the given string This searches all strings in the ES document and finds a match if any
     of these string contain the given string
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTickets({...})
     */
    searchOrganizationTickets(params: SearchOrganizationTicketsParams): APIPromise<SearchOrganizationTicketsData> {
        const url = `/v2/organizations/${params.organization_id}/search/tickets`;
        const data = {
            query_string: params.query_string
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets/filters
     * @apiName searchOrganizationTicketsWithField
     * @apiDescription Search all tickets of the org for the given value This searches the specified search_field in the ES document and finds a match only
     if the search_field contains the given value
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTicketsWithField({...})
     */
    searchOrganizationTicketsWithField(params: SearchOrganizationTicketsWithFieldParams): APIPromise<SearchOrganizationTicketsWithFieldData> {
        const url = `/v2/organizations/${params.organization_id}/search/tickets/filters`;
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/data_items
     * @apiName createTicketDataItem
     * @apiDescription Create a new data_item for the ticket Create a new data_item using the values specified in the JSON payload
     * @apiParam {Number} ticket_id
     * @apiParam {DataItemTemplate} data_item
     * @apiExample {js} Example:
     *             gigwalk.customers.createTicketDataItem({...})
     */
    createTicketDataItem(params: CreateTicketDataItemParams): APIPromise<CreateTicketDataItemData> {
        const url = `/v1/tickets/${params.ticket_id}/data_items`;
        const data = params.data_item;

        return this.client.post(url, data);
    }

    /**
     * @api {delete} /v1/tickets/{ticket_id}/data_items/{data_item_id}
     * @apiName deleteTicketDataItem
     * @apiDescription Delete the specified data_item from the specified ticket This is a hard delete. Data items are stored in mongo.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} data_item_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteTicketDataItem({...})
     */
    deleteTicketDataItem(params: DeleteTicketDataItemParams): APIPromise<DeleteTicketDataItemData> {
        const url = `/v1/tickets/${params.ticket_id}/data_items/${params.data_item_id}`;

        return this.client.delete(url);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/clone
     * @apiName createClonedTicket
     * @apiDescription Clone the given ticket Create a new ticket by cloning the given ticket. Deep copy, the ticket metadata is copied as well.
     The ticket status will always be UNASSIGNED.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createClonedTicket({...})
     */
    createClonedTicket(params: CreateClonedTicketParams): APIPromise<CreateClonedTicketData> {
        const url = `/v1/tickets/${params.ticket_id}/clone`;

        return this.client.post(url);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/submit
     * @apiName submitTicket
     * @apiDescription Submit the given ticket This is a terminal state for the ticket
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.submitTicket({...})
     */
    submitTicket(params: SubmitTicketParams): APIPromise<SubmitTicketData> {
        const url = `/v1/tickets/${params.ticket_id}/submit`;

        return this.client.post(url);
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}
     * @apiName getTicket
     * @apiDescription Get ticket info. it returns info about the specified ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicket({...})
     */
    getTicket(params: GetTicketParams): APIPromise<GetTicketData> {
        const url = `/v1/tickets/${params.ticket_id}`;

        return this.client.get(url);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}
     * @apiName searchTicketsWithID
     * @apiDescription Search tickets. This seems deprecated and the semantics do not look right either. Why would a ticket_id be passed to a search?
     You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiParam {Number} ticket_id
     * @apiParam {TicketSearchTemplate} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTicketsWithID({...})
     */
    searchTicketsWithID(params: SearchTicketsWithIDParams): APIPromise<SearchTicketsWithIDData> {
        const url = `/v1/tickets/${params.ticket_id}`;
        const data = params.query;

        return this.client.post(url, data);
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}
     * @apiName updateTicket
     * @apiDescription Edit tickets If the ticket_id is present assign the corresponding ticket. Otherwise perform action to multiple tickets identified
     by the data arguments.
     * @apiParam {Number} ticket_id
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTicket({...})
     */
    updateTicket(params: UpdateTicketParams): APIPromise<UpdateTicketData> {
        const url = `/v1/tickets/${params.ticket_id}`;
        const data = {
            action: params.action,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/tickets
     * @apiName getTickets
     * @apiDescription Get ticket info. it lists all tickets of the current user's organization.
     * @apiExample {js} Example:
     *             gigwalk.customers.getTickets({...})
     */
    getTickets(): APIPromise<GetTicketsData> {
        return this.client.get('/v1/tickets');
    }

    /**
     * @api {post} /v1/tickets
     * @apiName searchTickets
     * @apiDescription Search tickets. You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiParam {TicketSearchTemplate} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTickets({...})
     */
    searchTickets(params: SearchTicketsParams): APIPromise<SearchTicketsData> {
        const data = params.query;

        return this.client.post('/v1/tickets', data);
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}/execution_state/{execution_state}
     * @apiName updateTicketWithState
     * @apiDescription Edit tickets If the ticket_id is present assign the corresponding ticket. Otherwise perform action to multiple tickets identified
     by the data arguments.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} execution_state
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTicketWithState({...})
     */
    updateTicketWithState(params: UpdateTicketWithStateParams): APIPromise<UpdateTicketWithStateData> {
        const url = `/v1/tickets/${params.ticket_id}/execution_state/${params.execution_state}`;
        const data = {
            action: params.action,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/tickets
     * @apiName getOrganizationTickets
     * @apiDescription Get info about all tickets of the organization This is a paginated query
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTickets({...})
     */
    getOrganizationTickets(params: GetOrganizationTicketsParams): APIPromise<GetOrganizationTicketsData> {
        const url = `/v1/organizations/${params.organization_id}/tickets`;

        return this.client.get(url);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/tickets/search
     * @apiName searchOrganizationTicketsWithCriteria
     * @apiDescription Search tickets filtered by the organization This returns tickets of the specified organization that match the search criteria
     specified in JSON
     * @apiParam {Number} organization_id
     * @apiParam {TicketSearchTemplate} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTicketsWithCriteria({...})
     */
    searchOrganizationTicketsWithCriteria(params: SearchOrganizationTicketsWithCriteriaParams): APIPromise<SearchOrganizationTicketsWithCriteriaData> {
        const url = `/v1/organizations/${params.organization_id}/tickets/search`;
        const data = params.query;

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/subscriptions/{subscription_id}/tickets
     * @apiName getSubscriptionTickets
     * @apiDescription Get info about all tickets of the organization_subscription (project) This is a paginated query
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getSubscriptionTickets({...})
     */
    getSubscriptionTickets(params: GetSubscriptionTicketsParams): APIPromise<GetSubscriptionTicketsData> {
        const url = `/v1/subscriptions/${params.subscription_id}/tickets`;

        return this.client.get(url);
    }

    /**
     * @api {post} /v1/subscriptions/{subscription_id}/tickets/search
     * @apiName searchSubscriptionTickets
     * @apiDescription Search tickets filtered by the organization_subscription (project) This returns tickets of the specified organization_subscription
     that match the search criteria specified in JSON
     * @apiParam {Number} subscription_id
     * @apiParam {TicketSearchTemplate} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionTickets({...})
     */
    searchSubscriptionTickets(params: SearchSubscriptionTicketsParams): APIPromise<SearchSubscriptionTicketsData> {
        const url = `/v1/subscriptions/${params.subscription_id}/tickets/search`;
        const data = params.query

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}/events
     * @apiName getTicketEvents
     * @apiDescription Return the events of the given ticket
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicketEvents({...})
     */
    getTicketEvents(params: GetTicketEventsParams): APIPromise<GetTicketEventsData> {
        const url = `/v1/tickets/${params.ticket_id}/events`;

        return this.client.get(url);
    }

    /**
     * @api {get} /v1/ticket_map
     * @apiName getTicketsInArea
     * @apiDescription Return all applicable tickets that are within the given radius of the specified location Geo-Search. Return the locations of all
     applicable tickets within 50 KM of the input location for a map display. Unassigned tickets that fit the certification criteria,
     and that are not due yet are returned
     * @apiParam {Number} map_lat
     * @apiParam {Number} map_lon
     * @apiParam {Number} radius
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicketsInArea({...})
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
