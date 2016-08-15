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

export default class CalendarEvent extends Resource {

    /**
     * @api {delete} /v1/calendar_events/:calendar_event_id delete
     * @apiGroup CalendarEvent
     * @apiName delete
     * @apiDescription Delete a calendarEvent.
     * @apiParam {Number} calendar_event_id
     * @apiExample {js} Example:
     *             gigwalk.calendarEvent.delete({...})
     */
    delete(params: DeleteCalendarEventParams): APIPromise<[number]> {
        return this.client.delete(`/v1/calendar_events/${params.calendar_event_id}`);
    }

    /**
     * @api {get} /v1/calendar_events/:calendar_event_id get
     * @apiGroup CalendarEvent
     * @apiName get
     * @apiDescription Get calendarEvent.
     * @apiParam {Number} calendar_event_id
     * @apiParam {String} time_zone
     * @apiExample {js} Example:
     *             gigwalk.calendarEvent.get({...})
     */
    get(params: GetCalendarEventParams): APIPromise<[CalendarEvent]> {
        const data = {
            time_zone: params.time_zone
        };

        return this.client.get(`/v1/calendar_events/${params.calendar_event_id}`, data);
    }

    /**
     * @api {put} /v1/calendar_events/:calendar_event_id update
     * @apiGroup CalendarEvent
     * @apiName update
     * @apiDescription Modify calendarEvent info.
     * @apiParam {Number} calendar_event_id
     * @apiParam {Object} calendar_event
     * @apiExample {js} Example:
     *             gigwalk.calendarEvent.update({...})
     */
    update(params: UpdateCalendarEventParams): APIPromise<[CalendarEvent]> {
        return this.client.put(`/v1/calendar_events/${params.calendar_event_id}`, { ...params.calendar_event });
    }

    /**
     * @api {post} /v1/calendar_events create
     * @apiGroup CalendarEvent
     * @apiName create
     * @apiDescription Create a calendarEvent.
     * @apiParam {Object} calendar_event
     * @apiExample {js} Example:
     *             gigwalk.calendarEvent.create({...})
     */
    create(params: CreateCalendarEventParams): APIPromise<[CalendarEvent]> {
        return this.client.post('/v1/calendar_events', { ...params.calendar_event });
    }

    /**
     * @api {get} /v1/customers/:customer_id/calendar_events getForCustomer
     * @apiGroup CalendarEvent
     * @apiName getForCustomer
     * @apiDescription Get all calendarEvents belonging to the customer.
     * @apiParam {Number} customer_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.calendarEvent.getForCustomer({...})
     */
    getForCustomer(params: GetCalendarEventsForCustomerParams): APIPromise<Array<CalendarEvent>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/customers/${params.customer_id}/calendar_events${queryString}`);
    }
}
