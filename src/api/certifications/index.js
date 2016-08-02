// @flow
import Resource from '../resource';
import type { $AxiosXHR } from 'axios';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<$AxiosXHR<APIRes<T>>>

type CertificationTemplate = {
    description: string,
    title: string,
    type: string,
    state: string
}

type DeleteCertificationParams = {
    certification_id: number
}

type GetCertificationParams = {
    certification_id: number
}

type UpdateCertificationParams = {
    certification_id: number,
    certification: CertificationTemplate
}

type CreateCertificationsParams = {
    certifications: Array<CertificationTemplate>
}

type GetCustomerCertificationsParams = {
    organization_id: number,
    customer_id: number
}

type UpdateCustomerCertificationsParams = {
    organization_id: number,
    customer_id: number,
    action: string,
    certification_ids: Array<number>
}

type GetOrganizationCertificationsParams = {
    organization_id: number
}

type CreateOrganizationCertificationsParams = {
    organization_id: number,
    certifications: Array<CertificationTemplate>
}

type UpdateOrganizationCertificationsParams = {
    organization_id: number,
    certifications: Array<{
        id: number,
        description: string,
        title: string,
        type: string,
        state: string
    }>
}

type DeleteOrganizationCertificationsParams = {
    organization_id: number,
    certification_ids: Array<number>
}

type CreateOrganizationCertificationsFromFileParams = {
    organization_id: number,
    s3_keys: Array<string>
}

type CertificationSchema = {
    title: string,
    user_count: number,
    description: string,
    id: number,
    type: string,
    state: string,
    organization_id: number
}

type DeleteCertificationData = [
    number
]

type GetCertificationData = [
    CertificationSchema
]

type UpdateCertificationData = [
    CertificationSchema
]

type GetCertificationsData = Array<CertificationSchema>

type CreateCertificationsData = Array<CertificationSchema>

type GetCustomerCertificationsData = Array<{
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
}>

type UpdateCustomerCertificationsData = Array<[
    number,
    number
]>

type GetOrganizationCertificationsData = Array<CertificationSchema>

type CreateOrganizationCertificationsData = Array<CertificationSchema>

type UpdateOrganizationCertificationsData = null

type DeleteOrganizationCertificationsData = null

type CreateOrganizationCertificationsFromFileData = Array<number>

