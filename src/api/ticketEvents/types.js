// @flow

export type TicketEvent = {
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

type TicketEventFields = {
    ticket_event_type: string,
    ticket_event_date: string,
    ticket_event_data: Object
}

export type CreateTicketEventParams = {
    ticket_id: number,
    ticket_event: TicketEventFields
}

export type DeleteTicketEventParams = {
    ticket_event_id: number
}
