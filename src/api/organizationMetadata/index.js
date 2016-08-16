// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    MetadataField,
    GetMetadataParams,
    CreateMetadataParams,
    UpdateMetadataParams,
    GetMetadataFieldParams,
    UpdateMetadataFieldParams
} from './types';

export default class OrganizationMetadata extends Resource {

    /**
     * @api {get} /v1/organizations/:organization_id/subscription_metadata_fields get
     * @apiGroup OrganizationMetadata
     * @apiName get
     * @apiDescription Get all metadata for an organization.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.organizationMetadata.get({...})
     */
    get(params: GetMetadataParams): APIPromise<Array<MetadataField>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/subscription_metadata_fields${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/subscription_metadata_fields create
     * @apiGroup OrganizationMetadata
     * @apiName create
     * @apiDescription Create organization metadata.
     * @apiParam {Number} organization_id
     * @apiParam {String} name
     * @apiExample {js} Example:
     *             gigwalk.organizationMetadata.create({...})
     */
    create(params: CreateMetadataParams): APIPromise<[MetadataField]> {
        const data = {
            name: params.name
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/subscription_metadata_fields`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/subscription_metadata_fields/:organization_metadata_field_id update
     * @apiGroup OrganizationMetadata
     * @apiName update
     * @apiDescription Update organization metadata field.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_metadata_field_id
     * @apiParam {String} name
     * @apiParam {Object} metadata
     * @apiExample {js} Example:
     *             gigwalk.organizationMetadata.update({...})
     */
    update(params: UpdateMetadataParams): APIPromise<[MetadataField]> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            name: params.name
        };

        return this.client.put(
                    `/v1/organizations/${params.organization_id}/subscription_metadata_fields/${params.organization_metadata_field_id}${queryString}`, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/subscription_metadata_fields/:organization_metadata_field_id/values getField
     * @apiGroup OrganizationMetadata
     * @apiName getField
     * @apiDescription Get organization metadata field.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_metadata_field_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.organizationMetadata.getField({...})
     */
    getField(params: GetMetadataFieldParams): APIPromise<[Object]> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(
                    `/v1/organizations/${params.organization_id}/subscription_metadata_fields/${params.organization_metadata_field_id}/values${queryString}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/subscription_metadata_fields/:organization_metadata_field_id/values updateField
     * @apiGroup OrganizationMetadata
     * @apiName updateField
     * @apiDescription Update organization metadata.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_metadata_field_id
     * @apiParam {Object} metadata
     * @apiExample {js} Example:
     *             gigwalk.organizationMetadata.updateField({...})
     */
    updateField(params: UpdateMetadataFieldParams): APIPromise<Array<[Object]>> {
        return this.client.put(`/v1/organizations/${params.organization_id}/subscription_metadata_fields/${params.organization_metadata_field_id}/values`,
                               { ...params.metadata });
    }
}
