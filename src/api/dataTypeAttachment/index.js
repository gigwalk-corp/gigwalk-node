// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    DeleteAttachmentParams,
    CreateAttachmentParams
} from './types';

export default class DataTypeAttachment extends Resource {

    /**
     * @api {delete} /v1/data_types/:data_type_id/attachments delete
     * @apiGroup DataTypeAttachment
     * @apiName delete
     * @apiDescription Delete the attachment defined in the body of a dataType
     * @apiParam {Number} data_type_id
     * @apiParam {String} url
     * @apiExample {js} Example:
     *             gigwalk.dataTypeAttachment.delete({...})
     */
    delete(params: DeleteAttachmentParams): APIPromise<any> {
        const data = {
            url: params.url
        };

        return this.client.delete(`/v1/data_types/${params.data_type_id}/attachments`, { data });
    }

    /**
     * @api {post} /v1/data_types/:data_type_id/attachments create
     * @apiGroup DataTypeAttachment
     * @apiName create
     * @apiDescription Create a new dataTypeAttachment. Modifies the information of the specified dataType.
     * @apiParam {Number} data_type_id
     * @apiParam {Object} attachment
     * @apiExample {js} Example:
     *             gigwalk.dataTypeAttachment.create({...})
     */
    create(params: CreateAttachmentParams): APIPromise<any> {
        return this.client.post(`/v1/data_types/${params.data_type_id}/attachments`, { ...params.attachment });
    }
}
