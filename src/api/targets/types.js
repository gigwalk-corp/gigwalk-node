// @flow

export type ObservationTarget = {
    title: string,
    id: number,
    observation_target_type_id: number,
    status: string,
    organization_data: Object
}

type ESObservationTargetFields = {
    observation_target_type_id: number,
    title: string
}

type ObservationTargetFields = {
    obs_target_id?: number,
    title?: string,
    status?: string,
    key_value_pairs?: Array<{
        key: string,
        value: string
    }>
}

export type CreateOrganizationTargetParams = {
    organization_id: number,
    observation_target: ESObservationTargetFields
}

type GetOrganizationTargetQuery = {
    limit?: number,
    offset?: number
}

export type GetOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number,
    query?: GetOrganizationTargetQuery
}

export type UpdateOrganizationTargetParams = {
    organization_id: number,
    observation_target_id: number,
    observation_target: ObservationTargetFields
}

type SearchOrganizationTargetsQuery = {
    q?: string,
    limit?: number,
    offset?: number
}

export type SearchOrganizationTargetsParams = {
    organization_id: number,
    query_string: string,
    query?: SearchOrganizationTargetsQuery
}
