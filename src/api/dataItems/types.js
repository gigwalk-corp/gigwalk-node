// @flow

type QueryField = {
    search_type: 'status' | 'date_range' | 'geo',
    offset?: number,
    limit?: number,
    start_date?: string,
    end_date?: string,
    timezone?: string,
    assigned?: boolean
}

export type getDataItemsParams = {
    aggregate: string
}

export type searchDataItemsParams = {
    query: QueryField
}

export type searchDataItemsForOrganizationParams = {
    organization_id: number,
    query: QueryField
}

export type searchDataItemsForSubscriptionParams = {
    subscription_id: number,
    query: QueryField
}
