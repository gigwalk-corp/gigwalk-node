// @flow

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
    certifications: Array<Object>,
    group_memberships: Array<Object>,
    organization: Object,
    metadata: Array<Object>
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

type CustomerFields = {
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

export type DeleteCustomerByEmailParams = {
    organization_id: number,
    customer_email: string
}

type GetCustomerWithEmailQuery = {
    customer_roles?: string
}

export type GetCustomerByEmailParams = {
    organization_id: number,
    customer_email: string,
    require_cert_ids?: Array<number>,
    exclude_cert_ids?: Array<number>,
    query?: GetCustomerWithEmailQuery
}

export type UpdateCustomerByEmailParams = {
    organization_id: number,
    customer_email: string,
    customer: CustomerFields
}

export type DeleteCustomerByIdParams = {
    organization_id: number,
    customer_id: number
}

type GetCustomerByIdQuery = {
    customer_roles?: string
}

export type GetCustomerByIdParams = {
    organization_id: number,
    customer_id: number,
    query?: GetCustomerByIdQuery
}

export type UpdateCustomerByIdParams = {
    organization_id: number,
    customer_id: number,
    customer: CustomerFields
}

type GetAllCustomersForOrganizationQuery = {
    offset?: number,
    limit?: number,
    order_by?: string,
    order_dir?: string,
    customer_roles?: string
}

export type GetAllCustomersForOrganizationParams = {
    organization_id: number,
    query?: GetAllCustomersForOrganizationQuery
}

export type UpdateCustomersForOrganizationParams = {
    organization_id: number,
    customers: Array<CustomerFields & { customer_id: number }>
}

export type DeleteCustomersForOrganizationParams = {
    organization_id: number,
    customers: Array<{ customer_id: number }>
}

export type UpdateCustomerParams = {
    customer: CustomerFields & { password?: string }
}

type SearchCustomersQuery = {
    size?: number,
    from?: number
}

export type SearchCustomersParams = {
    ticket_ids: Array<number>,
    group_ids?: Array<number>,
    required_certifications?: Array<number>,
    q?: string,
    query?: SearchCustomersQuery
}
