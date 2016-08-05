// @flow
import type { ESParams } from '../resource';

export type Customer = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    role: string,
    phonenumber: string,
    address_line_1: string,
    address_line_2: string,
    photo_url: string,
    ideal_hours_week: number,
    max_hours_week: number,
    rating_score: number,
    customer_status: string,
    home_latitude: number,
    home_longitude: number,
    date_last_auth: string,
    certifications: Array<{
        id: number
    }>,
    group_memberships: Array<{
        group: string,
        role: string,
        group_id: number
    }>,
    organization: {
        vertical_type: string,
        core_private_workforce: boolean | null,
        core_customer_account: string | null,
        organization_name: string,
        cannot_opt_out: boolean,
        id: number,
        needs_core: boolean
    },
    metadata: Array<{
        id: number,
        key: string,
        value: number | string,
    }>
}

export type ESCustomer = {
    customer_id: number,
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    role: string,
    address_line_1: string,
    address_line_2: string,
    photo_url: string,
    has_capacity_hours: boolean,
    can_schedule_hard_date: boolean,
    customer_status: string,
    certification_id: Array<number>,
    group_id: Array<number>,
    group_id_with_membership: Array<number>,
    organization_id: number
}

type CustomerUpdateFields = {
    email?: string,
    first_name?: string,
    last_name?: string,
    photo_url?: string,
    address_line_1?: string,
    address_line_2?: string,
    phonenumber?: string,
    customer_status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED',
    max_hours_week?: number,
    ideal_hours_week?: number,
    home_latitude?: number,
    home_longitude?: number,
    certifications?: Array<number>
}

export type DeleteCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

export type GetCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

export type UpdateCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string,
    customer: CustomerUpdateFields
}

export type DeleteCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

export type GetCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

export type UpdateCustomerWithIDParams = {
    organization_id: number,
    customer_id: number,
    customer: CustomerUpdateFields
}

export type GetOrganizationCustomersParams = {
    organization_id: number
}

export type UpdateOrganizationCustomersParams = {
    organization_id: number,
    action: string,
    customers: Array<CustomerUpdateFields & { customer_id: number }>
}

export type UpdateCustomerParams = {
    customer: CustomerUpdateFields & { password?: string }
}

export type SearchCustomersParams = ESParams & {
    ticket_ids: Array<number>,
    group_ids?: Array<number>,
    required_certifications: Array<number>
}

