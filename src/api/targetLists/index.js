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

export default class TargetLists extends ResourceBase {
    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    getTargetLists(params: any): APIPromise<any> {
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
    getTargetList(params: any): APIPromise<any> {
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
    getOrganizationTargetLists(params: any): APIPromise<any> {
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
    createOrganizationTargetList(params: any): APIPromise<any> {
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
    getOrganzationTargetList(params: any): APIPromise<any> {
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
    deleteOranizationTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
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
    updateOrganizatioTargetList(params: any): APIPromise<any> {
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
    searchOrganizationTargetList(params: any): APIPromise<any> {
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
    searchOrganizationTargetList(params: any): APIPromise<any> {
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
    getOrganizationTargetList(params: any): APIPromise<any> {
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
    updateOrganizationTargetList(params: any): APIPromise<any> {
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
    searchTargetList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
