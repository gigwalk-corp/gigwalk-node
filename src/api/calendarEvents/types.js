// @flow

export type CalendarEvent = {
    name: string,
    id: number,
    parent_id: number,
    parent: Object,
    organization_id: number,
    member_count: number,
    owners: Array<Object>,
    sub_groups: Array<Object>,
    organization_data: Array<Object>;
}

export type CalendarEventField = {
    summary?: string,
    description?: string,
    start?: string,
    end?: string,
    time_zone?: string,
    event_type?: 'TICKET_SCHEDULE' | 'BLOCK'
}

export type DeleteCalendarEventParams = {
    calendar_event_id: number
}

export type GetCalendarEventParams = {
    calendar_event_id: number,
    time_zone?: string
}

export type UpdateCalendarEventParams = {
    calendar_event_id: number,
    calendar_event: CalendarEventField
}

export type CreateCalendarEventParams = {
    calendar_event: CalendarEventField
}

type GetCalendarEventsForCustomerQuery = {
    time_min: string,
    time_max: string,
    time_zone: string,
    event_type?: 'TICKET_SCHEDULE' | 'BLOCK',
    offset?: number,
    limit?: number
}

export type GetCalendarEventsForCustomerParams = {
    customer_id: number,
    query?: GetCalendarEventsForCustomerQuery
}
