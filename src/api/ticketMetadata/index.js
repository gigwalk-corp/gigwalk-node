// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetMetadataParams,
    CreateMetadataParams,
    UpdateMetadataParams,
    UpdateMetadataForOrganizationParams
} from './types';

export default class TicketMetadata extends Resource {

    /**
     * @api {get} /v1/tickets/:ticket_id/metadata get
     * @apiGroup TicketMetadata
     * @apiName get
     * @apiDescription Given a ticket_id, fetch its metadata.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.ticketMetadata.get({...})
     */
    get(params: GetMetadataParams): APIPromise<Object> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/tickets/${params.ticket_id}/metadata${queryString}`);
    }

    /**
     * @api {post} /v1/tickets/:ticket_id/metadata create
     * @apiGroup TicketMetadata
     * @apiName create
     * @apiDescription Create metadata for the given ticket. Use an array of key-value pairs to add ticket metadata.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} metadata
     * @apiExample {js} Example:
     *             gigwalk.ticketMetadata.create({...})
     */
    create(params: CreateMetadataParams): APIPromise<Object> {
        return this.client.post(`/v1/tickets/${params.ticket_id}/metadata`, { ...params.metadata });
    }

    /**
     * @api {put} /v1/tickets/:ticket_id/metadata update
     * @apiGroup TicketMetadata
     * @apiName update
     * @apiDescription Update metadata for the given ticket. Use an array of key-value pairs to update ticket metadata.
     * @apiParam {Number} ticket_id
     * @apiParam {Object} metadata
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.ticketMetadata.update({...})
     */
    update(params: UpdateMetadataParams): APIPromise<Object> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.put(`/v1/tickets/${params.ticket_id}/metadata${queryString}`, { ...params.metadata });
    }

    /**
     * @api {put} /v1/organizations/:organization_id/tickets/:ticket_id updateForOrganization
     * @apiGroup TicketMetadata
     * @apiName updateForOrganization
     * @apiDescription Update metadata for the given ticket. Use an array of key-value pairs to update ticket metadata.
     * @apiParam {Number} organization_id
     * @apiParam {Number} ticket_id
     * @apiParam {Object} metadata
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.ticketMetadata.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateMetadataForOrganizationParams): APIPromise<Object> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.put(`/v1/organizations/${params.organization_id}/tickets/${params.ticket_id}${queryString}`, { ...params.metadata });
    }
}
