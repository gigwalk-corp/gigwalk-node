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
    latitude: number,
    longitude: number,
    tzid: string,
    organization_id: number,
    source_location_id: number,
    status: string,
    state: string,
    organization_data: { [key: string]: string | number }
}
