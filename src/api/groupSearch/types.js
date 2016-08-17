// @flow

type SearchGroupWithTypeQuery = {
    q?: string,
    from?: number,
    size?: number
}

export type SearchGroupWithTypeParams = {
    group_id: number,
    index_type: 'tickets' | 'members',
    query?: SearchGroupWithTypeQuery
}

type SearchGroupQuery = {
    q?: string,
    from?: number,
    size?: number,
    sort_field?: string,
    sort_order?: string
}

export type SearchGroupParams = {
    group_id: number,
    query?: SearchGroupQuery
}

type SearchGroupTicketsQuery = {
    sort_field: string,
    query_string: string,
    filter_key: 'assigned_customer_name' | 'title' | 'location_formatted_address' | 'location_title' | 'assigned_customer_email' | 'ticket_status',
    filter_value: string,
    from?: number,
    size?: number,
    sort_field?: string,
    sort_order?: string
}

export type SearchGroupTicketsParams = {
    group_id: number,
    query: SearchGroupTicketsQuery
}
