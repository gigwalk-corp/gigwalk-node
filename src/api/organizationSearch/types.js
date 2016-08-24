// @flow

export type OrganizationSearch = {

}

type SearchOrganizationQuery = {
    q?: string,
    size?: number,
    from?: number
}

export type SearchOrganizationParams = {
    query?: SearchOrganizationQuery
}
