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
     * @api {get} /v1/locations
     * @apiName getLocations
     * @apiDescription Return all locations of the current customer's organization. For each location, return (id, title, specificity, locality,
                       admin_area_level_1/2, country, postal_code, latitude, longitude, formatted_address, state, status, timezone_id, source_location_id,
                       org_id, org_data)
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocations({...})
     */
    getLocations(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/locations
     * @apiName createLocations
     * @apiDescription Create new locations with the current_user's organization. JSON payload is an array. Mandatory fields are (title, locality,
                       admin_area_level_1, country, postal_code, latitude, longitude, formatted_address). Optional fields are (admin_area_level_2, status,
                       timezone_id). No check for update permission!
     * @apiExample {js} Example:
     *             gigwalk.customers.createLocations({...})
     */
    createLocations(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/locations/{location_id}
     * @apiName getLocation
     * @apiDescription Return info about the specified location Return (id, title, specificity, locality, admin_area_level_1/2, country, postal_code, latitude,
                       longitude, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocation({...})
     */
    getLocation(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/locations
     * @apiName getOrganizationLocations
     * @apiDescription Return all locations of the specified organization. For each location, return (id, title, specificity, locality, admin_area_level_1/2,
                       country, postal_code, latitude, longitude, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationLocations({...})
     */
    getOrganizationLocations(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/locations
     * @apiName createOrganizationLocations
     * @apiDescription Create new locations with the specified organization. JSON payload is an array. Mandatory fields are (title, locality,
                       admin_area_level_1, country, postal_code, latitude, longitude, formatted_address). Optional fields are (admin_area_level_2, status,
                       timezone_id). No check for create permission!
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocations({...})
     */
    createOrganizationLocations(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/locations
     * @apiName updateOrganizaionLocations
     * @apiDescription Update locations of the specified organization. If location has been resolved already, update the location with JSON payload which
                       can be an array of (id, title, locality, admin_area_level_1/2, country, postal_code, latitude, longitude, formatted_address, status,
                       timezone_id). No check for update permission! No check for create permission!
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizaionLocations({...})
     */
    updateOrganizaionLocations(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/locations/{location_id}
     * @apiName deleteOrganizationLocationMetadata
     * @apiDescription Delete location Locations are never deleted, only related metadata. No check for delete permission.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationLocationMetadata({...})
     */
    deleteOrganizationLocationMetadata(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/locations/{location_id}
     * @apiName getOrganizationLocation
     * @apiDescription Return information about the given location. Location should belong to the organization. Return (id, title, specificity, locality,
                       admin_area_level_1/2, country, postal_code, latitude, longitude, formatted_address, state, status, timezone_id, source_location_id,
                       org_id, org_data)
    * @apiParam {Number} organization_id
    * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationLocation({...})
     */
    getOrganizationLocation(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/locations/geocode
     * @apiName createOrganizationLocation
     * @apiDescription This endpoint adds metadata items to organization location metadata, as well as creates a new location with the address and title.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocation({...})
     */
    createOrganizationLocation(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/locations/geocode/{location_id}
     * @apiName updateOrganizationLocation
     * @apiDescription This endpoint adds metadata items to organization location metadata, as well as modifies the address or title of the location.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationLocation({...})
     */
    updateOrganizationLocation(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/{subscription_id}/locations
     * @apiName createOrganizationAdHocList
     * @apiDescription If a project doesn't already have an ad-hoc location list, a new ad-hoc list is created and assigned to the project.
                       The new location is added to this ad-hoc list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationAdHocList({...})
     */
    createOrganizationAdHocList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
