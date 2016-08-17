// @flow

type GetApplicationsForCurrentCustomerQuery = {
    appl_filter?: string
}

export type GetApplicationsForCurrentCustomerParams = {
    query?: GetApplicationsForCurrentCustomerQuery
}

type GetApplicationsForCustomerQuery = {
    appl_filter?: string
}

export type GetApplicationsForCustomerParams = {
    customer_id: number,
    query?: GetApplicationsForCustomerQuery
}

export type GetApplicationsParams = {
    customer_id: number,
    ticket_id: number
}

export type RemoveApplicationParams = {
    ticket_id: number
}

export type GetAllApplicationsParams = {
    ticket_id: number
}

export type CreateApplicationParams = {
    ticket_id: number
}

export type BulkRemoveApplicationParams = {
    ticket_id: number,
    customer_ids: Array<number>
}
