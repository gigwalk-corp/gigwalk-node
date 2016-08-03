// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type CustomerTemplate = {
  email: string,
  first_name: string,
  last_name: string,
  photo_url: string,
  address_line_1: string,
  address_line_2: string,
  phonenumber: string,
  customer_status: string,
  max_hours_week: number,
  ideal_hours_week: number,
  home_latitude: number,
  home_longitude: number,
  certifications: Array<number>
}

type DeleteCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

type GetCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

type UpdateCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string,
    customer: CustomerTemplate
}

type DeleteCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

type GetCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

type UpdateCustomerWithIDParams = {
    organization_id: number,
    customer_id: number,
    customer: CustomerTemplate
}

type GetOrganizationCustomersParams = {
    organization_id: number
}

type UpdateOrganizationCustomersParams = {
    organization_id: number,
    action: string,
    customers: Array<CustomerTemplate>
}

type UpdateCustomerParams = {
    customer: CustomerTemplate
}

type SearchCustomersParams = {
  ticket_ids: Array<number>
}

type CustomerSchema = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    role: string,
    phonenumber: string,
    address_line_1: string,
    address_line_2: string,
    photo_url: string,
    ideal_hours_week: number,
    max_hours_week: number,
    rating_score: number,
    customer_status: string,
    home_latitude: number,
    home_longitude: number,
    date_last_auth: string,
    certifications: Array<{
        id: number
    }>,
    group_memberships: Array<{
        group: string,
        role: string,
        group_id: number
    }>,
    organization: {
        organization_name: string,
        id: number,
        cannot_opt_out: boolean,
        vertical_type: string,
        core_customer_account: string,
        core_private_workforce: string,
        needs_core: boolean
    },
    metadata: Object
}

type DeleteCustomerWithEmailData = [
    number
]

type GetCustomerWithEmailData = [
    CustomerSchema
]

type UpdateCustomerWithEmailData = [
    CustomerSchema
]

type DeleteCustomerWithIDData = [
    number
]

type GetCustomerWithIDData = [
    CustomerSchema
]

type UpdateCustomerWithIDData = [
    CustomerSchema
]

type GetOrganizationCustomersData = Array<CustomerSchema>

type UpdateOrganizationCustomersData = Array<CustomerSchema> // NEED TO CHECK

type GetCustomerData = [
    CustomerSchema
]

type UpdateCustomerData = [ // NEED TO CHECK
    CustomerSchema
]

type SearchCustomersData = Array<CustomerSchema>

export default class Customers extends Resource {
    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName deleteCustomerWithEmail
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithEmail({...})
     */
    deleteCustomerWithEmail(params: DeleteCustomerWithEmailParams): APIPromise<DeleteCustomerWithEmailData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;

        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName getCustomerWithEmail
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithEmail({...})
     */
    getCustomerWithEmail(params: GetCustomerWithEmailParams): APIPromise<GetCustomerWithEmailData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;

        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName updateCustomer
     * @apiDescription Modifies the info of the customer identified by the customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomerWithEmail(params: UpdateCustomerWithEmailParams): APIPromise<UpdateCustomerWithEmailData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_email}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName deleteCustomerWithID
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithID({...})
     */
    deleteCustomerWithID(params: DeleteCustomerWithIDParams): APIPromise<DeleteCustomerWithIDData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;

        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName getCustomerWithID
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithID({...})
     */
    getCustomerWithID(params: GetCustomerWithIDParams): APIPromise<GetCustomerWithIDData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;

        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName updateCustomerWithID
     * @apiDescription Modifies the info of the customer identified by the customer_id
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomerWithID({...})
     */
    updateCustomerWithID(params: UpdateCustomerWithIDParams): APIPromise<UpdateCustomerWithIDData> {
        const url = `/v1/organizations/${params.organization_id}/customers/${params.customer_id}`;
        const data = params.customer;

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers
     * @apiName getOrganizationCustomers
     * @apiDescription Return info about all customers of the organization
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationCustomers({...})
     */
    getOrganizationCustomers(params: GetOrganizationCustomersParams): APIPromise<GetOrganizationCustomersData> {
        const url = `/v1/organizations/${params.organization_id}/customers`;

        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers
     * @apiName updateOrganizationCustomers
     * @apiDescription Modifies the info of multiple customers identified by the customer_email. Delete multiple customers (by setting DELETED status)
     * @apiParam {Number} organization_id
     * @apiParam {String} organization_id
     * @apiParam {Array<CustomerTemplate>} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationCustomers({...})
     */
    updateOrganizationCustomers(params: UpdateOrganizationCustomersParams): APIPromise<UpdateOrganizationCustomersData> {
        const url = `/v1/organizations/${params.organization_id}/customers`;
        const data = {
            action: params.action,
            customers: params.customers
        };

        return this.client.put(url, data);
    }

    /**
     * @api {get} /v1/customer
     * @apiName getCustomer
     * @apiDescription Return current customer's info Shortcut for returning OrgCustomerAPIResource with current_user's org_id and current user's id as
                       the customer_id. Returns (id, first_name, last_name, photo_url, address_line_1 and 2, phonenumber, email, role, customer_status,
                       org, group_memberships, metadata, max/ideal_hours_week, home_lat/long, auth_token)
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomer({...})
     */
    getCustomer(): APIPromise<GetCustomerData> {
        return this.client.get('/v1/customer');
    }

    /**
     * @api {put} /v1/customer
     * @apiName updateCustomer
     * @apiDescription Modify current_user's info Shortcut for the put method of OrgCustomerAPIResource with current_user's org_id and current user's id
                       as the customer_id.
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomer(params: UpdateCustomerParams): APIPromise<UpdateCustomerData> {
        const data = params.customer;

        return this.client.put('/v1/customer', data);
    }

    /**
     * @api {post} /v1/tickets/search/customers
     * @apiName searchCustomers
     * @apiDescription Return all the customers related with the given groups or with the groups related with the tickets Also checks if the customers
                       have availability and capacity to execute the given tickets
     * @apiParam {Array<Number>} ticket_ids
     * @apiExample {js} Example:
     *             gigwalk.customers.searchCustomers({...})
     */
    searchCustomers(params: SearchCustomersParams): APIPromise<SearchCustomersData> {
        const data = {
            ticket_ids: params.ticket_ids
        };

        return this.client.post('/v1/tickets/search/customers', data);
    }
}
