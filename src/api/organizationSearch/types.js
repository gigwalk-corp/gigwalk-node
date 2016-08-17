// @flow

export type OrganizationSearch = {

}

type searchOrganizationQuery = {
    q?: string,
    size?: number,
    from?: number
}

export type searchOrganizationParams = {
    query?: searchOrganizationQuery
}
