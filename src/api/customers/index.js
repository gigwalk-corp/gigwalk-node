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
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteByEmail({...})
     */
    deleteByEmail(params: DeleteCustomerByEmailParams): APIPromise<[number]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;
        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers/:customer_email getByEmail
     * @apiGroup Customers
     * @apiName getByEmail
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.getByEmail({...})
     */
    getByEmail(params: GetCustomerByEmailParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers/:customer_email updateByEmail
     * @apiGroup Customers
     * @apiName updateByEmail
     * @apiDescription Modifies the info of the customer identified by customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateByEmail({...})
     */
    updateByEmail(params: UpdateCustomerByEmailParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {delete} /v1/organizations/:organization_id/customers/:customer_id deleteById
     * @apiGroup Customers
     * @apiName deleteById
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteById({...})
     */
    deleteById(params: DeleteCustomerByIdParams): APIPromise<[number]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;
        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers/:customer_id getById
     * @apiGroup Customers
     * @apiName getById
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getById({...})
     */
    getById(params: GetCustomerByIdParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers/:customer_id updateById
     * @apiGroup Customers
     * @apiName updateById
     * @apiDescription Modifies the info of the customer identified by customer_id
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateById({...})
     */
    updateById(params: UpdateCustomerByIdParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/customers getAllByOrganization
     * @apiGroup Customers
     * @apiName getAllByOrganization
     * @apiDescription Return info about all customers of the organization
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getByOrganization({...})
     */
    getForOrganization(params: GetAllCustomersForOrganizationParams): APIPromise<Array<Customer>> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers bulkUpdate
     * @apiGroup Customers
     * @apiName updateForOrganization
     * @apiDescription Modifies the info of multiple customers identified by customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateCustomersForOrganizationParams): APIPromise<Array<Customer>> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        const data = {
            action: 'UPDATE',
            customers: params.customers
        };

        return this.client.put(url, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/customers deleteForOrganization
     * @apiGroup Customers
     * @apiName deleteForOrganization
     * @apiDescription Delete multiple customers (by setting DELETED status)
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteCustomersForOrganizationParams): APIPromise<Array<number>> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        const data = {
            action: 'REMOVE',
            customers: params.customers
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/customer get
     * @apiGroup Customers
     * @apiName get
     * @apiDescription Return the current customer's info.
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
     * @apiDescription Modify the current customers's info.
     * @apiParam {Object} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.update({...})
     */
    update(params: UpdateCustomerParams): APIPromise<[Customer]> {
        const data = params.customer;
        return this.client.put('/v1/customer', data);
    }

    /**
     * @api {post} /v1/tickets/search/customers search
     * @apiGroup Customers
     * @apiName search
     * @apiDescription Return all the customers related with the given groups or with the groups related with the tickets. Also checks if the customers
     have availability and capacity to execute the given tickets
     * @apiParam {Number[]} ticket_ids
     * @apiExample {js} Example:
     *             gigwalk.customers.search({...})
     */
    // todo: Move to Search API? Returns ElasticSearch results
    search(params: SearchCustomersParams): ESPromise<ESCustomer> {
        const data = {
            ticket_ids: params.ticket_ids
        };

        return this.client.post('/v1/tickets/search/customers', data);
    }
}
