// @flow
import Resource from '../resource';
import type { APIPromise, ESPromise } from '../resource';
import type {
    Customer,
    ESCustomer,
    DeleteCustomerByEmailParams,
    GetCustomerByEmailParams,
    UpdateCustomerByEmailParams,
    DeleteCustomerByIdParams,
    GetCustomerByIdParams,
    UpdateCustomerByIdParams,
    GetAllCustomersForOrganizationParams,
    UpdateCustomersForOrganizationParams,
    DeleteCustomersForOrganizationParams,
    UpdateCustomerParams,
    SearchCustomersParams
} from './types';

export default class Customers extends Resource {
    /**
     * @api {delete} /v1/organizations/:organization_id/customers/:customer_email deleteByEmail
     * @apiGroup Customers
     * @apiName deleteByEmail
     * @apiDescription The customers status is set to DELETED. The customers metadata is hard deleted.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteByEmail({...})
     */
    deleteByEmail(params: DeleteCustomerByEmailParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers/:customer_email getByEmail
     * @apiGroup Customers
     * @apiName getByEmail
     * @apiDescription If the customer exists, return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {Number[]} require_cert_ids
     * @apiParam {Number[]} exclude_cert_ids
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.customers.getByEmail({...})
     */
    getByEmail(params: GetCustomerByEmailParams): APIPromise<[Customer]> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            require_cert_ids: (params.require_cert_ids) ? params.require_cert_ids : [],
            exclude_cert_ids: (params.exclude_cert_ids) ? params.exclude_cert_ids : []
        };

        return this.client.get(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}${query}`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers/:customer_email updateByEmail
     * @apiGroup Customers
     * @apiName updateByEmail
     * @apiDescription Modifies customer info identified by customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateByEmail({...})
     */
    updateByEmail(params: UpdateCustomerByEmailParams): APIPromise<[Customer]> {
        return this.client.put(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}`, { ...params.customer });
    }

    /**
     * @api {delete} /v1/organizations/:organization_id/customers/:customer_id deleteById
     * @apiGroup Customers
     * @apiName deleteById
     * @apiDescription The customers status is set to DELETED. The customers metadata is hard deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteById({...})
     */
    deleteById(params: DeleteCustomerByIdParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers/:customer_id getById
     * @apiGroup Customers
     * @apiName getById
     * @apiDescription If the customer exists, return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.customers.getById({...})
     */
    getById(params: GetCustomerByIdParams): APIPromise<[Customer]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}${query}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers/:customer_id updateById
     * @apiGroup Customers
     * @apiName updateById
     * @apiDescription Modifies customer information identified by customer_id.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateById({...})
     */
    updateById(params: UpdateCustomerByIdParams): APIPromise<[Customer]> {
        return this.client.put(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}`, { ...params.customer });
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers getAllForOrganization
     * @apiGroup Customers
     * @apiName getAllForOrganization
     * @apiDescription Return information about all customers of an organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Number[]} require_cert_ids
     * @apiParam {Number[]} exclude_cert_ids
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.customers.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetAllCustomersForOrganizationParams): APIPromise<Array<Customer>> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            require_cert_ids: (params.require_cert_ids) ? params.require_cert_ids : [],
            exclude_cert_ids: (params.exclude_cert_ids) ? params.exclude_cert_ids : []
        };

        return this.client.get(`/v1/organizations/${params.organization_id}/customers${query}`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers updateForOrganization
     * @apiGroup Customers
     * @apiName updateForOrganization
     * @apiDescription Modify information of customer(s) identified by customer_email. Soft delete multiple customers by setting DELETED status.
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateCustomersForOrganizationParams): APIPromise<Array<Customer>> {
        const data = {
            action: 'UPDATE',
            customers: params.customers
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customers`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers bulkDeleteForOrganization
     * @apiGroup Customers
     * @apiName bulkDeleteForOrganization
     * @apiDescription Delete customer(s).
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.bulkDeleteForOrganization({...})
     */
    bulkDeleteForOrganization(params: DeleteCustomersForOrganizationParams): APIPromise<Array<number>> {
        const data = {
            action: 'REMOVE',
            customers: params.customers
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customers`, data);
    }

    /**
     * @api {get} /v1/customer get
     * @apiGroup Customers
     * @apiName get
     * @apiDescription Return current customer's information.
     * @apiExample {js} Example:
     *             gigwalk.customers.get({...})
     */
    get(): APIPromise<Array<Customer>> {
        return this.client.get('/v1/customer');
    }

    /**
     * @api {put} /v1/customer update
     * @apiGroup Customers
     * @apiName update
     * @apiDescription Modify current users information.
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.update({...})
     */
    update(params: UpdateCustomerParams): APIPromise<[Customer]> {
        return this.client.put('/v1/customer', { ...params.customer });
    }

    /**
     * @api {post} /v1/tickets/search/customers search
     * @apiGroup Customers
     * @apiName search
     * @apiDescription Return all the customers related with the given group(s) or with the groups related with the ticket(s). Also checks if the customers
                       have availability to execute given tickets. Capable of returning paginated results.
     * @apiParam {Number[]} ticket_ids
     * @apiParam {Number[]} [group_ids]
     * @apiParam {Number[]} [required_certifications]
     * @apiParam {String} [q]
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.customers.search({...})
     */
    search(params: SearchCustomersParams): ESPromise<ESCustomer> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            ticket_ids: params.ticket_ids,
            group_ids: (params.group_ids) ? params.group_ids : [],
            required_certifications: (params.required_certifications) ? params.required_certifications : [],
            q: (params.q) ? params.q : '',
        };

        return this.client.post(`/v1/tickets/search/customers${query}`, data);
    }
}
