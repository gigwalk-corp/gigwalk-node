// @flow

export type TargetList = {
    name: string,
    id: number,
    observation_target_count: number,
    observation_target_type_id: number,
    status: string
}

export type ObservationTarget = {
    title: string,
    id: number,
    organization_id: number,
    observation_target_type_id: number
}

export type ObservationTargetFields = {
    title: string
}

export type TargetListFields = {
  name: string,
  observation_target_type: number,
  observation_targets: Array<ObservationTargetFields>,
  status?: string
}

type GetTargetListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    include_auto_generated?: number
}

export type GetTargetListsParams = {
    query?: GetTargetListsQuery
}

export type GetTargetListParams = {
    observation_target_list_id: number
}

type GetOrganizationTargetListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    auto_generated?: number
}

export type GetOrganizationTargetListsParams = {
    organization_id: number,
    query?: GetOrganizationTargetListsQuery
}

export type CreateOrganizationTargetListParams = {
    organization_id: number,
    target_list: TargetListFields
}

export type GetOrganizationTargetListParams = {
    organization_id: number,
    observation_target_list_id: number
}

export type DeleteTargetListParams = {
    observation_target_list_id: number
}

export type UpdateTargetListParams = {
    observation_target_list_id: number,
    target_list: TargetListFields
}

type SearchTargetsInObservationListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type SearchTargetsInObservationListParams = {
    target_list_id: number,
    query?: SearchTargetsInObservationListQuery
}

type SearchTargetsInListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type SearchTargetsInListParams = {
    target_list_id: number,
    query?: SearchTargetsInListQuery
}

type GetTargetsFromListQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type GetTargetsFromListParams = {
    target_list_id: number,
    query?: GetTargetsFromListQuery
}

export type UpdateTargetsInListParams = {
    target_list_id: number,
    action: 'ADD' | 'REMOVE',
    target_ids: Array<number>
}

export type SearchDataItemsInListParams = {
    observation_target_id: number,
    location_id: number,
    item_count: number
}
