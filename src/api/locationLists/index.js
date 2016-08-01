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

export default class LocationLists extends ResourceBase {
    /**
     * @api {}
     * @apiName
     * @apiDescription
     * @apiParam {}
     * @apiExample {js} Example:
     *             gigwalk.customers.({...})
     */
    deleteLocationList(params: any): APIPromise<any> {
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
    getLocationList(params: any): APIPromise<any> {
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
    updateLocationList(params: any): APIPromise<any> {
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
    deleteOrganizationLocationList(params: any): APIPromise<any> {
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
    getOrganizationLocationLists(params: any): APIPromise<any> {
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
    createOrganizationLocationList(params: any): APIPromise<any> {
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
    deleteLocationFromList(params: any): APIPromise<any> {
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
    deleteLocationFromList(params: any): APIPromise<any> {
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
    getLocationDetailsForList(params: any): APIPromise<any> {
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
    addLocationToList(params: any): APIPromise<any> {
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
    removeLocationsFromList(params: any): APIPromise<any> {
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
    getLocationsInListMatchingCriteria(params: any): APIPromise<any> {
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
    getFileInfoForLocationList(params: any): APIPromise<any> {
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
    getFileInfoForOrganizationLocationList(params: any): APIPromise<any> {
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
    createOrganizationLocationListUsingFile(params: any): APIPromise<any> {
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
    updateLocationAdress(params: any): APIPromise<any> {
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
    updateLocationAdress(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }
}