export default class Certifications extends Resource {
    /**
     * @api {delete} /v1/certifications/{certification_id}
     * @apiName DeleteCertification
     * @apiDescription Delete given cert This is a hard delete
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteCertification({...})
     */
    deleteCertification(params: DeleteCertificationParams): APIPromise<DeleteCertificationData> {
        return this.client.delete(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {get} /v1/certifications/{certification_id}
     * @apiName GetCertification
     * @apiDescription Get Certification info. Return data fields (id, org_id, description, title, type, state).
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertification({...})
     */
    getCertification(params: GetCertificationParams): APIPromise<GetCertificationData> {
        return this.client.get(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {put} /v1/certifications/{certification_id}
     * @apiName UpdateCertification
     * @apiDescription Update Certification(s) JSON payload can have (description, title, type, state).
     * @apiParam {Number} certification_id
     * @apiParam {CertificationTemplate} certification
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCertification({...})
     */
    updateCertification(params: UpdateCertificationParams): APIPromise<UpdateCertificationData> {
        const url = `/v1/certifications/${params.certification_id}`;
        return this.client.put(url, { ...params.certification });
    }

    /**
     * @api {get} /v1/certifications
     * @apiName GetCertifications
     * @apiDescription Get all certifications available to the current user Return data fields (id, org_id, description, title, type, state).
                       Including the current user organization certificates and public certificates It could return paginated results and also
                       sorted by given parameters
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertifications({...})
     */
    getCertifications(): APIPromise<GetCertificationsData> {
        return this.client.get('/v1/certifications');
    }

    /**
     * @api {post} /v1/certifications
     * @apiName CreateCertifications
     * @apiDescription Create Certification(s) JSON payload can have (description, title, type, state).
                       If the cert already exists (check by title), then we return existing cert(s)
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certification.createCertifications({...})
     */
    createCertifications(params: CreateCertificationsParams): APIPromise<CreateCertificationsData> {
        const data = {
            certifications: params.certifications
        };
        return this.client.post('/v1/certifications', data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName GetCustomerCertifications
     * @apiDescription Get Certification info for a given customer Return data fields (id, org_id, description, title, type, state).
                       It could return paginated results and also sorted by given parameters
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.certification.getCustomerCertifications({...})
     */
    getCustomerCertifications(params: GetCustomerCertificationsParams): APIPromise<GetCustomerCertificationsData> {
        const url = `/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName UpdateCustomerCertifications
     * @apiDescription Add or remove certifications for a customer A customer WORKER can use this
                       endpoint only to add/remove SELF_CERTS certifications to himself
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {String} action
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCustomerCertifications({...})
     */
    updateCustomerCertifications(params: UpdateCustomerCertificationsParams): APIPromise<UpdateCustomerCertificationsData> {
        const url = `/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`;
        const data = {
            action: params.action,
            certification_ids: params.certification_ids
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/certifications
     * @apiName GetOrganizationCertifications
     * @apiDescription Get Certifications information for a given organization Return data fields (id, org_id, description, title, type, state).
                       It could return paginated results and also sorted by given parameters
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.certification.getOrganizationCertifications({...})
     */
    getOrganizationCertifications(params: GetOrganizationCertificationsParams): APIPromise<GetOrganizationCertificationsData> {
        return this.client.get(`/v1/organizations/${params.organization_id}/certifications`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications
     * @apiName CreateOrganizationCertifications
     * @apiDescription Create Certification(s) for a given organization JSON payload can have (description, title).
                       If the cert already exists (check by title), then we return existing cert(s)
     * @apiParam {Number} organization_id
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertifications({...})
     */
    createOrganizationCertifications(params: CreateOrganizationCertificationsParams): APIPromise<CreateOrganizationCertificationsData> {
        const url = `/v1/organizations/${params.organization_id}/certifications`;
        const data = {
            certifications: params.certifications
        };

        return this.client.post(url, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/certifications
     * @apiName UpdateOrganizationCertifications
     * @apiDescription Update Certification(s) for a given organization
     * @apiParam {Number} organization_id
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certification.updateOrganizationCertifications({...})
     */
    updateOrganizationCertifications(params: UpdateOrganizationCertificationsParams): APIPromise<UpdateOrganizationCertificationsData> {
        const url = `/v1/organizations/${params.organization_id}/certifications`;
        const data = {
            certifications: params.certifications
        };

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/delete
     * @apiName DeleteOrganizationCertifications
     * @apiDescription Mark the certifications with the passed ids as deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteOrganizationCertifications({...})
     */
    deleteOrganizationCertifications(params: DeleteOrganizationCertificationsParams): APIPromise<DeleteOrganizationCertificationsData> {
        const url = `/v1/organizations/${params.organization_id}/certifications/delete`;
        const data = {
            certification_ids: params.certification_ids
        };

        return this.client.post(url, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/upload
     * @apiName CreateOrganizationCertificationsFromFile
     * @apiDescription Create Certifications from a file that has been uploaded to S3.
                       See https://docs.google.com/document/d/1Q14OKBva_2VhWdSQCbrwjq2Q8dVH6TwXgZ83jTGxHRc/ for more info about our file upload api.
     * @apiParam {Number} organization_id
     * @apiParam {Array<string>} s3_keys
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertificationsFromFile({...})
     */
    createOrganizationCertificationsFromFile(params: CreateOrganizationCertificationsFromFileParams): APIPromise<CreateOrganizationCertificationsFromFileData> {
        const url = `/v1/organizations/${params.organization_id}/certifications/upload`;
        const data = {
            s3_keys: params.s3_keys
        };

        return this.client.post(url, data);
    }
}
