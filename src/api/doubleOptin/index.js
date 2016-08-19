// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetApplicationsForCurrentCustomerParams,
    GetApplicationsForCustomerParams,
    GetApplicationsParams,
    RemoveApplicationParams,
    GetAllApplicationsParams,
    CreateApplicationParams,
    BulkRemoveApplicationParams
} from './types';

export default class DoubleOptin extends Resource {

    /**
     * @api {get} /v1/ticket_applications getForCurrentCustomer
     * @apiGroup DoubleOptin
     * @apiName getForCurrentCustomer
     * @apiDescription Get all ticket applications that belong to current user.
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.getForCurrentCustomer({...})
     */
    getForCurrentCustomer(params: GetApplicationsForCurrentCustomerParams): APIPromise<any> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/ticket_applications${query}`);
    }

    /**
     * @api {get} /v1/customers/:customer_id/applications getForCustomer
     * @apiGroup DoubleOptin
     * @apiName getForCustomer
     * @apiDescription Get all ticket applications that belong to the querying customer_id. Requires platform admin permssions.
     * @apiParam {Number} customer_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.getForCustomer({...})
     */
    getForCustomer(params: GetApplicationsForCustomerParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/customers/${params.customer_id}/applications${query}`);
    }

    /**
     * @api {get} /v1/customers/:customer_id/applications/:ticket_id get
     * @apiGroup DoubleOptin
     * @apiName get
     * @apiDescription Get all candidates applying for this ticket.
     * @apiParam {Number} customer_id
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.get({...})
     */
    get(params: GetApplicationsParams): APIPromise<any> {
        return this.client.get(`/v1/customers/${params.customer_id}/applications/${params.ticket_id}`);
    }

    /**
     * @api {} DELETE /v1/tickets/:ticket_id/applicants remove
     * @apiGroup DoubleOptin
     * @apiName remove
     * @apiDescription Cancel the current users application for a ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.remove({...})
     */
    remove(params: RemoveApplicationParams): APIPromise<any> {
        return this.client.delete(`/v1/tickets/${params.ticket_id}/applicants`);
    }

    /**
     * @api {get} /v1/tickets/:ticket_id/applicants getAll
     * @apiGroup DoubleOptin
     * @apiName getAll
     * @apiDescription Get all candidates applying for this ticket.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.getAll({...})
     */
    getAll(params: GetAllApplicationsParams): APIPromise<any> {
        return this.client.get(`/v1/tickets/${params.ticket_id}/applicants`);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id/applicants apply
     * @apiGroup DoubleOptin
     * @apiName apply
     * @apiDescription Apply for a ticket with the current user.
     * @apiParam {Number} ticket_id
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.apply({...})
     */
    apply(params: CreateApplicationParams): APIPromise<any> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/applicants`);
    }

    /**
     * @api {put} /v1/tickets/:ticket_id/applicants bulkRemove
     * @apiGroup DoubleOptin
     * @apiName bulkRemove
     * @apiDescription Bulk remove double_optin applications for a ticket. Admin and above can withdraw others applications.
     * @apiParam {Number} ticket_id
     * @apiParam {Number[]} customer_ids
     * @apiExample {js} Example:
     *             gigwalk.doubleOptin.bulkRemove({...})
     */
    bulkRemove(params: BulkRemoveApplicationParams): APIPromise<any> {
        const data = {
            action: 'remove',
            customer_ids: params.customer_ids
        };

        return this.client.put(`/v1/tickets/${params.ticket_id}/applicants`, data);
    }
}
