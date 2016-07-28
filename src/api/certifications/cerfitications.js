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

type UpdateCustomerCertificationsParams = {
    action: string,
    certification_ids: []
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

type CreateOrganizationCertificationsFromFileParams = {
    s3_keys: [ ]
}

export default class Certificates {
    constructor(client: Axios) {
        this.client = client;
    }

    client: Axios;

    deleteCertification(certificationID : number): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.delete(URL);
    }

    getCertification(certificationID : number): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.get(URL);
    }

    updateCertification(certificationID : number, payload: UpdateCertificationParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.put(URL, payload);
    }

    getCertifications(): Promise<AxiosXHR<Object>> {
        const URL: string = '/v1/certifications';
        return this.client.get(URL);
    }

    createCertifications(payload : UpdateCertificationsParams): Promise<AxiosXHR<Object>> {
        const URL: string = '/v1/certifications';
        return this.client.post(URL, payload);
    }

    getCustomerCertifications(organizationID : number, customerID : number): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.get(URL);
    }

    updateCustomerCertifications(organizationID : number, customerID : number, payload : UpdateCustomerCertificationsParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.put(URL, payload);
    }

    getOrganizationCertifications(organizationID : number): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.get(URL);
    }

    createOrganizationCertifications(organizationID : number, payload : UpdateCertificationsParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.post(URL, payload);
    }

    updateOrganizationCertifications(organizationID : number, payload : UpdateOrganizationCertificationsParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.put(URL, payload);
    }

    deleteOrganizationCertifications(organizationID : number, payload : DeleteOrganizationCertificationsParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/delete`;
        return this.client.post(URL, payload);
    }

    createOrganizationCertificationsFromFile(organizationID : number, payload : CreateOrganizationCertificationsFromFileParams): Promise<AxiosXHR<Object>> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/upload`;
        return this.client.post(URL, payload);
    }
}
