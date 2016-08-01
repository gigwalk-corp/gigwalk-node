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
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName deleteLocationList
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
                       This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteLocationList({...})
     */
    deleteLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName getLocationList
     * @apiDescription Return (location_list_id, location_count, name, org_id and status) of the specified location list API signature declares the
                       org_loc_list_id as optional. But it is really mandatory - downstream code will error out if org_loc_list_id is unspecified.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocationList({...})
     */
    getLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName updateLocationList
     * @apiDescription Modify specified location list Location list update can be done in three ways. 1. Addresses can be specified in JSON format -
                       ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations) 2. Addresses can be uploaded
                       from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationList({...})
     */
    updateLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/location_lists
     * @apiName deleteOrganizationLocationList
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
                       This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationLocationList({...})
     */
    deleteOrganizationLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/location_lists
     * @apiName getOrganizationLocationLists
     * @apiDescription Get all the location lists that belong to the given organization Return (location_list_id, location_count, name, org_id and status)
                       of the specified location list
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationLocationLists({...})
     */
    getOrganizationLocationLists(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists
     * @apiName createOrganizationLocationList
     * @apiDescription Create a location list for the organization using the input data. Location list update can be done in three ways. 1. Addresses can be
                       specified in JSON format - ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations)
                       2. Addresses can be uploaded from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationList({...})
     */
    createOrganizationLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}/locations/{location_id}
     * @apiName deleteLocationFromList
     * @apiDescription Delete specified location from the specified location list The location itself is not deleted, it is just removed from location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteLocationFromList({...})
     */
    deleteLocationFromList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/location_lists/{organization_location_list_id}/locations/{location_id}
     * @apiName deleteLocationFromList
     * @apiDescription Delete specified location from the specified location list The location itself is not deleted, it is just removed from location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteLocationFromList({...})
     */
    deleteLocationFromList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName getLocationDetailsForList
     * @apiDescription Get all the locations of the given location_list For each location, return (location_id, title, specificity, locality,
                       admin_area_level_1/2, country, postal_code, lat/lon, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocationDetailsForList({...})
     */
    getLocationDetailsForList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName addLocationToList
     * @apiDescription Add location ids specified in JSON payload to the given location list. JSON payload is an array of ("id": id) dicts. How is this
                       supposed to work? 404 if location_list does not exist, but we are trying to add the location_list anyway. Is the intention to create
                       a new location_list or not?
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.addLocationToList({...})
     */
    addLocationToList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName removeLocationsFromList
     * @apiDescription Bulk update locations from a location list, ids are specified in JSON payload. Actions allowed: "remove"
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.removeLocationsFromList({...})
     */
    removeLocationsFromList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/search/locations
     * @apiName getLocationsInListMatchingCriteria
     * @apiDescription Search locations in the given location list Can search for a match in title, address, administrative area level 1/2 or country
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocationsInListMatchingCriteria({...})
     */
    getLocationsInListMatchingCriteria(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/location_lists/{location_list_id}/upload
     * @apiName getFileInfoForLocationList
     * @apiDescription Fetch info about the file that was used to upload the location list Return (location_list_id, loc_list_name, loc_list_date_created,
                       loc_list_date_updated, org_id, loc_list_status PLUS file_upload_id, file_upload_date_created, file_upload_date_updated,
                       file_upload_status, file_upload_location_count, file_upload_processed_row_count, file_upload_unresolved_location_count)
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getFileInfoForLocationList({...})
     */
    getFileInfoForLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/location_lists/{location_list_id}/upload
     * @apiName getFileInfoForOrganizationLocationList
     * @apiDescription Fetch info about the file that was used to upload the location list Return (location_list_id, loc_list_name, loc_list_date_created,
                       loc_list_date_updated, org_id, loc_list_status PLUS file_upload_id, file_upload_date_created, file_upload_date_updated,
                       file_upload_status, file_upload_location_count, file_upload_processed_row_count, file_upload_unresolved_location_count)
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getFileInfoForOrganizationLocationList({...})
     */
    getFileInfoForOrganizationLocationList(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists/upload
     * @apiName createOrganizationLocationListUsingFile
     * @apiDescription Upload location list data JSON payload should have Amazon S3 key and location list file name
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationListUsingFile({...})
     */
    createOrganizationLocationListUsingFile(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/location_lists/{location_list_id}/upload/{file_upload_id}/unresolved_locations
     * @apiName updateLocationAdress
     * @apiDescription Update location address Either a file upload or JSON data can be input
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationAdress({...})
     */
    updateLocationAdress(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/location_lists/{location_list_id}/upload/{file_upload_id}/unresolved_locations/{location_id}
     * @apiName updateLocationAdress
     * @apiDescription Update location address Either a file upload or JSON data can be input
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationAdress({...})
     */
    updateLocationAdress(params: any): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }
}
