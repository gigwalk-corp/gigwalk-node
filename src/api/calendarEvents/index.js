// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    CalendarEvent,
    DeleteCalendarEventParams,
    GetCalendarEventParams,
    UpdateCalendarEventParams,
    CreateCalendarEventParams,
    GetCalendarEventsForCustomerParams
} from './types';

export default class CalendarEvents extends Resource {

    /**
     * @api {delete} /v1/calendar_events/:calendar_event_id delete
     * @apiGroup CalendarEvents
     * @apiName delete
     * @apiDescription Delete a calendarEvent.
     * @apiParam {Number} calendar_event_id
     * @apiExample {js} Example:
     *             gigwalk.calendarEvents.delete({...})
     */
    delete(params: DeleteCalendarEventParams): APIPromise<[number]> {
        return this.client.delete(`/v1/calendar_events/${params.calendar_event_id}`);
    }

    /**
     * @api {get} /v1/calendar_events/:calendar_event_id get
     * @apiGroup CalendarEvents
     * @apiName get
     * @apiDescription Get calendarEvent.
     * @apiParam {Number} calendar_event_id
     * @apiParam {String} time_zone
     * @apiExample {js} Example:
     *             gigwalk.calendarEvents.get({...})
     */
    get(params: GetCalendarEventParams): APIPromise<[CalendarEvent]> {
        const data = {
            time_zone: params.time_zone
        };

        return this.client.get(`/v1/calendar_events/${params.calendar_event_id}`, data);
    }

    /**
     * @api {put} /v1/calendar_events/:calendar_event_id update
     * @apiGroup CalendarEvents
     * @apiName update
     * @apiDescription Modify calendarEvent info.
     * @apiParam {Number} calendar_event_id
     * @apiParam {Object} calendar_event
     * @apiExample {js} Example:
     *             gigwalk.calendarEvents.update({...})
     */
    update(params: UpdateCalendarEventParams): APIPromise<[CalendarEvent]> {
        return this.client.put(`/v1/calendar_events/${params.calendar_event_id}`, { ...params.calendar_event });
    }

    /**
     * @api {post} /v1/calendar_events create
     * @apiGroup CalendarEvents
     * @apiName create
     * @apiDescription Create a calendarEvent.
     * @apiParam {Object} calendar_event
     * @apiExample {js} Example:
     *             gigwalk.calendarEvents.create({...})
     */
    create(params: CreateCalendarEventParams): APIPromise<[CalendarEvent]> {
        return this.client.post('/v1/calendar_events', { ...params.calendar_event });
    }

    /**
     * @api {get} /v1/customers/:customer_id/calendar_events getForCustomer
     * @apiGroup CalendarEvents
     * @apiName getForCustomer
     * @apiDescription Get all calendarEvents belonging to the customer.
     * @apiParam {Number} customer_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.calendarEvents.getForCustomer({...})
     */
    getForCustomer(params: GetCalendarEventsForCustomerParams): APIPromise<Array<CalendarEvent>> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/customers/${params.customer_id}/calendar_events${query}`);
    }
}
