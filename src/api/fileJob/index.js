// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    FileJob,
    GetFileJobParams
} from './types';

export default class OrganizationSearch extends Resource {

    /**
     * @api {get} /v1/file_job/:file_job_id get
     * @apiGroup OrganizationSearch
     * @apiName get
     * @apiDescription Get status of a fileJob.
     * @apiParam {Number} file_job_id
     * @apiExample {js} Example:
     *             gigwalk.organizationSearch.get({...})
     */
    get(params: GetFileJobParams): APIPromise<FileJob> {
        return this.client.get(`/v1/file_job/${params.file_job_id}`);
    }
}
