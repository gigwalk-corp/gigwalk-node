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
    GetAllCustomersByOrganizationParams,
    BulkUpdateCustomersParams,
    UpdateCustomerParams,
    SearchCustomersParams
} from './types';

export default class Customers extends Resource {
    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_email}
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
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_email}
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
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName updateByEmail
     * @apiDescription Modifies the info of the customer identified by the customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateByEmail({...})
     */
    updateByEmail(params: UpdateCustomerByEmailParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_id}
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
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_id}
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
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName updateById
     * @apiDescription Modifies the info of the customer identified by the customer_id
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateById({...})
     */
    updateById(params: UpdateCustomerByIdParams): APIPromise<[Customer]> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers
     * @apiName getAllByOrganization
     * @apiDescription Return info about all customers of the organization
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getAllByOrganization({...})
     */
    getAllByOrganization(params: GetAllCustomersByOrganizationParams): APIPromise<Array<Customer>> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers
     * @apiName bulkUpdate
     * @apiDescription Modifies the info of multiple customers identified by the customer_email. Delete multiple customers (by setting DELETED status)
     * @apiParam {Number} organization_id
     * @apiParam {String} organization_id
     * @apiParam {Array<CustomerTemplate>} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.bulkUpdate({...})
     */
    bulkUpdate(params: BulkUpdateCustomersParams): APIPromise<Array<Customer> | Array<number>> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        const data = {
            action: params.action,
            customers: params.customers
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/customer
     * @apiName get
     * @apiDescription Return current customer's info Shortcut for returning OrgCustomerAPIResource with current_user's org_id and current user's id as
     the customer_id. Returns (id, first_name, last_name, photo_url, address_line_1 and 2, phonenumber, email, role, customer_status,
     org, group_memberships, metadata, max/ideal_hours_week, home_lat/long, auth_token)
     * @apiExample {js} Example:
     *             gigwalk.customers.get({...})
     */
    get(): APIPromise<Array<Customer>> {
        return this.client.get('/v1/customer');
    }

    /**
     * @api {put} /v1/customer
     * @apiName update
     * @apiDescription Modify current_user's info Shortcut for the put method of OrgCustomerAPIResource with current_user's org_id and current user's id
     as the customer_id.
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.update({...})
     */
    update(params: UpdateCustomerParams): APIPromise<[Customer]> {
        const data = params.customer;
        return this.client.put('/v1/customer', data);
    }

    /**
     * @api {post} /v1/tickets/search/customers
     * @apiName search
     * @apiDescription Return all the customers related with the given groups or with the groups related with the tickets Also checks if the customers
     have availability and capacity to execute the given tickets
     * @apiParam {Array<Number>} ticket_ids
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
