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

    /**
     * @api {delete} /v1/certifications/{certification_id}
     * @apiName DeleteCertification
     * @apiDescription Delete given cert This is a hard delete
     * @apiParam {number} certificationID
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteCertification({...})
     */
    deleteCertification(certificationID: number): APIPromise<NumberCertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.delete(URL);
    }

    /**
     * @api {get} /v1/certifications/{certification_id}
     * @apiName GetCertification
     * @apiDescription Get Certification info. Return data fields (id, org_id, description, title, type, state).
     * @apiParam {number} certificationID
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertification({...})
     */
    getCertification(certificationID: number): APIPromise<CertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.get(URL);
    }

    /**
     * @api {put} /v1/certifications/{certification_id}
     * @apiName UpdateCertification
     * @apiDescription Update Certification(s) JSON payload can have (description, title, type, state).
     * @apiParam {number} certificationID
     * @apiParam {UpdateCertificationParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCertification({...})
     */
    updateCertification(certificationID: number, payload: UpdateCertificationParams): APIPromise<CertificationData> {
        const URL: string = `/v1/certifications/${certificationID}`;
        return this.client.put(URL, payload);
    }

    /**
     * @api {get} /v1/certifications
     * @apiName GetCertifications
     * @apiDescription Get all certifications available to the current user Return data fields (id, org_id, description, title, type, state). Including the
                       current user organization certificates and public certificates It could return paginated results and also sorted by given parameters
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertifications({...})
     */
    getCertifications(): APIPromise<BulkCertificationData> {
        const URL: string = '/v1/certifications';
        return this.client.get(URL);
    }

    /**
     * @api {post} /v1/certifications
     * @apiName CreateCertifications
     * @apiDescription Create Certification(s) JSON payload can have (description, title, type, state).
                       If the cert already exists (check by title), then we return existing cert(s)
     * @apiParam {UpdateCertificationsParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.createCertifications({...})
     */
    createCertifications(payload: UpdateCertificationsParams): APIPromise<BulkCertificationData> {
        const URL: string = '/v1/certifications';
        return this.client.post(URL, payload);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName GetCustomerCertifications
     * @apiDescription Get Certification info for a given customer Return data fields (id, org_id, description, title, type, state).
                       It could return paginated results and also sorted by given parameters
     * @apiParam {number} organizationID
     * @apiParam {number} customerID
     * @apiExample {js} Example:
     *             gigwalk.certification.getCustomerCertifications({...})
     */
    getCustomerCertifications(organizationID: number, customerID: number): APIPromise<BulkCustomerCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.get(URL);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName UpdateCustomerCertifications
     * @apiDescription Add or remove certifications for a customer A customer WORKER can use this
                       endpoint only to add/remove SELF_CERTS certifications to himself
     * @apiParam {number} organizationID
     * @apiParam {number} customerID
     * @apiParam {UpdateCustomerCertsParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCustomerCertifications({...})
     */
    updateCustomerCertifications(organizationID: number, customerID: number, payload: UpdateCustomerCertsParams): APIPromise<UpdateCustomerCertsData> {
        const URL: string = `/v1/organizations/${organizationID}/customer/${customerID}/certifications`;
        return this.client.put(URL, payload);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/certifications
     * @apiName GetOrganizationCertifications
     * @apiDescription Get Certifications information for a given organization Return data fields (id, org_id, description, title, type, state).
                       It could return paginated results and also sorted by given parameters
     * @apiParam {number} organizationID
     * @apiExample {js} Example:
     *             gigwalk.certification.getOrganizationCertifications({...})
     */
    getOrganizationCertifications(organizationID: number): APIPromise<BulkCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.get(URL);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications
     * @apiName CreateOrganizationCertifications
     * @apiDescription Create Certification(s) for a given organization JSON payload can have (description, title).
                       If the cert already exists (check by title), then we return existing cert(s)
     * @apiParam {number} organizationID
     * @apiParam {CreateOrganizationCertificationsParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertifications({...})
     */
    createOrganizationCertifications(organizationID: number, payload: CreateOrganizationCertificationsParams): APIPromise<BulkCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.post(URL, payload);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/certifications
     * @apiName UpdateOrganizationCertifications
     * @apiDescription Update Certification(s) for a given organization
     * @apiParam {number} organization_id
     * @apiParam {UpdateOrganizationCertificationsParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.updateOrganizationCertifications({...})
     */
    updateOrganizationCertifications(organizationID: number, payload: UpdateOrganizationCertificationsParams): APIPromise<EmptyCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications`;
        return this.client.put(URL, payload);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/delete
     * @apiName DeleteOrganizationCertifications
     * @apiDescription Mark the certifications with the passed ids as deleted.
     * @apiParam {number} organizationID
     * @apiParam {DeleteOrganizationCertificationsParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteOrganizationCertifications({...})
     */
    deleteOrganizationCertifications(organizationID: number, payload: DeleteOrganizationCertificationsParams): APIPromise<EmptyCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/delete`;
        return this.client.post(URL, payload);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/upload
     * @apiName CreateOrganizationCertificationsFromFile
     * @apiDescription Create Certifications from a file that has been uploaded to S3.
                       See https://docs.google.com/document/d/1Q14OKBva_2VhWdSQCbrwjq2Q8dVH6TwXgZ83jTGxHRc/ for more info about our file upload api.
     * @apiParam {number} organizationID
     * @apiParam {CreateOrganizationCertsFromFileParams} payload
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertificationsFromFile({...})
     */
    createOrganizationCertificationsFromFile(organizationID: number, payload: CreateOrganizationCertsFromFileParams): APIPromise<NumberCertificationData> {
        const URL: string = `/v1/organizations/${organizationID}/certifications/upload`;
        return this.client.post(URL, payload);
    }
}
