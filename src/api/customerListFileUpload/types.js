// @flow

type CustomerListFileFields = {
    name: string,
    key: string
}

export type UploadCustomerListFileParams = {
    organization_id: number,
    customer_list_file: CustomerListFileFields
}

export type GetCustomerListFileInfoForOrganizationParams = {
    organization_id: number,
    customer_file_id: number
}

export type GetCustomerListFileInfoParams = {
    customer_file_id: number
}
