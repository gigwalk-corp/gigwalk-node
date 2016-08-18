// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    GetModuleForOrganizationParams,
    GetModuleParams
} from './types';

export default class DashboardModule extends Resource {

    /**
     * @api {get} /v1/organizations/:organization_id/dashboard_modules/:module_id getForOrganization
     * @apiGroup DashboardModule
     * @apiName getForOrganization
     * @apiDescription Get information about dashboard module.
     * @apiParam {Number} organization_id
     * @apiParam {String} module_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.dashboardModule.getForOrganization({...})
     */
    getForOrganization(params: GetModuleForOrganizationParams): APIPromise<any> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/dashboard_modules/${params.module_id}${queryString}`);
    }

    /**
     * @api {get} /v1/dashboard_modules/:module_id get
     * @apiGroup DashboardModule
     * @apiName get
     * @apiDescription Get information about dashboard module.
     * @apiParam {String} module_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.dashboardModule.get({...})
     */
    get(params: GetModuleParams): APIPromise<any> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/dashboard_modules/${params.module_id}${queryString}`);
    }
}
