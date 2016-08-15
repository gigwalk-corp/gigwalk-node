// @flow

export type Group = {
    name: string,
    id: number,
    parent_id: number,
    parent: Object,
    organization_id: number,
    member_count: number,
    owners: Array<Object>,
    sub_groups: Array<Object>,
    organization_data: Array<Object>;
}

export type Member = {
    first_name: string,
    last_name: string,
    customer_id: number,
    email: string,
    phonenumber: string,
    photo_url: string,
    role: string,
    customer_status: string,
    address_line_1: string,
    address_line_2: string,
    group_memberships: string
}

type GroupFields = {
    parent_id?: number,
    name?: string,
    organization_data?: Object
}

type MemberFields = {
    role: 'OWNER' | 'MEMBER',
    customer_id: number
}

export type DeleteGroupParams = {
    organization_id: number,
    group_id: number,
    cascade?: number
}

export type GetGroupParams = {
    organization_id: number,
    group_id: number
}

export type UpdateGroupParams = {
    organization_id: number,
    group_id: number,
    group: GroupFields
}

export type GetGroupSubgroupsParams = {
    group_id: number
}

export type GetGroupHierchyParams = {
    group_id?: number
}

type GetGroupForOrganizationQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type GetGroupForOrganizationParams = {
    organization_id: number,
    query: GetGroupForOrganizationQuery
}

export type CreateGroupParams = {
    organization_id: number,
    group: GroupFields
}

type GetGroupMembersQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type GetGroupMembersParams = {
    group_id: number,
    subgroup_members?: number,
    query?: GetGroupMembersQuery
}

export type AddGroupMemberParams = {
    group_id: number,
    member: MemberFields
}

export type UpdateGroupMembersParams = {
    group_id: number,
    action: 'remove' | 'update',
    members: Array<MemberFields>
}

export type RemoveGroupMemberParams = {
    customer_id: number,
    group_id: number
}

export type CloneGroupParams = {
    group_id: number,
    parent_id?: number,
    suffix?: string
}
