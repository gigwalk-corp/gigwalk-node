// @flow

export type CalendarEvent = {
    id: number,
    customer_id: number,
    ticket?: {
        id: number,
        start_date: string,
        due_date: string
    },
    summary: ?string,
    description: ?string,
    start: string,
    end: string,
    recurrence: ?string,
    event_type: string,
    generated: boolean
}

type CalendarEventField = {
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
