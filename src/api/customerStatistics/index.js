// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetStatisticsByIDParams,
    GetStatisticsByEmailParams,
    GetStatisticsParams,
    GetStatisticsByTicketParams
} from './types';

export default class CustomerStatistics extends Resource {

    /**
     * @api {get} /v1/admin/customerstats/:customer_id getByID
     * @apiGroup CustomerStatistics
     * @apiName getByID
     * @apiDescription Get information about the work history of a customer and prospective tickets. Platform admin access only.
                       Returns rendered HTML using jinja templates.
     * @apiParam {Number} customer_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.customerStatistics.getByID({...})
     */
    getByID(params: GetStatisticsByIDParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/admin/customerstats/${params.customer_id}${query}`);
    }

    /**
     * @api {get} /v1/admin/customerstats/:email getByEmail
     * @apiGroup CustomerStatistics
     * @apiName getByEmail
     * @apiDescription Get information about the work history of a customer and prospective tickets. Platform admin access only.
                       Returns rendered HTML using jinja templates.
     * @apiParam {String} email
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.customerStatistics.getByEmail({...})
     */
    getByEmail(params: GetStatisticsByEmailParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/admin/customerstats/${params.email}${query}`);
    }

    /**
     * @api {get} /v1/admin/customers_tickets/ get
     * @apiGroup CustomerStatistics
     * @apiName get
     * @apiDescription Get information about the work history of a customer and prospective tickets. Platform admin access only.
                       Returns rendered HTML using jinja templates.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.customerStatistics.get({...})
     */
    get(params: GetStatisticsParams): APIPromise<any> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/admin/customers_tickets/${query}`);
    }

    /**
     * @api {get} /v1/tickets/:ticket_id/customers/location_search getByTicket
     * @apiGroup CustomerStatistics
     * @apiName getByTicket
     * @apiDescription Get info about tickets' owners.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.customerStatistics.getByTicket({...})
     */
    getByTicket(params: GetStatisticsByTicketParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}/customers/location_search${query}`);
    }
}
