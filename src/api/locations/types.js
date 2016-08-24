// @flow

export type Location = {
    title: string,
    locality: string,
    id: number,
    country: string,
    formatted_address: string,
    postal_code: number,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    specificity: string,
    latitude: string,
    longitude: string,
    tzid: string,
    organization_id: number,
    source_location_id: number,
    status: string,
    state: string,
    organization_data: Object
}

type LocationFields = {
    title: string,
    locality: string,
    administrative_area_level_1: string,
    administrative_area_level_2?: string,
    status?: string,
    tzid?: string,
    country: string,
    postal_code: string,
    latitude: number,
    longitude: number,
    formatted_address: string
}

type GetLocationsQuery = {
    limit?: number,
    offset?: number
}

export type GetLocationsParams = {
    query?: GetLocationsQuery
}

export type CreateLocationsParams = {
    locations: Array<LocationFields>
}

type GetLocationQuery = {
    limit?: number,
    offset?: number
}

export type GetLocationParams = {
    location_id: number,
    query?: GetLocationQuery
}

type GetOrganizationLocationsQuery = {
    limit?: number,
    offset?: number
}

export type GetOrganizationLocationsParams = {
    organization_id: number,
    query?: GetOrganizationLocationsQuery
}

export type CreateOrganizationLocationsParams = {
    organization_id: number,
    locations: Array<LocationFields>
}

export type UpdateOrganizationLocationsParams = {
    organization_id: number,
    locations: Array<LocationFields>
}

export type DeleteOrganizationLocationParams = {
    organization_id: number,
    location_id: number
}

export type GetOrganizationLocationParams = {
    organization_id: number,
    location_id: number
}

export type CreateOrganizationLocationParams = {
    organization_id: number,
    title: string,
    address: string,
    organization_data?: Object
}

export type UpdateOrganizationLocationParams = {
    organization_id: number,
    location_id: number,
    title: string,
    address: string,
    organization_data?: Object
}

export type CreateOrganizationLocationListParams = {
    organization_id: number,
    subscription_id: number
}
