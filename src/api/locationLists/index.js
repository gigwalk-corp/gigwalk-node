// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Location,
    ESLocationList,
    LocationList,
    LocationListFile,
    DeleteLocationListParams,
    GetLocationListParams,
    UpdateLocationListParams,
    DeleteOrganizationLocationListsParams,
    GetOrganizationLocationListsParams,
    CreateOrganizationLocationListParams,
    DeleteOrganizationLocationFromListParams,
    DeleteLocationFromListParams,
    GetLocationsInListParams,
    AddLocationsToListParams,
    RemoveLocationsFromListParams,
    SearchLocationListParams,
    GetFileInfoForLocationListParams,
    GetFileInfoForOrganizationLocationListParams,
    CreateOrganizationLocationListUsingFileParams,
    GetUnresolvedLocationsParams,
    UpdateLocationAddressByIDParams
} from './types';

export default class LocationLists extends Resource {
    /**
     * @api {delete} /v1/organization_location_lists/:organization_location_list_id delete
     * @apiName delete
     * @apiDescription Delete the specified location list only if location list is associated with an active organization_subscription. This is a soft delete.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.delete({...})
     */
    delete(params: DeleteLocationListParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organization_location_lists/${params.organization_location_list_id}`);
    }

    /**
     * @api {get} /v1/organization_location_lists/:organization_location_list_id get
     * @apiName get
     * @apiDescription Get location list.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.get({...})
     */
    get(params: GetLocationListParams): APIPromise<[ESLocationList]> {
        return this.client.get(`/v1/organization_location_lists/${params.organization_location_list_id}`);
    }

    /**
     * @api {put} /v1/organization_location_lists/:organization_location_list_id update
     * @apiName update
     * @apiDescription Modify location list. Updates can be done in three ways:
                       1. Specified in JSON format - ('name': location_list_name, 'status': ACTIVE/INACTIVE/ARCHIVE/DELETED, 'locations': array of locations).
                       2. Addresses can be uploaded from a csv file.
                       3. Location_ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {LocationListTemplate} location_list
     * @apiExample {js} Example:
     *             gigwalk.locationLists.update({...})
     */
    update(params: UpdateLocationListParams): APIPromise<[LocationList]> {
        return this.client.put(`/v1/organization_location_lists/${params.organization_location_list_id}`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organizations/:organization_id/location_lists deleteForOrganization
     * @apiName deleteForOrganization
     * @apiDescription Delete the specified location list only if location list is associated with an active organization_subscription. This is a soft delete.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Number>} location_list_ids
     * @apiExample {js} Example:
     *             gigwalk.locationLists.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteOrganizationLocationListsParams): APIPromise<[number]> {
        const data = {
            location_list_ids: params.location_list_ids
        };

        return this.client.delete(`/v1/organizations/${params.organization_id}/location_lists`, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/location_lists getForOrganization
     * @apiName getForOrganization
     * @apiDescription Get all location lists that belong to the given organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {GetOrganizationLocationListsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getForOrganization({...})
     */
    getForOrganization(params: GetOrganizationLocationListsParams): APIPromise<Array<ESLocationList>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/location_lists${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/location_lists createForOrganization
     * @apiName createForOrganization
     * @apiDescription Create a location list for the organization. Creation can be done in three ways:
                       1. Specified in JSON format - ('name': location_list_name, 'status': ACTIVE/INACTIVE/ARCHIVE/DELETED, 'locations': array of locations).
                       2. Addresses can be uploaded from a csv file.
                       3. Location_ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_id
     * @apiParam {LocationListTemplate} location_list
     * @apiExample {js} Example:
     *             gigwalk.locationLists.createForOrganization({...})
     */
    createForOrganization(params: CreateOrganizationLocationListParams): APIPromise<[LocationList]> {
        return this.client.post(`/v1/organizations/${params.organization_id}/location_lists`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organization_location_lists/:organization_location_list_id/locations/:location_id deleteLocationForOrganization
     * @apiName deleteLocationForOrganization
     * @apiDescription Delete location from the specified location list. The location is removed from the location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.deleteForOrganization({...})
     */
    deleteLocationForOrganization(params: DeleteOrganizationLocationFromListParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organization_location_lists/${params.organization_location_list_id}/locations/${params.location_id}`);
    }

    /**
     * @api {delete} /v1/location_lists/:organization_location_list_id/locations/:location_id deleteLocation
     * @apiName deleteLocation
     * @apiDescription Delete location from the specified location list. The location is removed from the location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.deleteLocation({...})
     */
    deleteLocation(params: DeleteLocationFromListParams): APIPromise<[number]> {
        return this.client.delete(`/v1/location_lists/${params.organization_location_list_id}/locations/${params.location_id}`);
    }

    /**
     * @api {get} /v1/location_lists/:organization_location_list_id/locations getLocations
     * @apiName getLocations
     * @apiDescription Get all locations of the given location list. Capable of returning paginated results.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {GetLocationsInListQuery} query
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getLocations({...})
     */
    getLocations(params: GetLocationsInListParams): APIPromise<Array<Location>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/location_lists/${params.organization_location_list_id}/locations${queryString}`);
    }

    /**
     * @api {post} /v1/location_lists/:organization_location_list_id/locations addLocations
     * @apiName addLocations
     * @apiDescription Add location ids specified in JSON payload to location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.locationLists.addLocations({...})
     */
    addLocations(params: AddLocationsToListParams): APIPromise<Array<Location>> {
        const locations = [];
        for (let i: number = 0; i < params.locations.length; i++) {
            const id: number = params.locations[i];
            locations.push({
                id
            });
        }
        const data = locations;

        return this.client.post(`/v1/location_lists/${params.organization_location_list_id}/locations`, data);
    }

    /**
     * @api {put} /v1/location_lists/:organization_location_list_id/locations removeLocations
     * @apiName removeLocations
     * @apiDescription Remove location ids specified in JSON payload from location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.locationLists.removeLocations({...})
     */
    removeLocations(params: RemoveLocationsFromListParams): APIPromise<Array<number>> {
        const data = {
            action: 'remove',
            locations: params.locations
        };

        return this.client.put(`/v1/location_lists/${params.organization_location_list_id}/locations`, data);
    }

    /**
     * @api {post} /v1/location_lists/:organization_location_list_id/search/locations searchList
     * @apiName searchList
     * @apiDescription Search locations in a location list. Can search for in title, address, administrative area level 1/2 or country
     * @apiParam {Number} organization_location_list_id
     * @apiParam {SearchLocationListQuery} query
     * @apiExample {js} Example:
     *             gigwalk.locationLists.searchList({...})
     */
    searchList(params: SearchLocationListParams): APIPromise<Array<Location>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/location_lists/${params.organization_location_list_id}/search/locations${queryString}`);
    }

    /**
     * @api {get} /v1/location_lists/:location_list_id/upload getFileInfo
     * @apiName getFileInfoForLocationList
     * @apiDescription Get information about the file that was used to upload the location list.
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getFileInfo({...})
     */
    getFileInfo(params: GetFileInfoForLocationListParams): APIPromise<[LocationListFile]> {
        return this.client.get(`/v1/location_lists/${params.location_list_id}/upload`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/location_lists/:location_list_id/upload getFileInfoForOrganization
     * @apiName getFileInfoForOrganizationLocationList
     * @apiDescription Get information about the file that was used to upload the location list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getFileInfoForOrganization({...})
     */
    getFileInfoForOrganization(params: GetFileInfoForOrganizationLocationListParams): APIPromise<[LocationListFile]> {
        return this.client.get(`/v1/organizations/${params.organization_id}/location_lists/${params.location_list_id}/upload`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/location_lists/upload createForOrganizationWithFile
     * @apiName createOrganizationLocationListUsingFile
     * @apiDescription Create location list using an Amazon s3 uploaded file.
     * @apiParam {Number} organization_id
     * @apiParam {String} location_list_name
     * @apiParam {Array<String>} s3_keys
     * @apiExample {js} Example:
     *             gigwalk.locationLists.createForOrganizationWithFile({...})
     */
    createForOrganizationWithFile(params: CreateOrganizationLocationListUsingFileParams): APIPromise<[LocationListFile]> {
        const data = {
            location_list_name: params.location_list_name,
            keys: params.s3_keys
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/location_lists/upload`, data);
    }

    /**
     * @api {get} /v1/location_lists/:location_list_id/upload/:file_upload_id/unresolved_locations getUnresolved
     * @apiName getUnresolved
     * @apiDescription Update location address. Either a JSON payloa or file upload may be used as input.
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiExample {js} Example:
     *             gigwalk.locationLists.getUnresolved({...})
     */
    getUnresolved(params: GetUnresolvedLocationsParams): APIPromise<any> {
        return this.client.get(`/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations`);
    }

    /**
     * @api {put} /v1/location_lists/:location_list_id/upload/:file_upload_id/unresolved_locations/:location_id updateAddress
     * @apiName updateAddress
     * @apiDescription Update location address. Either a JSON payload or file upload may be used as input.
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiParam {Number} location_id
     * @apiParam {Number} csv
     * @apiParam {String} key
     * @apiParam {Array<AltSimpleLocationTemplate>} location_data_array
     * @apiExample {js} Example:
     *             gigwalk.locationLists.updateAddress({...})
     */
    updateAddress(params: UpdateLocationAddressByIDParams): APIPromise<any> {
        const data = {
            csv: params.csv,
            key: params.key,
            location_data_array: params.location_data_array
        };

        return this.client.put(`/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations/${params.location_id}`,
                               data);
    }
}
