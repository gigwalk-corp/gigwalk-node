// @flow
export type Certification = {
    title: string,
    user_count: number,
    description: string,
    id: number,
    type: string,
    state: string,
    organization_id: number
}

export type CustomerCertification = Certification & {
    assigned_by: {
        full_name: string,
        id: number,
        customer_status: string
    }
}

export type CertificationFields = {
    description?: string,
    title?: string,
    type?: string,
    state?: string
}

export type DeleteCertificationParams = {
    certification_id: number
}

export type GetCertificationParams = {
    certification_id: number
}

export type UpdateCertificationParams = {
    certification_id: number,
    certification: CertificationFields
}

type GetCertificationsQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string,
    filter_type?: string,
    query_string?: string
}

export type GetCertificationsParams = {
    query?: GetCertificationsQuery
}

export type CreateCertificationsParams = {
    certifications: Array<CertificationFields>
}

type GetAllCertificationsForCustomerQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string
}

export type GetAllCertificationsForCustomerParams = {
    organization_id: number,
    customer_id: number,
    query?: GetAllCertificationsForCustomerQuery
}

export type AddRemoveCertificationsForCustomerParams = {
    organization_id: number,
    customer_id: number,
    certification_ids: Array<number>
}

type GetAllCertificationsForOrganizationQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string,
    filter_type?: string
}

export type GetAllCertificationsForOrganizationParams = {
    organization_id: number,
    query?: GetAllCertificationsForOrganizationQuery
}

export type CreateCertificationsForOrganizationParams = {
    organization_id: number,
    certifications: Array<CertificationFields>
}

export type UpdateCertificationsForOrganizationParams = {
    organization_id: number,
    certifications: Array<{
        id: number,
        description: string,
        title: string,
        type: string,
        state: string
    }>
}

export type DeleteCertificationsForOrganizationParams = {
    organization_id: number,
    certification_ids: Array<number>
}

export type UploadCertificationsForOrganizationParams = {
    organization_id: number,
    s3_keys: Array<string>
}
