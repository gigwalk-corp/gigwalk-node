// @flow

export type MetadataField = {
    id: number,
    name: string
}

type GetMetadataQuery = {
    limit?: number,
    offset?: number
}

export type GetMetadataParams = {
    organization_id: number,
    query?: GetMetadataQuery
}

export type CreateMetadataParams = {
    organization_id: number,
    name: string
}

type UpdateMetadataQuery = {
    limit?: number,
    offset?: number,
    key?: number
}

export type UpdateMetadataParams = {
    organization_id: number,
    organization_metadata_field_id: number,
    name: string,
    query?: UpdateMetadataQuery
}

type GetMetadataFieldQuery = {
    limit?: number,
    offset?: number
}

export type GetMetadataFieldParams = {
    organization_id: number,
    organization_metadata_field_id: number,
    query?: GetMetadataFieldQuery
}

export type UpdateMetadataFieldParams = {
    organization_id: number,
    organization_metadata_field_id: number,
    metadata: Object
}
