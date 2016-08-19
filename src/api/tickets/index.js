// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    ESTicket,
    TicketEvent,
    Ticket,
    ESTicketSearch,
    SearchGroupTicketsParams,
    GetCurrentCustomerTicketsParams,
    GetCustomerTicketsParams,
    SearchOrganizationTicketsParams,
    SearchOrganizationTicketsWithFieldParams,
    CreateTicketDataItemParams,
    DeleteTicketDataItemParams,
    CreateClonedTicketParams,
    SubmitTicketParams,
    GetTicketParams,
    SearchTicketsWithIDParams,
    UpdateTicketParams,
    SearchTicketsParams,
    UpdateTicketWithStateParams,
    GetOrganizationTicketsParams,
    SearchOrganizationTicketsWithCriteriaParams,
    GetSubscriptionTicketsParams,
    SearchSubscriptionTicketsParams,
    GetTicketEventsParams,
    GetTicketsInAreaParams
} from './types';

export default class Tickets extends Resource {
    /**
     * @api {post} /v1/groups/:group_id/tickets/search searchForGroup
     * @apiGroup Tickets
     * @apiName searchForGroup
     * @apiDescription Get all tickets from the specified group that satisfy the search criteria, now we support field bundle_autoassign with
                       operator = and values true or false. Capable of returning paginated results.
     * @apiParam {Number} group_id
     * @apiParam {Array<Object>} query_params
     * @apiParam {Object} bounding_box
     * @apiParam {String} timezone
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchForGroup({...})
     */
    searchForGroup(params: SearchGroupTicketsParams): APIPromise<Array<ESTicket>> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            query_params: params.query_params,
            bounding_box: params.bounding_box,
            timezone: params.timezone
        };

        return this.client.post(`/v1/groups/${params.group_id}/tickets/search${queryString}`, data);
    }

    /**
     * @api {get} /v1/tickets/my_list getAllForCurrentCustomer
     * @apiGroup Tickets
     * @apiName getAllForCurrentCustomer
     * @apiDescription Get all tickets that belong to current user's id.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAllForCurrentCustomer({...})
     */
    getAllForCurrentCustomer(params: GetCurrentCustomerTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/tickets/my_list${queryString}`);
    }

    /**
     * @api {get} /v1/customers/:customer_id/tickets getAllForCustomer
     * @apiGroup Tickets
     * @apiName getAllForCustomer
     * @apiDescription Get all tickets that belong to the given customer.
     * @apiParam {Number} customer_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAllForCustomer({...})
     */
    getAllForCustomer(params: GetCustomerTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/customers/${params.customer_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v2/organizations/:organization_id/search/tickets searchForOrganization
     * @apiGroup Tickets
     * @apiName searchForOrganization
     * @apiDescription Search all tickets of an organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchForOrganization({...})
     */
    searchForOrganization(params: SearchOrganizationTicketsParams): APIPromise<ESTicketSearch> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/tickets${queryString}`, data);
    }

    /**
     * @api {post} /v2/organizations/:organization_id/search/tickets/filters searchWithFieldForOrganization
     * @apiGroup Tickets
     * @apiName searchWithFieldForOrganization
     * @apiDescription Search all tickets of an organization in the specified search_field. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchWithFieldForOrganization({...})
     */
    searchWithFieldForOrganization(params: SearchOrganizationTicketsWithFieldParams): APIPromise<ESTicketSearch> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/tickets/filters${queryString}`, data);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id/data_items createDataItem
     * @apiGroup Tickets
     * @apiName createDataItem
     * @apiDescription Create a new data_item for the ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} data_item
     * @apiExample {js} Example:
     *             gigwalk.tickets.createDataItem({...})
     */
    createDataItem(params: CreateTicketDataItemParams): APIPromise<[Ticket]> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/data_items`, { ...params.data_item });
    }

    /**
     * @api {delete} /v1/tickets/:ticket_id/data_items/:data_item_id deleteDataItem
     * @apiGroup Tickets
     * @apiName deleteDataItem
     * @apiDescription Delete the specified data_item from the specified ticket. This is a hard delete.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} data_item_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.deleteDataItem({...})
     */
    deleteDataItem(params: DeleteTicketDataItemParams): APIPromise<[Ticket]> {
        return this.client.delete(`/v1/tickets/${params.ticket_id}/data_items/${params.data_item_id}`);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id/clone clone
     * @apiGroup Tickets
     * @apiName clone
     * @apiDescription Create a new ticket by cloning the given ticket. This is a deep copy: metadata is copied as well. Ticket status will be UNASSIGNED.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.clone({...})
     */
    clone(params: CreateClonedTicketParams): APIPromise<[Ticket]> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/clone`);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id/submit submit
     * @apiGroup Tickets
     * @apiName submit
     * @apiDescription Submit the given ticket. This is a terminal state for the ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.submit({...})
     */
    submit(params: SubmitTicketParams): APIPromise<[Ticket]> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/submit`);
    }

    /**
     * @api {get} /v1/tickets/:ticket_id get
     * @apiGroup Tickets
     * @apiName get
     * @apiDescription Get ticket information. it returns information about the specified ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.get({...})
     */
    get(params: GetTicketParams): APIPromise<[Ticket]> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}${queryString}`);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id searchWithID
     * @apiGroup Tickets
     * @apiName searchWithID
     * @apiDescription You should use only /v1/tickets/search, other endpoints directed to the search method. Capable of returning paginated results.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchWithID({...})
     */
    searchWithID(params: SearchTicketsWithIDParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/tickets/${params.ticket_id}${queryString}`, { ...params.search });
    }

    /**
     * @api {put} /v1/tickets/:ticket_id update
     * @apiGroup Tickets
     * @apiName update
     * @apiDescription Edit ticket(s). If ticket_id is present, assign the corresponding ticket. Otherwise, perform action to multiple tickets.
     * @apiParam {Number} ticket_id
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.update({...})
     */
    update(params: UpdateTicketParams): APIPromise<Array<Ticket>> {
        const data = {
            action: params.action,
            force: true,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(`/v1/tickets/${params.ticket_id}`, data);
    }

    /**
     * @api {get} /v1/tickets getAll
     * @apiGroup Tickets
     * @apiName getAll
     * @apiDescription Gets all tickets of the current user's organization.
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAll({...})
     */
    getAll(): APIPromise<Array<Ticket>> {
        return this.client.get('/v1/tickets');
    }

    /**
     * @api {post} /v1/tickets search
     * @apiGroup Tickets
     * @apiName search
     * @apiDescription You should use only /v1/tickets/search, other endpoints directed to the search method. Capable of returning paginated results.
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.search({...})
     */
    search(params: SearchTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/tickets${queryString}`, { ...params.search });
    }

    /**
     * @api {put} /v1/tickets/:ticket_id/execution_state/:execution_state updateWithState
     * @apiGroup Tickets
     * @apiName updateWithState
     * @apiDescription Edit ticket(s). If ticket_id is present, assign the corresponding ticket. Otherwise, perform action to multiple tickets.
     * @apiParam {Number} ticket_id
     * @apiParam {String} execution_state
     * @apiParam {String} action
     * @apiParam {Array<number>} ticket_ids
     * @apiParam {String} customer_id
     * @apiExample {js} Example:
     *             gigwalk.tickets.updateWithState({...})
     */
    updateWithState(params: UpdateTicketWithStateParams): APIPromise<Array<number>> {
        const data = {
            action: params.action,
            ticket_ids: params.ticket_ids,
            customer_id: params.customer_id
        };

        return this.client.put(`/v1/tickets/${params.ticket_id}/execution_state/${params.execution_state}`, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/tickets getAllForOrganization
     * @apiGroup Tickets
     * @apiName getAllForOrganization
     * @apiDescription Get information about all tickets of the organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetOrganizationTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/tickets/search searchWithCriteriaForOrganization
     * @apiGroup Tickets
     * @apiName searchWithCriteriaForOrganization
     * @apiDescription Search tickets filtered by organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchWithCriteriaForOrganization({...})
     */
    searchWithCriteriaForOrganization(params: SearchOrganizationTicketsWithCriteriaParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/organizations/${params.organization_id}/tickets/search${queryString}`, { ...params.search });
    }

    /**
     * @api {get} /v1/subscriptions/:subscription_id/tickets getAllForSubscription
     * @apiGroup Tickets
     * @apiName getAllForSubscription
     * @apiDescription Get information of all tickets in organization_subscription (project). Capable of returning paginated results.
     * @apiParam {Number} subscription_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAllForSubscription({...})
     */
    getAllForSubscription(params: GetSubscriptionTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/subscriptions/${params.subscription_id}/tickets${queryString}`);
    }

    /**
     * @api {post} /v1/subscriptions/:subscription_id/tickets/search searchForSubscription
     * @apiGroup Tickets
     * @apiName searchForSubscription
     * @apiDescription Search tickets filtered by the organization_subscription (project). Capable of returning paginated results.
     * @apiParam {Number} subscription_id
     * @apiParam {Object} search
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.searchForSubscription({...})
     */
    searchForSubscription(params: SearchSubscriptionTicketsParams): APIPromise<Array<Ticket>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/subscriptions/${params.subscription_id}/tickets/search${queryString}`, { ...params.search });
    }

    /**
     * @api {get} /v1/tickets/:ticket_id/events getEvents
     * @apiGroup Tickets
     * @apiName getEvents
     * @apiDescription Return events of ticket. Capable of returning paginated results.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.tickets.getEvents({...})
     */
    getEvents(params: GetTicketEventsParams): APIPromise<Array<TicketEvent>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}/events${queryString}`);
    }

    /**
     * @api {get} /v1/ticket_map getAllInArea
     * @apiGroup Tickets
     * @apiName getAllInArea
     * @apiDescription Return all applicable tickets within a radius of the specified location for a map display. Only nassigned tickets that fit the
                       certification criteria and are not yet due are returned.
     * @apiParam {Number} map_lat
     * @apiParam {Number} map_lon
     * @apiParam {Number} radius
     * @apiExample {js} Example:
     *             gigwalk.tickets.getAllInArea({...})
     */
    getAllInArea(params: GetTicketsInAreaParams): APIPromise<Array<ESTicket>> {
        const data = {
            map_lat: params.map_lat,
            map_lon: params.map_lon,
            radius: params.radius,
        };

        return this.client.get('/v1/ticket_map', data);
    }
}
