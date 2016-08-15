// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type CustomerTemplate = {
    customer_id?: number,
    email?: string,
    first_name?: string,
    last_name?: string,
    photo_url?: string,
    address_line_1?: string,
    address_line_2?: string,
    phonenumber?: string,
    customer_status?: string,
    max_hours_week?: number,
    ideal_hours_week?: number,
    home_latitude?: number,
    home_longitude?: number,
    certifications?: Array<number>
}

type DeleteCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

type GetCustomerWithEmailQuery = {
    customer_roles?: string
}

type GetCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string,
    require_cert_ids?: Array<number>,
    exclude_cert_ids?: Array<number>,
    query?: GetCustomerWithEmailQuery
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

type GetCustomerWithIDQuery = {
    customer_roles?: string
}

type GetCustomerWithIDParams = {
    organization_id: number,
    customer_id: number,
    query?: GetCustomerWithIDQuery
}

type UpdateCustomerWithIDParams = {
    organization_id: number,
    customer_id: number,
    customer: CustomerTemplate
}

type GetOrganizationCustomersQuery = {
    offset?: number,
    limit?: number,
    order_by?: string,
    order_dir?: 'ASCENDING' | 'DESCENDING',
    customer_roles?: string
}

type GetOrganizationCustomersParams = {
    organization_id: number,
    require_cert_ids?: Array<number>,
    exclude_cert_ids?: Array<number>,
    query?: GetOrganizationCustomersQuery
}

type UpdateOrganizationCustomersParams = {
    organization_id: number,
    action: string,
    customers: Array<CustomerTemplate>
}

type UpdateCustomerParams = {
    customer: CustomerTemplate
}

type SearchCustomersQuery = {
    size?: number,
    from?: number
}

type SearchCustomersParams = {
    ticket_ids: Array<number>,
    group_ids?: Array<number>,
    required_certifications?: Array<number>,
    q?: string,
    query?: SearchCustomersQuery
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
    organization: Object,
    metadata: Object
}

type searchResultsSchema = {
    took: number,
    timed_out: boolean,
    _shards: {
        successful: number,
        failed: number,
        total: number
    },
    hits: {
        total: number,
        max_score: number,
        hits: Array<{
            _score: number,
            _id: number,
            _type: string,
            _index: string,
            _source: Object
        }>
    }
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

type SearchCustomersData = [
    searchResultsSchema
]

export default class Customers extends Resource {
    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName deleteCustomerWithEmail
     * @apiDescription The customers status is set to DELETED. The customers metadata is hard deleted.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithEmail({...})
     */
    deleteCustomerWithEmail(params: DeleteCustomerWithEmailParams): APIPromise<DeleteCustomerWithEmailData> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}`);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName getCustomerWithEmail
     * @apiDescription Get customer.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {Array<Number>} require_cert_ids
     * @apiParam {Array<Number>} exclude_cert_ids
     * @apiParam {GetCustomerWithEmailQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithEmail({...})
     */
    getCustomerWithEmail(params: GetCustomerWithEmailParams): APIPromise<GetCustomerWithEmailData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            require_cert_ids: (params.require_cert_ids) ? params.require_cert_ids : [],
            exclude_cert_ids: (params.exclude_cert_ids) ? params.exclude_cert_ids : []
        };

        return this.client.get(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}${queryString}`, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName updateCustomer
     * @apiDescription Modifies customer information identified by customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomerWithEmail(params: UpdateCustomerWithEmailParams): APIPromise<UpdateCustomerWithEmailData> {
        return this.client.put(`/v1/organizations/${params.organization_id}/customers/${params.customer_email}`, { ...params.customer });
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName deleteCustomerWithID
     * @apiDescription The customers status is set to DELETED. The customers metadata is hard deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithID({...})
     */
    deleteCustomerWithID(params: DeleteCustomerWithIDParams): APIPromise<DeleteCustomerWithIDData> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}`);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName getCustomerWithID
     * @apiDescription Get customer.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {GetCustomerWithIDQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithID({...})
     */
    getCustomerWithID(params: GetCustomerWithIDParams): APIPromise<GetCustomerWithIDData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}${queryString}`);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName updateCustomerWithID
     * @apiDescription Modifies customer information identified by customer_id.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomerWithID({...})
     */
    updateCustomerWithID(params: UpdateCustomerWithIDParams): APIPromise<UpdateCustomerWithIDData> {
        return this.client.put(`/v1/organizations/${params.organization_id}/customers/${params.customer_id}`, { ...params.customer });
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers
     * @apiName getOrganizationCustomers
     * @apiDescription Return information about all customers of an organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Number>} require_cert_ids
     * @apiParam {Array<Number>} exclude_cert_ids
     * @apiParam {GetOrganizationCustomersQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationCustomers({...})
     */
    getOrganizationCustomers(params: GetOrganizationCustomersParams): APIPromise<GetOrganizationCustomersData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            require_cert_ids: (params.require_cert_ids) ? params.require_cert_ids : [],
            exclude_cert_ids: (params.exclude_cert_ids) ? params.exclude_cert_ids : []
        };

        return this.client.get(`/v1/organizations/${params.organization_id}/customers${queryString}`, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers
     * @apiName updateOrganizationCustomers
     * @apiDescription Modify information of customer(s) identified by customer_email. Soft delete multiple customers by setting DELETED status.
     * @apiParam {Number} organization_id
     * @apiParam {String} organization_id
     * @apiParam {Array<CustomerTemplate>} customers
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationCustomers({...})
     */
    updateOrganizationCustomers(params: UpdateOrganizationCustomersParams): APIPromise<UpdateOrganizationCustomersData> {
        const data = {
            action: params.action,
            customers: params.customers
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/customers`, data);
    }

    /**
     * @api {get} /v1/customer
     * @apiName getCustomer
     * @apiDescription Return current customer's information.
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomer({...})
     */
    getCustomer(): APIPromise<GetCustomerData> {
        return this.client.get('/v1/customer');
    }

    /**
     * @api {put} /v1/customer
     * @apiName updateCustomer
     * @apiDescription Modify current users information.
     * @apiParam {CustomerTemplate} customer
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomer(params: UpdateCustomerParams): APIPromise<UpdateCustomerData> {
        return this.client.put('/v1/customer', { ...params.customer });
    }

    /**
     * @api {post} /v1/tickets/search/customers
     * @apiName searchCustomers
     * @apiDescription Return all the customers related with the given group(s) or with the groups related with the ticket(s). Also checks if the customers
                       have availability to execute given tickets. Capable of returning paginated results.
     * @apiParam {Array<Number>} ticket_ids
     * @apiParam {Array<Number>} group_ids
     * @apiParam {Array<Number>} required_certifications
     * @apiParam {String} q
     * @apiParam {SearchCustomersQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchCustomers({...})
     */
    searchCustomers(params: SearchCustomersParams): APIPromise<SearchCustomersData> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            ticket_ids: params.ticket_ids,
            group_ids: (params.group_ids) ? params.group_ids : [],
            required_certifications: (params.required_certifications) ? params.required_certifications : [],
            q: (params.q) ? params.q : '',
        };

        return this.client.post(`/v1/tickets/search/customers${queryString}`, data);
    }
}
