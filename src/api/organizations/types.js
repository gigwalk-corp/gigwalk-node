// @flow

export type Organization = {
    organization_name: string,
    id: number,
    type: string,
    date_updated: string,
    user_count: number,
    status: string,
    vertical_type: string,
    core_customer_account: boolean,
    core_private_workforce: boolean,
    needs_core: boolean,
    cloud9urls: Object,
    created_user: Object,
    stats: Object,
    config: {
        logo_uri: string,
        is_crossmark_org: boolean,
        invitation_ttl: number,
        locale: string,
        targets_enabled: boolean,
        force_timing_template: boolean,
        week_start_day: number,
        hours_after_due: number,
        max_weekly_hours: number,
        cannot_opt_out: boolean,
        autoassign: Object,
        push_notifications: Object,
        two_way_rating: Object
    }
}

type OrganizationFields = {
    organization_name: string,
    type: string,
    email: string,
    needs_core?: boolean,
    core_customer_account?: string,
    core_private_workforce?: string,
    config?: {
        logo_uri: string,
        hours_after_due: number
    },
    cloud9urls?: Array<{
        name: string,
        url: string,
        customer_id: number
    }>
}

export type DeleteOrganizationParams = {
    organization_id: number
}

export type GetOrganizationParams = {
    organization_id: number
}

export type UpdateOrganizationParams = {
    organization_id: number,
    organization: OrganizationFields
}

type GetOrganizationsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING'
}

export type GetOrganizationsParams = {
    query?: GetOrganizationsQuery
}

export type CreateOrganizationParams = {
    organization: OrganizationFields
}
