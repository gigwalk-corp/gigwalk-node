// @flow

export type ESLocation = {
    title: string,
    locality: string,
    id: number,
    country: string,
    formatted_address: string,
    address: string,
    postal_code: number,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    specificity: string,
    latitude: number,
    longitude: number,
    metadata: Object,
}

export type Location = {
    title: string,
    locality: string,
    id: number,
    relation_id: number,
    country: string,
    formatted_address: string,
    postal_code: number,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    specificity: string,
    latitude: number,
    longitude: number,
    tzid: string,
    organization_id: number,
    source_location_id: number,
    status: string,
    state: string,
    organization_data: Object
}

export type ESLocationList = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    location_count: number
}

export type LocationList = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    locations: Array<ESLocation>
}

export type LocationListFile = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    date_created: string,
    date_updated: string,
    file_uploads: Array<{
        id: number,
        status: string,
        location_count: number,
        processed_row_count: number,
        unresolved_location_count: number,
        date_created: string,
        date_updated: string
    }>
}

type LocationFields = {
    title: string,
    address: string
}

type ESLocationFields = {
    id: number,
    address: string
}

type LocationListFields = {
    name?: string,
    status?: string,
    locations?: Array<LocationFields>
}

export type DeleteLocationListParams = {
    organization_location_list_id: number
}

export type GetLocationListParams = {
    organization_location_list_id: number
}

export type UpdateLocationListParams = {
    organization_location_list_id: number,
    location_list: LocationListFields
}

export type DeleteOrganizationLocationListsParams = {
    organization_id: number,
    location_list_ids: Array<number>
}

type GetOrganizationLocationListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    include_auto_generated?: number
}

export type GetOrganizationLocationListsParams = {
    organization_id: number,
    query?: GetOrganizationLocationListsQuery
}

export type CreateOrganizationLocationListParams = {
    organization_id: number,
    location_list: LocationListFields
}

export type DeleteOrganizationLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

export type DeleteLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

type GetLocationsInListQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type GetLocationsInListParams = {
    organization_location_list_id: number,
    query?: GetLocationsInListQuery
}

export type AddLocationsToListParams = {
    organization_location_list_id: number,
    locations: Array<number>
}

export type RemoveLocationsFromListParams = {
    organization_location_list_id: number,
    locations: Array<number>
} | {
    organization_location_list_id: number,
    relations: Array<number>
}

type SearchLocationListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type SearchLocationListParams = {
    organization_location_list_id: number,
    query?: SearchLocationListQuery
}

export type GetFileInfoForLocationListParams = {
    location_list_id: number
}

export type GetFileInfoForOrganizationLocationListParams = {
    organization_id: number,
    location_list_id: number
}

export type CreateOrganizationLocationListUsingFileParams = {
    organization_id: number,
    location_list_name: string,
    s3_keys: Array<string>
}

export type GetUnresolvedLocationsParams = {
    file_upload_id: number,
    location_list_id: number
}

export type UpdateLocationAddressByIDParams = {
    file_upload_id: number,
    location_list_id: number,
    location_id: number,
    csv?: number,
    key?: string,
    location_data_array?: Array<ESLocationFields>
}
