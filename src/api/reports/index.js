// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetReportParams
} from './types';

export default class Reports extends Resource {

    /**
     * @api {get} /v1/reports/:report_id get
     * @apiGroup Reports
     * @apiName get
     * @apiDescription Return status of the given celeryTaskID.
     * @apiParam {Number} report_id
     * @apiExample {js} Example:
     *             gigwalk.reports.get({...})
     */
    get(params: GetReportParams): APIPromise<any> {
        return this.client.get(`/v1/reports/${params.report_id}`);
    }
}
