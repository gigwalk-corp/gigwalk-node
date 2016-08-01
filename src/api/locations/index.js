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

export default class Locations extends ResourceBase {
    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    getLocations(params: any): APIPromise<any> {
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
    createLocations(params: any): APIPromise<any> {
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
    getLocation(params: any): APIPromise<any> {
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
    getOrganizationLocations(params: any): APIPromise<any> {
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
    createOrganizationLocations(params: any): APIPromise<any> {
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
    updateOrganizaionLocations(params: any): APIPromise<any> {
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
    deleteOrganizationLocationMetadata(params: any): APIPromise<any> {
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
    getOrganizationLocation(params: any): APIPromise<any> {
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
    createOrganizationLocation(params: any): APIPromise<any> {
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
    updateOrganizationLocation(params: any): APIPromise<any> {
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
    createOrganizationAdHocList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }
}
