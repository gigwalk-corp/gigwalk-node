// @flow

type UpdateCertificationParams = {
    description: string,
    title: string,
    type: string,
    state: string
}

type UpdateCertificationsParams = {
    certifications: [
        {
            description: string,
            title: string,
            type: string,
            state: string
        }
    ]
}

type UpdateCustomerCertsParams = {
    action: string,
    certification_ids: []
}

type CreateOrganizationCertificationsParams = {
    certifications: [
        {
            description: string,
            title: string,
            type: string,
            state: string
        }
    ]
}

type UpdateOrganizationCertificationsParams = {
  certifications: [
    {
      id: number,
      description: string,
      title: string,
      type: string,
      state: string
    }
  ]
}

type DeleteOrganizationCertificationsParams = {
    certification_ids: []
}

type CreateOrganizationCertsFromFileParams = {
    s3_keys: []
}

export type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
};

export type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>;

export type NumberCertificationData = [
    number
];

export type CertificationData = [{
    title: string,
    user_count: number,
    description: string,
    id: number,
    type: string,
    state: string,
    organization_id: number
}];

export type BulkCertificationData = [[{
    title: string,
    user_count: number,
    description: string,
    id: number,
    type: string,
    state: string,
    organization_id: number
}]];

export type BulkCustomerCertificationData = [[{
    title: string,
    user_count: number,
    description: string,
    id: number,
    type: string,
    state: string,
    organization_id: number,
    assigned_by: {
        full_name: string,
        id: number,
        customer_status: string
    }
}]];

export type UpdateCustomerCertsData = [[[
        number,
        number
]]];

export type EmptyCertificationData = [];

export default class Certificates {
    constructor(client: Axios) {
        this.client = client;
    }

    client: Axios;

    deleteCertification(certificationID: number): APIPromise<NumberCertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.delete(URL);
    }

    getCertification(certificationID: number): APIPromise<CertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.get(URL);
    }

    updateCertification(certificationID: number, payload: UpdateCertificationParams): APIPromise<CertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.put(URL, payload);
    }

    getCertifications(): APIPromise<BulkCertificationData> {
        const URL: string = '/v1/certifications';
        return this.client.get(URL);
    }

    createCertifications(payload: UpdateCertificationsParams): APIPromise<BulkCertificationData> {
        const URL: string = '/v1/certifications';
        return this.client.post(URL, payload);
    }

    getCustomerCertifications(organizationID: number, customerID: number): APIPromise<BulkCustomerCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.get(URL);
    }

    updateCustomerCertifications(organizationID: number, customerID: number, payload: UpdateCustomerCertsParams): APIPromise<UpdateCustomerCertsData> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.put(URL, payload);
    }

    getOrganizationCertifications(organizationID: number): APIPromise<BulkCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.get(URL);
    }

    createOrganizationCertifications(organizationID: number, payload: CreateOrganizationCertificationsParams): APIPromise<BulkCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.post(URL, payload);
    }

    updateOrganizationCertifications(organizationID: number, payload: UpdateOrganizationCertificationsParams): APIPromise<EmptyCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.put(URL, payload);
    }

    deleteOrganizationCertifications(organizationID: number, payload: DeleteOrganizationCertificationsParams): APIPromise<EmptyCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/delete`;
        return this.client.post(URL, payload);
    }

    createOrganizationCertificationsFromFile(organizationID: number, payload: CreateOrganizationCertsFromFileParams): APIPromise<NumberCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/upload`;
        return this.client.post(URL, payload);
    }
}
