// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    TicketEvent,
    CreateTicketEventParams,
    DeleteTicketEventParams
} from './types';

export default class TicketEvents extends Resource {
    /**
     * @api {post} /v1/tickets/:ticket_id/events create
     * @apiGroup TicketEvents
     * @apiName create
     * @apiDescription Create a new ticket event for ticket.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} ticket_event
     * @apiExample {js} Example:
     *             gigwalk.ticketEvents.create({...})
     */
    create(params: CreateTicketEventParams): APIPromise<[TicketEvent]> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/events`, { ...params.ticket_event });
    }

    /**
     * @api {delete} /v1/ticket_events/:ticket_event_id delete
     * @apiGroup TicketEvents
     * @apiName delete
     * @apiDescription Delete the specified ticket event.
     * @apiParam {Number} ticket_event_id
     * @apiExample {js} Example:
     *             gigwalk.ticketEvents.delete({...})
     */
    delete(params: DeleteTicketEventParams): APIPromise<[number]> {
        return this.client.delete(`/v1/ticket_events/${params.ticket_event_id}`);
    }
}
