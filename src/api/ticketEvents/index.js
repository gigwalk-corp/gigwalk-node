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

type TicketEventTemplate = {
    ticket_event_type: string,
    ticket_event_date: string,
    ticket_event_data: {}
}

type CreateTicketEventParams = {
    ticket_id: number,
    ticket_event: TicketEventTemplate
}

type DeleteTicketEventParams = {
    ticket_event_id: number
}

type TicketEventSchema = {
    id: string,
    ticket_event_type: string,
    ticket_id: number,
    ticket_event_date: string,
    ticket_event_data: Object,
    created_customer: {
        email: string,
        id: number,
        first_name: string,
        last_name: string,
        photo_url: string
    }
}

type CreateTicketEventData = [
    TicketEventSchema
]

type DeleteTicketEventData = [
    number
]

export default class TicketEvents extends ResourceBase {
    /**
     * @api {post} /v1/tickets/{ticket_id}/events
     * @apiName createTicketEvent
     * @apiDescription Create a new ticket event for the specified ticket JSON payload can have (ticket_event_type, ticket_event_date, ticket_event_data)
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createTicketEvent({...})
     */
    createTicketEvent(params: CreateTicketEventParams): APIPromise<CreateTicketEventData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/ticket_events/{ticket_event_id}
     * @apiName deleteTicketEvent
     * @apiDescription Delete the specified ticket event
     * @apiParam {Number} ticket_event_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteTicketEvent({...})
     */
    deleteTicketEvent(params: DeleteTicketEventParams): APIPromise<DeleteTicketEventData> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }
}
