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

export default class Tickets extends ResourceBase {
    /**
     * @api {post} /v1/groups/{group_id}/tickets/search
     * @apiName searchGroupTickets
     * @apiDescription Get all tickets from the specified group that satisfy the search criteria, now we support field bundle_autoassign with
                       operator "=" and values "true" or "false"
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchGroupTickets({...})
     */
    searchGroupTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/tickets/my_list
     * @apiName getTickets
     * @apiDescription Get all tickets that belong to current_user's id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTickets({...})
     */
    getTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/customers/{customer_id}/tickets
     * @apiName getCustomerTickets
     * @apiDescription Get all tickets that belong to the given customer
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerTickets({...})
     */
    getCustomerTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets
     * @apiName searchOrganizationTickets
     * @apiDescription Search all tickets of the organization for the given string This searches all strings in the ES document and finds a match if any
                       of these string contain the given string
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTickets({...})
     */
    searchOrganizationTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets/filters
     * @apiName searchOrganizationTickets
     * @apiDescription Search all tickets of the org for the given value This searches the specified search_field in the ES document and finds a match only
                       if the search_field contains the given value
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTickets({...})
     */
    searchOrganizationTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/data_items
     * @apiName createTicketDataItem
     * @apiDescription Create a new data_item for the ticket Create a new data_item using the values specified in the JSON payload
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createTicketDataItem({...})
     */
    createTicketDataItem(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
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
    deleteTicketDataItem(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
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
    createClonedTicket(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/submit
     * @apiName submitTicket
     * @apiDescription Submit the given ticket This is a terminal state for the ticket
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.submitTicket({...})
     */
    submitTicket(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}
     * @apiName getTicket
     * @apiDescription Get ticket info. it returns info about the specified ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicket({...})
     */
    getTicket(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}
     * @apiName searchTickets
     * @apiDescription Search tickets. This seems deprecated and the semantics do not look right either. Why would a ticket_id be passed to a search?
                       You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTickets({...})
     */
    searchTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}
     * @apiName updateTicket
     * @apiDescription Edit tickets If the ticket_id is present assign the corresponding ticket. Otherwise perform action to multiple tickets identified
                       by the data arguments.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTicket({...})
     */
    updateTicket(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/tickets
     * @apiName getTickets
     * @apiDescription Get ticket info. it lists all tickets of the current user's organization.
     * @apiExample {js} Example:
     *             gigwalk.customers.getTickets({...})
     */
    getTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/tickets
     * @apiName searchTickets
     * @apiDescription Search tickets. You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTickets({...})
     */
    searchTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}/execution_state/{execution_state}
     * @apiName updateTicket
     * @apiDescription Edit tickets If the ticket_id is present assign the corresponding ticket. Otherwise perform action to multiple tickets identified
                       by the data arguments.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} execution_state
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTicket({...})
     */
    updateTicket(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/tickets
     * @apiName getOrganizationTickets
     * @apiDescription Get info about all tickets of the organization This is a paginated query
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationTickets({...})
     */
    getOrganizationTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/tickets/search
     * @apiName searchOrganizationTickets
     * @apiDescription Search tickets filtered by the organization This returns tickets of the specified organization that match the search criteria
                       specified in JSON
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTickets({...})
     */
    searchOrganizationTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/subscriptions/{subscription_id}/tickets
     * @apiName getOrganizationSubscriptionTickets
     * @apiDescription Get info about all tickets of the organization_subscription (project) This is a paginated query
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationSubscriptionTickets({...})
     */
    getOrganizationSubscriptionTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/subscriptions/{subscription_id}/tickets/search
     * @apiName searchOrganizationSubscriptionTickets
     * @apiDescription Search tickets filtered by the organization_subscription (project) This returns tickets of the specified organization_subscription
                       that match the search criteria specified in JSON
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationSubscriptionTickets({...})
     */
    searchOrganizationSubscriptionTickets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/tickets/{ticket_id}/events
     * @apiName getTicketEvents
     * @apiDescription Return the events of the given ticket
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicketEvents({...})
     */
    getTicketEvents(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/ticket_map
     * @apiName getTicketsInLocation
     * @apiDescription Return all applicable tickets that are within the given radius of the specified location Geo-Search. Return the locations of all
                       applicable tickets within 50 KM of the input location for a map display. Unassigned tickets that fit the certification criteria,
                       and that are not due yet are returned
     * @apiParam {Number} map_lat
     * @apiParam {Number} map_lon
     * @apiParam {Number} radius
     * @apiExample {js} Example:
     *             gigwalk.customers.getTicketsInLocation({...})
     */
    getTicketsInLocation(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }
}
