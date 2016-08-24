// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Certification,
    CustomerCertification,
    DeleteCertificationParams,
    GetCertificationParams,
    UpdateCertificationParams,
    GetCertificationsParams,
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
     * @api {delete} /v1/certifications/:certification_id delete
     * @apiGroup Certifications
     * @apiName delete
     * @apiDescription Delete the given certification. This is a hard delete.
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certifications.delete({...})
     */
    delete(params: DeleteCertificationParams): APIPromise<[number]> {
        return this.client.delete(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {get} /v1/certifications/:certification_id get
     * @apiGroup Certifications
     * @apiName get
     * @apiDescription Get certification information.
     * @apiParam {Number} certification_id
     * @apiExample {js} Example:
     *             gigwalk.certifications.get({...})
     */
    get(params: GetCertificationParams): APIPromise<[Certification]> {
        return this.client.get(`/v1/certifications/${params.certification_id}`);
    }

    /**
     * @api {put} /v1/certifications/:certification_id update
     * @apiGroup Certifications
     * @apiName update
     * @apiDescription Update certification(s).
     * @apiParam {Number} certification_id
     * @apiParam {Object} certification
     * @apiExample {js} Example:
     *             gigwalk.certifications.update({...})
     */
    update(params: UpdateCertificationParams): APIPromise<[Certification]> {
        return this.client.put(`/v1/certifications/${params.certification_id}`, { ...params.certification });
    }

    /**
     * @api {get} /v1/certifications getAll
     * @apiGroup Certifications
     * @apiName getAll
     * @apiDescription Get all certifications available to the current user. Returns the current user organization's certificates and public certificates.
                       Capable of returning paginated results.
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.certifications.getAll({...})
     */
    getAll(params: GetCertificationsParams): APIPromise<Array<Certification>> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/certifications${query}`);
    }

    /**
     * @api {post} /v1/certifications create
     * @apiGroup Certifications
     * @apiName create
     * @apiDescription Create certification(s). If the certification already exists (checked by title), then existing certification(s) returned.
     * @apiParam {Object[]} certifications
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
     * @api {get} /v1/organizations/:organization_id/customer/:customer_id/certifications getAllForCustomer
     * @apiGroup Certifications
     * @apiName getAllForCustomer
     * @apiDescription Get certification information for a given customer. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.certifications.getAllForCustomer({...})
     */
    getAllForCustomer(params: GetAllCertificationsForCustomerParams): APIPromise<CustomerCertification> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications${query}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customer/:customer_id/certifications addToCustomer
     * @apiGroup Certifications
     * @apiName addToCustomer
     * @apiDescription Add certifications to a customer. A WORKER can use this endpoint only to add/remove SELF_CERTS certifications to themselves.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Number[]} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certifications.addToCustomer({...})
     */
    addToCustomer(params: AddRemoveCertificationsForCustomerParams): APIPromise<Array<[number, number]>> {
        const data = {
            action: 'add',
            certification_ids: params.certification_ids
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customer/:customer_id/certifications removeFromCustomer
     * @apiGroup Certifications
     * @apiName removeFromCustomer
     * @apiDescription Remove certifications from a customer. A WORKER can use this endpoint only to add/remove SELF_CERTS certifications to themselves.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Number[]} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certifications.removeFromCustomer({...})
     */
    removeFromCustomer(params: AddRemoveCertificationsForCustomerParams): APIPromise<Array<[number, number]>> {
        const data = {
            action: 'remove',
            certification_ids: params.certification_ids
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customer/${params.customer_id}/certifications`, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/certifications getAllForOrganization
     * @apiGroup Certifications
     * @apiName getAllForOrganization
     * @apiDescription Get certifications information for a given organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.certifications.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetAllCertificationsForOrganizationParams): APIPromise<Array<Certification>> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/certifications${query}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/certifications createForOrganization
     * @apiGroup Certifications
     * @apiName createForOrganization
     * @apiDescription Create certification(s) for a given organization. If the certification already exists (checked by title), then existing
                       certification(s) returned.
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} certifications
     * @apiExample {js} Example:
     *             gigwalk.certifications.createForOrganization({...})
     */
    createForOrganization(params: CreateCertificationsForOrganizationParams): APIPromise<Array<Certification>> {
        const data = {
            certifications: params.certifications
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/certifications updateForOrganization
     * @apiGroup Certifications
     * @apiName updateForOrganization
     * @apiDescription Create certification(s) for a given organization. If the certification already exists (checked by title), then existing
                       certification(s) returned.
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} certifications
     * @apiExample {js} Example:
     *             gigwalk.certifications.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateCertificationsForOrganizationParams): APIPromise<null> {
        const data = {
            certifications: params.certifications
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/certifications`, data);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/certifications/delete deleteForOrganization
     * @apiGroup Certifications
     * @apiName deleteForOrganization
     * @apiDescription Mark the certification(s) with the passed ids as deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Number[]} certification_ids
     * @apiExample {js} Example:
     *             gigwalk.certifications.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteCertificationsForOrganizationParams): APIPromise<null> {
        const data = {
            certification_ids: params.certification_ids
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications/delete`, data);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/certifications/upload uploadForOrganization
     * @apiGroup Certifications
     * @apiName uploadForOrganization
     * @apiDescription Create certifications from a file that has been uploaded to S3.
                       See https://docs.google.com/document/d/1Q14OKBva_2VhWdSQCbrwjq2Q8dVH6TwXgZ83jTGxHRc/ for more information about our file upload api.
     * @apiParam {Number} organization_id
     * @apiParam {String[]} s3_keys
     * @apiExample {js} Example:
     *             gigwalk.certifications.uploadForOrganization({...})
     */
    uploadForOrganization(params: UploadCertificationsForOrganizationParams): APIPromise<Array<number>> {
        const data = {
            s3_keys: params.s3_keys
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/certifications/upload`, data);
    }
}
