// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Certification,
    CustomerCertification,
    DeleteCertificationParams,
    GetCertificationParams,
    UpdateCertificationParams,
    CreateCertificationsParams,
    GetAllCertificationsForCustomerParams,
    AddRemoveCertificationsForCustomerParams,
    GetAllCertificationsForOrganizationParams,
    CreateCertificationsForOrganizationParams,
    UpdateCertificationsForOrganizationParams,
    DeleteCertificationsForOrganizationParams,
    UploadCertificationsForOrganizationParams
} from './types';


export default class Certifications extends Resource {
    /**
     * @api {delete} /v1/certifications/{certification_id}
     * @apiName DeleteCertification
     * @apiDescription Delete given cert This is a hard delete
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certifications.delete({...})
     */
    delete(params: DeleteCertificationParams): APIPromise<[number]> {
        return this.client.delete(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {get} /v1/certifications/{certification_id}
     * @apiName GetCertification
     * @apiDescription Get Certification info. Return data fields (id, org_id, description, title, type, state).
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certifications.get({...})
     */
    get(params: GetCertificationParams): APIPromise<[Certification]> {
        return this.client.get(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {put} /v1/certifications/{certification_id}
     * @apiName UpdateCertification
     * @apiDescription Update Certification(s) JSON payload can have (description, title, type, state).
     * @apiParam {Number} certification_id
     * @apiParam {CertificationTemplate} certification
     * @apiExample {js} Example:
     *             gigwalk.certifications.update({...})
     */
    update(params: UpdateCertificationParams): APIPromise<[Certification]> {
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
     *             gigwalk.certifications.getAll({...})
     */
    getAll(): APIPromise<Array<Certification>> {
        return this.client.get('/v1/certifications');
    }

    /**
     * @api {post} /v1/certifications
     * @apiName CreateCertifications
     * @apiDescription Create Certification(s) JSON payload can have (description, title, type, state).
                       If the cert already exists (check by title), then we return existing cert(s)
     * @apiParam {Array<CertificationTemplate>} certifications
     * @apiExample {js} Example:
     *             gigwalk.certifications.create({...})
     */
    create(params: CreateCertificationsParams): APIPromise<Array<Certification>> {
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
     *             gigwalk.certifications.getForCustomer({...})
     */
    getForCustomer(params: GetAllCertificationsForCustomerParams): APIPromise<CustomerCertification> {
        const url = `/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName UpdateCustomerCertifications
     * @apiDescription Add certifications to a customer. A customer WORKER can use this
     *                 endpoint only to add SELF_CERTS certifications to himself
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {String} action
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certifications.addToCustomer({...})
     */
    addToCustomer(params: AddRemoveCertificationsForCustomerParams): APIPromise<Array<[number, number]>> {
        const url = `/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`;
        const data = {
            action: 'add',
            certification_ids: params.certification_ids
        };

        return this.client.put(url, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customer/{customer_id}/certifications
     * @apiName UpdateCustomerCertifications
     * @apiDescription Remove certifications for a customer. A customer WORKER can use this
     *                 endpoint only to remove SELF_CERTS certifications from himself
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {String} action
     * @apiParam {Array<number>} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certifications.removeFromCustomer({...})
     */
    removeFromCustomer(params: AddRemoveCertificationsForCustomerParams): APIPromise<Array<[number, number]>> {
        const url = `/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`;
        const data = {
            action: 'remove',
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
     *             gigwalk.certifications.getForOrganization({...})
     */
    getForOrganization(params: GetAllCertificationsForOrganizationParams): APIPromise<Array<Certification>> {
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
     *             gigwalk.certifications.createForOrganization({...})
     */
    createForOrganization(params: CreateCertificationsForOrganizationParams): APIPromise<Array<Certification>> {
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
     *             gigwalk.certifications.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateCertificationsForOrganizationParams): APIPromise<null> {
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
     *             gigwalk.certifications.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteCertificationsForOrganizationParams): APIPromise<null> {
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
     *             gigwalk.certifications.uploadForOrganization({...})
     */
    uploadForOrganization(params: UploadCertificationsForOrganizationParams): APIPromise<Array<number>> {
        const url = `/v1/organizations/${params.organization_id}/certifications/upload`;
        const data = {
            s3_keys: params.s3_keys
        };

        return this.client.post(url, data);
    }
}
