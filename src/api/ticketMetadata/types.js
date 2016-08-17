// @flow

type GetMetadataQuery = {
    limit?: number,
    offset?: number
}

export type GetMetadataParams = {
    ticket_id: number,
    query: GetMetadataQuery
}

export type CreateMetadataParams = {
    ticket_id: number,
    metadata: Object
}

type UpdateMetadataQuery = {
    limit?: number,
    offset?: number
}

export type UpdateMetadataParams = {
    ticket_id: number,
    metadata: Object,
    query?: UpdateMetadataQuery
}

type UpdateMetadataForOrganizationQuery = {
    limit?: number,
    offset?: number
}

export type UpdateMetadataForOrganizationParams = {
    organization_id: number,
    ticket_id: number,
    metadata: Object,
    query?: UpdateMetadataForOrganizationQuery
}
