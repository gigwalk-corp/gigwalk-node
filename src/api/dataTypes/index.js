// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    DataType,
    SearchDataTypesWithFieldParams,
    SearchDataTypesParams,
    GetAllDataTypesParams,
    CreateDataTypeParams,
    GetDataTypeParams,
    UpdateDataTypeParams
} from './types';

export default class DataTypes extends Resource {

    /**
     * @api {post} /v2/organizations/:organization_id/search/data_types/filters searchWithField
     * @apiGroup DataTypes
     * @apiName searchWithField
     * @apiDescription Search all dataTypes for the given value being present in the given searchField.
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.searchWithField({...})
     */
    searchWithField(params: SearchDataTypesWithFieldParams): APIPromise<Array<DataType>> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/data_types/filters${query}`, data);
    }

    /**
     * @api {post} /v2/organizations/:organization_id/search/data_types search
     * @apiGroup DataTypes
     * @apiName search
     * @apiDescription Search all dataTypes for the given string.
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.search({...})
     */
    search(params: SearchDataTypesParams): APIPromise<Array<DataType>> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/data_types${query}`, data);
    }

    /**
     * @api {get} /v1/data_types getAll
     * @apiGroup DataTypes
     * @apiName getAll
     * @apiDescription Get dataType. Lists all dataTypes of an organization.
     * @apiParam {Number} [observation_target_type_id=0]
     * @apiParam {Number} [dashboard_visible=1]
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.getAll({...})
     */
    getAll(params: GetAllDataTypesParams): APIPromise<Array<DataType>> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            observation_target_type_id: (params.observation_target_type_id) ? params.observation_target_type_id : 0,
            dashboard_visible: (params.dashboard_visible) ? params.dashboard_visible : 1
        };

        return this.client.get(`/v1/data_types${query}`, data);
    }

    /**
     * @api {post} /v1/data_types create
     * @apiGroup DataTypes
     * @apiName create
     * @apiDescription Create a new dataType using the given info.
     * @apiParam {Object} dataType
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.create({...})
     */
    create(params: CreateDataTypeParams): APIPromise<[DataType]> {
        return this.client.post('/v1/data_types', { ...params.dataType });
    }

    /**
     * @api {get} /v1/data_types/:data_type_id get
     * @apiGroup DataTypes
     * @apiName get
     * @apiDescription Get dataType. Returns information about the specified dataType.
     * @apiParam {Number} data_type_id
     * @apiParam {Number} [observation_target_type_id=0]
     * @apiParam {Number} [dashboard_visible=1]
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.get({...})
     */
    get(params: GetDataTypeParams): APIPromise<[DataType]> {
        const query = this.stringForQueryObject(params.query);
        const data = {
            observation_target_type_id: (params.observation_target_type_id) ? params.observation_target_type_id : 0,
            dashboard_visible: (params.dashboard_visible) ? params.dashboard_visible : 1
        };

        return this.client.get(`/v1/data_types/${params.data_type_id}${query}`, data);
    }

    /**
     * @api {put} /v1/data_types/:data_type_id update
     * @apiGroup DataTypes
     * @apiName update
     * @apiDescription Modify dataType.
     * @apiParam {Number} data_type_id
     * @apiParam {Object} dataType
     * @apiExample {js} Example:
     *             gigwalk.dataTypes.update({...})
     */
    update(params: UpdateDataTypeParams): APIPromise<[DataType]> {
        return this.client.put(`/v1/data_types/${params.data_type_id}`, { ...params.dataType });
    }
}
