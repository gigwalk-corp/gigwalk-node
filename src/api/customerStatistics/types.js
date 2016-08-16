// @flow

type GetStatisticsByIDQuery = {
    ticket_ids?: Array<number>
}

export type GetStatisticsByIDParams = {
    customer_id: number,
    query?: GetStatisticsByIDQuery
}

type GetStatisticsByEmailQuery = {
    ticket_ids?: Array<number>
}

export type GetStatisticsByEmailParams = {
    email: string,
    query?: GetStatisticsByEmailQuery
}

type GetStatisticsQuery = {
    ticket_ids?: Array<number>,
    customer_ids?: Array<number>
}

export type GetStatisticsParams = {
    query?: GetStatisticsQuery
}

type GetStatisticsByTicketQuery = {
    limit?: number,
    offset?: number
}

export type GetStatisticsByTicketParams = {
    ticket_id: number,
    query?: GetStatisticsByTicketQuery
}
