// @flow
import type { Location } from '../locations/types';
import type { PaginationParams } from '../resource';

export type LocationList = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    locations: Array<Location>
}

export type LocationListSummary = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    location_count: number,
}

export type LocationListUpload = {
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

export type UnresolvedLocation = {
    address: string,
    id: number,
    state: string,
    title: string
}

type NewLocationList = {
    name: string,
    status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED' | 'DELETED',
    locations: Array<{
        address: string,
        title: string
    }>
}

type UpdatedLocationList = {
    name?: string,
    status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED' | 'DELETED',
    locations?: Array<{
        address: string,
        title: string
    }>
}


export type DeleteLocationListParams = {
    organization_location_list_id: number
}

export type GetLocationListParams = {
    organization_location_list_id: number
}

export type UpdateLocationListParams = {
    organization_location_list_id: number,
    location_list: UpdatedLocationList
}

export type DeleteOrganizationLocationListParams = {
    organization_id: number,
    location_list_ids: Array<number>
}

export type GetOrganizationLocationListsParams = {
    organization_id: number
}

export type CreateOrganizationLocationListParams = {
    organization_id: number,
    location_list: NewLocationList
}

export type DeleteOrganiztionLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

export type DeleteLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

export type GetLocationDetailsForListParams = {
    organization_location_list_id: number
}

export type AddLocationsToListParams = {
    organization_location_list_id: number,
    locations: Array<number>
}

export type RemoveLocationsFromListParams = {
    organization_location_list_id: number,
    locations: Array<number>
}

export type SearchLocationListParams = PaginationParams & {
    organization_location_list_id: number,
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

export type UpdateUnresolvedLocationsParams = {
    file_upload_id: number,
    location_list_id: number,
    csv?: number,
    key?: string,
    location_data_array?: Array<{
        id: number,
        address: string
    }>
}
