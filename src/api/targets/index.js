// @flow
import ResourceBase from '../resourceBase';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>

export default class Targets extends ResourceBase {
    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    createOrganizationTargets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    getOrganizationTarget(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    updateOrganizationTarget(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    searchOrganizationTargets(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }
}
