// @flow

type GetModuleForOrganizationQuery = {
    limit?: number,
    offset?: number
}

export type GetModuleForOrganizationParams = {
    organization_id: number,
    module_id?: 'comment' | 'activity',
    query?: GetModuleForOrganizationQuery
}

type GetModuleQuery = {
    limit?: number,
    offset?: number
}

export type GetModuleParams = {
    module_id?: 'comment' | 'activity',
    query?: GetModuleQuery
}
