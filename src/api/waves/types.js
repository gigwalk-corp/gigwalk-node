// @flow

type GetWaveSubCollectionQuery = {
    limit: number,
    offset: number,
    cache_strategy: string,
    aggregate: string,
    sort_col: string,
    sort_desc: boolean
}

export type GetWaveSubCollectionParams = {
    organization_subscription_wave_id: number,
    sub_collection: 'summary' | 'data_type_summary' | 'observation_target_summary' | 'location_filters' | 'observation_target_filters' |
                    'data_type_filters' | 'photos' | 'download_photos' | 'location_issues' | 'search',
    sub_sub_collection: 'location_list_id' | 'location_id' | 'location_title' | 'location_state' | 'location_city' |
                        'location_metadata' | 'observation_target_id' | 'orservation_target_metadata',
    query?: GetWaveSubCollectionQuery
}

type GetWaveQuery = {
    limit: number,
    offset: number,
    cache_strategy: string,
    aggregate: string,
    sort_field: 'title' | 'execution' | 'status' | 'due_date' | 'locations',
    sort_desc: boolean
}

export type GetWaveParams = {
    organization_subscription_wave_id: number,
    query?: GetWaveQuery
}

export type CreateWaveParams = {
    organization_subscription_wave_id: number
}
