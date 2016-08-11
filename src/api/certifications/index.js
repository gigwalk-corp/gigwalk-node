// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

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

type GetCertificationsQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string,
    filter_type?: string,
    query_string?: string
}

type GetCertificationsParams = {
    query?: GetCertificationsQuery
}

type CreateCertificationsParams = {
    certifications: Array<CertificationTemplate>
}

type GetCustomerCertificationsQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string
}

type GetCustomerCertificationsParams = {
    organization_id: number,
    customer_id: number,
    query?: GetCustomerCertificationsQuery
}

type UpdateCustomerCertificationsParams = {
    organization_id: number,
    customer_id: number,
    action: string,
    certification_ids: Array<number>
}

type GetOrganizationCertificationsQuery = {
    limit?: number,
    offset?: number,
    sort_field?: string,
    sort_order?: string,
    filter_type?: string
}

type GetOrganizationCertificationsParams = {
    organization_id: number,
    query?: GetOrganizationCertificationsQuery
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
     * @apiName deleteCertification
     * @apiDescription Delete the given certification. This is a hard delete
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteCertification({...})
     */
    deleteCertification(params: DeleteCertificationParams): APIPromise<DeleteCertificationData> {
        return this.client.delete(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {get} /v1/certifications/{certification_id}
     * @apiName getCertification
     * @apiDescription Get certification information.
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertification({...})
     */
    getCertification(params: GetCertificationParams): APIPromise<GetCertificationData> {
        return this.client.get(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {put} /v1/certifications/{certification_id}
     * @apiName updateCertification
     * @apiDescription Update certification(s).
     * @apiParam {Number} certification_id
     * @apiParam {CertificationTemplate} certification
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCertification({...})
     */
    updateCertification(params: UpdateCertificationParams): APIPromise<UpdateCertificationData> {
        return this.client.put(`/v1/certifications/${params.certification_id}`, { ...params.certification });
    }

    /**
     * @api {get} /v1/certifications
     * @apiName getCertifications
     * @apiDescription Get all certifications available to the current user. Returns the current user organization's certificates and public certificates.
                       Capable of returning paginated results.
     * @apiParam {GetCertificationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.certification.getCertifications({...})
     */
    getCertifications(params: GetCertificationsParams): APIPromise<GetCertificationsData> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/certifications${queryString}`);
    }

    /**
     * @api {post} /v1/certifications
     * @apiName createCertifications
     * @apiDescription Create certification(s). If the certification already exists (checked by title), then existing certification(s) returned.
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
     * @apiName getCustomerCertifications
     * @apiDescription Get certification information for a given customer. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {GetCustomerCertificationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.certification.getCustomerCertifications({...})
     */
    getCustomerCertifications(params: GetCustomerCertificationsParams): APIPromise<GetCustomerCertificationsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications${queryString}`);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName updateCustomerCertifications
     * @apiDescription Add or remove certifications for a customer. A WORKER can use this endpoint only to add/remove SELF_CERTS certifications to themselves.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {String} action
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certification.updateCustomerCertifications({...})
     */
    updateCustomerCertifications(params: UpdateCustomerCertificationsParams): APIPromise<UpdateCustomerCertificationsData> {
        const data = {
            action: params.action,
            certification_ids: params.certification_ids
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/certifications
     * @apiName getOrganizationCertifications
     * @apiDescription Get certifications information for a given organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {GetOrganizationCertificationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.certification.getOrganizationCertifications({...})
     */
    getOrganizationCertifications(params: GetOrganizationCertificationsParams): APIPromise<GetOrganizationCertificationsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/certifications${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications
     * @apiName createOrganizationCertifications
     * @apiDescription Create certification(s) for a given organization. If the certification already exists (checked by title), then existing
                       certification(s) returned.
     * @apiParam {Number} organization_id
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertifications({...})
     */
    createOrganizationCertifications(params: CreateOrganizationCertificationsParams): APIPromise<CreateOrganizationCertificationsData> {
        const data = {
            certifications: params.certifications
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications`, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/certifications
     * @apiName updateOrganizationCertifications
     * @apiDescription Update certification(s) for a given organization.
     * @apiParam {Number} organization_id
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certification.updateOrganizationCertifications({...})
     */
    updateOrganizationCertifications(params: UpdateOrganizationCertificationsParams): APIPromise<UpdateOrganizationCertificationsData> {
        const data = {
            certifications: params.certifications
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/certifications`, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/delete
     * @apiName deleteOrganizationCertifications
     * @apiDescription Mark the certification(s) with the passed ids as deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certification.deleteOrganizationCertifications({...})
     */
    deleteOrganizationCertifications(params: DeleteOrganizationCertificationsParams): APIPromise<DeleteOrganizationCertificationsData> {
        const data = {
            certification_ids: params.certification_ids
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications/delete`, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/certifications/upload
     * @apiName createOrganizationCertificationsFromFile
     * @apiDescription Create certifications from a file that has been uploaded to S3.
                       See https://docs.google.com/document/d/1Q14OKBva_2VhWdSQCbrwjq2Q8dVH6TwXgZ83jTGxHRc/ for more information about our file upload api.
     * @apiParam {Number} organization_id
     * @apiParam {Array<string>} s3_keys
     * @apiExample {js} Example:
     *             gigwalk.certification.createOrganizationCertificationsFromFile({...})
     */
    createOrganizationCertificationsFromFile(params: CreateOrganizationCertificationsFromFileParams): APIPromise<CreateOrganizationCertificationsFromFileData> {
        const data = {
            s3_keys: params.s3_keys
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications/upload`, data);
    }
}
