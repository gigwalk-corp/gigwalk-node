// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type { Location } from '../locations/types';
import type {
    LocationList,
    LocationListSummary,
    LocationListUpload,
    UnresolvedLocation,
    DeleteLocationListParams,
    GetLocationListParams,
    UpdateLocationListParams,
    BulkDeleteLocationListParams,
    GetAllLocationListsByOrganizationParams,
    CreateLocationListParams,
    DeleteLocationFromListParams,
    GetLocationsInListParams,
    AddLocationsToListParams,
    RemoveLocationsFromListParams,
    SearchLocationListParams,
    GetLocationListUploadStatsParams,
    UploadLocationListParams,
    GetUnresolvedLocationsParams,
    UpdateUnresolvedLocationsParams,
} from './types';

export default class LocationLists extends Resource {
    /**
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName delete
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
     This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.delete({...})
     */
    delete(params: DeleteLocationListParams): APIPromise<[number]> {
        // NOTE: API returns an array containing the id of the 'deleted' location list
        const url = `/v1/organization_location_lists/${params.organization_location_list_id}`;
        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName get
     * @apiDescription Return (location_list_id, location_count, name, org_id and status) of the specified location list API signature declares the
     org_loc_list_id as optional. But it is really mandatory - downstream code will error out if org_loc_list_id is unspecified.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.get({...})
     */
    get(params: GetLocationListParams): APIPromise<[LocationListSummary]> {
        const url = `/v1/organization_location_lists/${params.organization_location_list_id}`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName update
     * @apiDescription Modify specified location list Location list update can be done in three ways. 1. Addresses can be specified in JSON format -
     ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations) 2. Addresses can be uploaded
     from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Object} location_list
     * @apiExample {js} Example:
     *             gigwalk.customers.update({...})
     */
    update(params: UpdateLocationListParams): APIPromise<[LocationList]> {
        const url = `/v1/organization_location_lists/${params.organization_location_list_id}`;
        const data = params.location_list;

        return this.client.put(url, data);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/location_lists
     * @apiName bulkDelete
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
     This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Number>} location_list_ids
     * @apiExample {js} Example:
     *             gigwalk.locationLists.bulkDelete({...})
     */
    bulkDelete(params: BulkDeleteLocationListParams): APIPromise<Array<number>> {
        // NOTE: API returns array of location list ids there were 'deleted'
        const url = `/v1/organizations/${params.organization_id}/location_lists`;
        const data = {
            location_list_ids: params.location_list_ids
        };

        return this.client.delete(url, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/location_lists
     * @apiName getAllByOrganization
     * @apiDescription Get all the location lists that belong to the given organization Return (location_list_id, location_count, name, org_id and status)
     of the specified location list
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getAllByOrganization({...})
     */
    getAllByOrganization(params: GetAllLocationListsByOrganizationParams): APIPromise<LocationListSummary> {
        const url = `/v1/organizations/${params.organization_id}/location_lists`;
        return this.client.get(url);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists
     * @apiName create
     * @apiDescription Create a location list for the organization using the input data. Location list update can be done in three ways. 1. Addresses can be
     specified in JSON format - ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations)
     2. Addresses can be uploaded from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_id
     * @apiParam {LocationListTemplate} location_list
     * @apiExample {js} Example:
     *             gigwalk.locationLists.create({...})
     */
    create(params: CreateLocationListParams): APIPromise<[LocationList]> {
        const url = `/v1/organizations/${params.organization_id}/location_lists`;
        const data = params.location_list;

        return this.client.post(url, data);
    }

    /**
     * @api {delete} /v1/location_lists/{organization_location_list_id}/locations/{location_id}
     * @apiName deleteLocation
     * @apiDescription Delete specified location from the specified location list The location itself is not deleted, it is just removed from location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.deleteLocation({...})
     */
    deleteLocation(params: DeleteLocationFromListParams): APIPromise<[boolean]> {
        // NOTE: API returns an array containing true. I don't know under what circumstances this would ever be false
        const url = `/v1/location_lists/${params.organization_location_list_id}/locations/${params.location_id}`;
        return this.client.delete(url);
    }

    /**
     * @api {get} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName getLocations
     * @apiDescription Get all the locations of the given location_list For each location, return (location_id, title, specificity, locality,
     admin_area_level_1/2, country, postal_code, lat/lon, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getLocations({...})
     */
    getLocations(params: GetLocationsInListParams): APIPromise<Array<Location>> {
        const url = `/v1/location_lists/${params.organization_location_list_id}/locations`;
        return this.client.get(url);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName addLocations
     * @apiDescription Add location ids specified in JSON payload to the given location list. JSON payload is an array of (id: id) dicts. How is this
     supposed to work? 404 if location_list does not exist, but we are trying to add the location_list anyway. Is the intention to create
     a new location_list or not?
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.locationLists.addLocations({...})
     */
    addLocations(params: AddLocationsToListParams): APIPromise<Array<Location>> {
        const url = `/v1/location_lists/${params.organization_location_list_id}/locations`;
        const data = {
            locations: params.locations
        };

        return this.client.post(url, data);
    }

    /**
     * @api {put} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName bulkUpdateLocations
     * @apiDescription Bulk update locations from a location list, ids are specified in JSON payload. Actions allowed: remove
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.locationLists.bulkUpdateLocations({...})
     */
    bulkUpdateLocations(params: RemoveLocationsFromListParams): APIPromise<Array<number>> {
        const url = `/v1/location_lists/${params.organization_location_list_id}/locations`;
        const data = {
            action: 'remove',
            locations: params.locations
        };

        return this.client.put(url, data);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/search/locations
     * @apiName searchLocations
     * @apiDescription Search locations in the given location list Can search for a match in title, address, administrative area level 1/2 or country
     * @apiParam {Number} organization_location_list_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.locationLists.searchLocations({...})
     */
    searchLocations(params: SearchLocationListParams): APIPromise<Array<Location>> {
        // todo: rename and move to Locations API. This searches for locations, NOT location lists.
        const url = `/v1/location_lists/${params.organization_location_list_id}/search/locations`;
        const data = {
            q: params.query_string
        };

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/location_lists/{location_list_id}/upload
     * @apiName getUploadStats
     * @apiDescription Fetch info about the file that was used to upload the location list Return (location_list_id, loc_list_name, loc_list_date_created,
     loc_list_date_updated, org_id, loc_list_status PLUS file_upload_id, file_upload_date_created, file_upload_date_updated,
     file_upload_status, file_upload_location_count, file_upload_processed_row_count, file_upload_unresolved_location_count)
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getUploadStats({...})
     */
    getUploadStats(params: GetLocationListUploadStatsParams): APIPromise<[LocationListUpload]> {
        const url = `/v1/location_lists/${params.location_list_id}/upload`;
        return this.client.get(url);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists/upload
     * @apiName upload
     * @apiDescription Upload location list data JSON payload should have Amazon S3 key and location list file name
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.upload({...})
     */
    upload(params: UploadLocationListParams): APIPromise<[LocationListUpload]> {
        const url = `/v1/organizations/${params.organization_id}/location_lists/upload`;
        const data = {
            s3_keys: params.s3_keys
        };

        return this.client.post(url, data);
    }

    /**
     * @api {get} /v1/location_lists/{location_list_id}/upload/{file_upload_id}/unresolved_locations
     * @apiName getUnresolvedLocations
     * @apiDescription Update location address Either a file upload or JSON data can be input
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getUnresolvedLocations({...})
     */
    getUnresolvedLocations(params: GetUnresolvedLocationsParams): APIPromise<Array<UnresolvedLocation>> {
        const url = `/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations`;
        return this.client.get(url);
    }

    /**
     * @api {put} /v1/location_lists/{location_list_id}/upload/{file_upload_id}/unresolved_locations/{location_id}
     * @apiName updateUnresolvedLocations
     * @apiDescription Update location address Either a file upload or JSON data can be input
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateUnresolvedLocations({...})
     */
    updateUnresolvedLocations(params: UpdateUnresolvedLocationsParams): APIPromise<Array<UnresolvedLocation> | Array<number>> {
        // NOTE: Unsure about API response. Swagger docs are unclear
        const url = `/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations`;
        return this.client.put(url);
    }
}
