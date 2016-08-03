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

type SearchGroupTicketsParams = {
    group_id: number,
    query_params: Array<{
        field: string,
        operator: string,
        value: string
    }>,
    bounding_box: {
        top_left: {
            lat: number,
            lon: number
        },
        bottom_right: {
            lat: number,
            lon: number
        }
    },
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
    data_type_id: number
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

type SearchGroupTicketsData = [

]

type GetCurrentCustomerTicketsData = [

]

type GetCustomerTicketsData = [

]

type SearchOrganizationTicketsData = [

]

type SearchOrganizationTicketsWithFieldData = [

]

type CreateTicketDataItemData = [

]

type DeleteTicketDataItemData = [

]

type CreateClonedTicketData = [

]

type SubmitTicketData = [

]

type GetTicketData = [

]

type SearchTicketsWithIDData = [

]

type UpdateTicketData = [

]

type GetTicketsData = [

]

type SearchTicketsData = [

]

type UpdateTicketWithStateData = [

]

type GetOrganizationTicketsData = [

]

type SearchOrganizationTicketsWithCriteriaData = [

]

type GetSubscriptionTicketsData = [

]

type SearchSubscriptionTicketsData = [

]

type GetTicketEventsData = [

]

type GetTicketsInAreaData = [

]

export default class Tickets extends Resource {
    /**
     * @api {post} /v1/groups/{group_id}/tickets/search
     * @apiName searchGroupTickets
     * @apiDescription Get all tickets from the specified group that satisfy the search criteria, now we support field bundle_autoassign with
                       operator = and values true or false
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchGroupTickets({...})
     */
    searchGroupTickets(params: SearchGroupTicketsParams): APIPromise<SearchGroupTicketsData> {
        const url = `/v1`;
        const data = {

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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
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
    searchOrganizationTickets(params: SearchOrganizationTicketsParams): APIPromise<SearchOrganizationTicketsData> {
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v2/organizations/{organization_id}/search/tickets/filters
     * @apiName searchOrganizationTicketsWithField
     * @apiDescription Search all tickets of the org for the given value This searches the specified search_field in the ES document and finds a match only
                       if the search_field contains the given value
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTicketsWithField({...})
     */
    searchOrganizationTicketsWithField(params: SearchOrganizationTicketsWithFieldParams): APIPromise<SearchOrganizationTicketsWithFieldData> {
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}/data_items
     * @apiName createTicketDataItem
     * @apiDescription Create a new data_item for the ticket Create a new data_item using the values specified in the JSON payload
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createTicketDataItem({...})
     */
    createTicketDataItem(params: CreateTicketDataItemParams): APIPromise<CreateTicketDataItemData> {
        const url = `/v1`;
        const data = {

        };

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
        const url = `/v1`;
        const data = {

        };

        return this.client.delete(url, data);
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
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
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
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
    }

    /**
     * @api {post} /v1/tickets/{ticket_id}
     * @apiName searchTicketsWithID
     * @apiDescription Search tickets. This seems deprecated and the semantics do not look right either. Why would a ticket_id be passed to a search?
                       You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTicketsWithID({...})
     */
    searchTicketsWithID(params: SearchTicketsWithIDParams): APIPromise<SearchTicketsWithIDData> {
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
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
    updateTicket(params: UpdateTicketParams): APIPromise<UpdateTicketData> {
        const url = `/v1`;
        const data = {

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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
    }

    /**
     * @api {post} /v1/tickets
     * @apiName searchTickets
     * @apiDescription Search tickets. You should use only API /v1/tickets/search. The other endpoints are also directed to the search method.
     * @apiExample {js} Example:
     *             gigwalk.customers.searchTickets({...})
     */
    searchTickets(params: SearchTicketsParams): APIPromise<SearchTicketsData> {
        const url = `/v1`;
        const data = {

        };

        return this.client.post(url, data);
    }

    /**
     * @api {put} /v1/tickets/{ticket_id}/execution_state/{execution_state}
     * @apiName updateTicketWithState
     * @apiDescription Edit tickets If the ticket_id is present assign the corresponding ticket. Otherwise perform action to multiple tickets identified
                       by the data arguments.
     * @apiParam {Number} ticket_id
     * @apiParam {Number} execution_state
     * @apiExample {js} Example:
     *             gigwalk.customers.updateTicketWithState({...})
     */
    updateTicketWithState(params: UpdateTicketWithStateParams): APIPromise<UpdateTicketWithStateData> {
        const url = `/v1`;
        const data = {

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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/tickets/search
     * @apiName searchOrganizationTicketsWithCriteria
     * @apiDescription Search tickets filtered by the organization This returns tickets of the specified organization that match the search criteria
                       specified in JSON
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganizationTicketsWithCriteria({...})
     */
    searchOrganizationTicketsWithCriteria(params: SearchOrganizationTicketsWithCriteriaParams): APIPromise<SearchOrganizationTicketsWithCriteriaData> {
        const url = `/v1`;
        const data = {

        };

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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
    }

    /**
     * @api {post} /v1/subscriptions/{subscription_id}/tickets/search
     * @apiName searchSubscriptionTickets
     * @apiDescription Search tickets filtered by the organization_subscription (project) This returns tickets of the specified organization_subscription
                       that match the search criteria specified in JSON
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.searchSubscriptionTickets({...})
     */
    searchSubscriptionTickets(params: SearchSubscriptionTicketsParams): APIPromise<SearchSubscriptionTicketsData> {
        const url = `/v1`;
        const data = {

        };

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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
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
        const url = `/v1`;
        const data = {

        };

        return this.client.get(url, data);
    }
}
