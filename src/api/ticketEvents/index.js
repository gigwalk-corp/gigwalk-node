// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

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

type CreateTicketEventData = [
    TicketEventSchema
]

type DeleteTicketEventData = [
    number
]

export default class TicketEvents extends Resource {
    /**
     * @api {post} /v1/tickets/{ticket_id}/events
     * @apiGroup TicketEvents
     * @apiName createTicketEvent
     * @apiDescription Create a new ticket event for ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} ticket_event
     * @apiExample {js} Example:
     *             gigwalk.ticketEvents.createTicketEvent({...})
     */
    createTicketEvent(params: CreateTicketEventParams): APIPromise<CreateTicketEventData> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/events`, { ...params.ticket_event });
    }

    /**
     * @api {delete} /v1/ticket_events/{ticket_event_id}
     * @apiGroup TicketEvents
     * @apiName deleteTicketEvent
     * @apiDescription Delete the specified ticket event.
     * @apiParam {Number} ticket_event_id
     * @apiExample {js} Example:
     *             gigwalk.ticketEvents.deleteTicketEvent({...})
     */
    deleteTicketEvent(params: DeleteTicketEventParams): APIPromise<DeleteTicketEventData> {
        return this.client.delete(`/v1/ticket_events/${params.ticket_event_id}`);
    }
}
