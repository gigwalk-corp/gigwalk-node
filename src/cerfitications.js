// @flow
import axios from 'axios';

export type Options = {
    baseURL: string,
    auth: string
};

export default class Certificates {
    constructor({ auth, baseURL }: Options) {
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: auth
            }
        });
    }

    client: typeof axios;

    deleteCertificationID(certificationID : number): Promise<Object> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.delete(URL);
    }

    getCertificationID(certificationID : number): Promise<Object> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.get(URL);
    }

    putCertificationID(certificationID : number, payload: any): Promise<Object> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.put(URL, payload);
    }

    getCertifications(): Promise<Object> {
        const URL: string = '/v1/certifications';
        return this.client.get(URL);
    }

    postCertifications(payload : any): Promise<Object> {
        const URL: string = '/v1/certifications';
        return this.client.post(URL, payload);
    }

    getCustomerCertifications(organizationID : number, customerID : number): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.get(URL);
    }

    putCustomerCertifications(organizationID : number, customerID : number, payload : any): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.put(URL, payload);
    }

    getOrganizationCertifications(organizationID : number): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.get(URL);
    }

    postOrganizationCertifications(organizationID : number, payload : any): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.post(URL, payload);
    }

    putOrganizationCertifications(organizationID : number, payload : any): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.put(URL, payload);
    }

    deleteOrganizationCertifications(organizationID : number, payload : any): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/delete`;
        return this.client.post(URL, payload);
    }

    uploadOrganizationCertificationsFromS3(organizationID : number, payload : any): Promise<Object> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/upload`;
        return this.client.post(URL, payload);
    }
}
