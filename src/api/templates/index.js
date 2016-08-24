// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Template,
    GetAllTemplatesParams,
    BulkCreateTemplateParams,
    DeleteTemplateParams,
    GetTemplateParams,
    UpdateTemplateParams
} from './types';

export default class Templates extends Resource {

    /**
     * @api {get} /v1/templates getAll
     * @apiGroup Templates
     * @apiName getAll
     * @apiDescription Get all templates. If platform admin, view all active templates. Otherwise, view an organizations active templates.
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.templates.getAll({...})
     */
    getAll(params: GetAllTemplatesParams): APIPromise<Array<Template>> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/templates${query}`);
    }

    /**
     * @api {post} /v1/templates bulkCreate
     * @apiGroup Templates
     * @apiName bulkCreate
     * @apiDescription Create new template(s).
     * @apiParam {Object} template
     * @apiExample {js} Example:
     *             gigwalk.templates.bulkCreate({...})
     */
    bulkCreate(params: BulkCreateTemplateParams): APIPromise<[Template]> {
        const data = {
            templates: params.templates
        };

        return this.client.post('/v1/templates', data);
    }

    /**
     * @api {delete} /v1/templates/:template_id delete
     * @apiGroup Templates
     * @apiName delete
     * @apiDescription Delete template. Template is made INACTIVE, acts as soft delete.
     * @apiParam {Number} template_id
     * @apiExample {js} Example:
     *             gigwalk.templates.delete({...})
     */
    delete(params: DeleteTemplateParams): APIPromise<[number]> {
        return this.client.delete(`/v1/templates/${params.template_id}`);
    }

    /**
     * @api {get} /v1/templates/:template_id get
     * @apiGroup Templates
     * @apiName get
     * @apiDescription Get information about the specified template.
     * @apiParam {Number} template_id
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.templates.get({...})
     */
    get(params: GetTemplateParams): APIPromise<[Template]> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/templates/${params.template_id}${query}`);
    }

    /**
     * @api {put} /v1/templates/:template_id update
     * @apiGroup Templates
     * @apiName update
     * @apiDescription Update template.
     * @apiParam {Number} template_id
     * @apiParam {Object} template
     * @apiExample {js} Example:
     *             gigwalk.templates.update({...})
     */
    update(params: UpdateTemplateParams): APIPromise<[Template]> {
        return this.client.put(`/v1/templates/${params.template_id}`, { ...params.template });
    }
}
