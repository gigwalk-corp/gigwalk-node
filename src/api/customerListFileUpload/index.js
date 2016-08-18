// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    UploadCustomerListFileParams,
    GetCustomerListFileInfoForOrganizationParams,
    GetCustomerListFileInfoParams
} from './types';

export default class CustomerListFileUpload extends Resource {

    /**
     * @api {post} /v1/organizations/{organization_id}/customer/upload upload
     * @apiGroup CustomerListFileUpload
     * @apiName upload
     * @apiDescription Upload a customerList file.
     * @apiParam {Number} organization_id
     * @apiParam {Object} customer_list_file
     * @apiExample {js} Example:
     *             gigwalk.customerListFileUpload.upload({...})
     */
    upload(params: UploadCustomerListFileParams): APIPromise<any> {
        const data = {
            customer_list_file_name: params.customer_list_file.name,
            key: params.customer_list_file.key
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/customer/upload`, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customer/{customer_file_id}/upload getForOrganization
     * @apiGroup CustomerListFileUpload
     * @apiName getForOrganization
     * @apiDescription Get file information about the specified customerFileUpload.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_file_id
     * @apiExample {js} Example:
     *             gigwalk.customerListFileUpload.getForOrganization({...})
     */
    getForOrganization(params: GetCustomerListFileInfoForOrganizationParams): APIPromise<any> {
        return this.client.get(`/v1/organizations/${params.organization_id}/customer/${params.customer_file_id}/upload`);
    }

    /**
     * @api {get} /v1/customer/{customer_file_id}/upload get
     * @apiGroup CustomerListFileUpload
     * @apiName get
     * @apiDescription Get file information about the specified customerFileUpload.
     * @apiParam {Number} customer_file_id
     * @apiExample {js} Example:
     *             gigwalk.customerListFileUpload.get({...})
     */
    get(params: GetCustomerListFileInfoParams): APIPromise<any> {
        return this.client.get(`/v1/customer/${params.customer_file_id}/upload`);
    }
}
