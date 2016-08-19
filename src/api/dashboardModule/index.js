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
     * @apiParam {String} [module_id='activity']
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dashboardModule.getForOrganization({...})
     */
    getForOrganization(params: GetModuleForOrganizationParams): APIPromise<any> {
        const query = this.stringForQueryObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/dashboard_modules/${(params.module_id) ? params.module_id : 'activity'}${query}`);
    }

    /**
     * @api {get} /v1/dashboard_modules/:module_id get
     * @apiGroup DashboardModule
     * @apiName get
     * @apiDescription Get information about dashboard module.
     * @apiParam {String} [module_id='activity']
     * @apiParam {Object} [query]
     * @apiExample {js} Example:
     *             gigwalk.dashboardModule.get({...})
     */
    get(params: GetModuleParams): APIPromise<any> {
        const query = (params) ? this.stringForQueryObject(params.query) : '';

        return this.client.get(`/v1/dashboard_modules/${(params && params.module_id) ? params.module_id : 'activity'}${query}`);
    }
}
