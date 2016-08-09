// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type SimpleLocationTemplate = {
    title: string,
    address: string
}

type AltSimpleLocationTemplate = {
    id: number,
    address: string
}

type LocationListTemplate = {
    name?: string,
    status?: string,
    locations?: Array<SimpleLocationTemplate>
}

type DeleteLocationListParams = {
    organization_location_list_id: number
}

type GetLocationListParams = {
    organization_location_list_id: number
}

type UpdateLocationListParams = {
    organization_location_list_id: number,
    location_list: LocationListTemplate
}

type DeleteOrganizationLocationListsParams = {
    organization_id: number,
    location_list_ids: Array<number>
}

type GetOrganizationLocationListsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: string,
    include_auto_generated?: number
}

type GetOrganizationLocationListsParams = {
    organization_id: number,
    query?: GetOrganizationLocationListsQuery
}

type CreateOrganizationLocationListParams = {
    organization_id: number,
    location_list: LocationListTemplate
}

type DeleteOrganiztionLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

type DeleteLocationFromListParams = {
    organization_location_list_id: number,
    location_id: number
}

type GetLocationsInListQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: string
}

type GetLocationsInListParams = {
    organization_location_list_id: number,
    query?: GetLocationsInListQuery
}

type AddLocationsToListParams = {
    organization_location_list_id: number,
    locations: Array<number>
}

type RemoveLocationsFromListParams = {
    organization_location_list_id: number,
    locations: Array<number>
}

type SearchLocationListQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: string
}

type SearchLocationListParams = {
    organization_location_list_id: number,
    query?: SearchLocationListQuery
}

type GetFileInfoForLocationListParams = {
    location_list_id: number
}

type GetFileInfoForOrganizationLocationListParams = {
    organization_id: number,
    location_list_id: number
}

type CreateOrganizationLocationListUsingFileParams = {
    organization_id: number,
    location_list_name: string,
    s3_keys: Array<string>
}

type GetUnresolvedLocationsParams = {
    file_upload_id: number,
    location_list_id: number
}

type UpdateLocationAddressByIDParams = {
    file_upload_id: number,
    location_list_id: number,
    location_id: number,
    csv?: number,
    key?: string,
    location_data_array?: Array<AltSimpleLocationTemplate>
}

type LocationListSummarySchema = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    location_count: number
}

type LocationSummarySchema = {
    title: string,
    locality: string,
    id: number,
    country: string,
    formatted_address: string,
    address: string,
    postal_code: number,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    specificity: string,
    latitude: number,
    longitude: number,
    metadata: Object,
}

type LocationSchema = {
    title: string,
    locality: string,
    id: number,
    country: string,
    formatted_address: string,
    postal_code: number,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    specificity: string,
    latitude: number,
    longitude: number,
    tzid: string,
    organization_id: number,
    source_location_id: number,
    status: string,
    state: string,
    organization_data: Object
}

type LocationListSchema = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    locations: Array<LocationSummarySchema>
}

type LocationListFileUploadSchema = {
    name: string,
    id: number,
    organization_id: number,
    status: string,
    date_created: string,
    date_updated: string,
    file_uploads: Array<{
        id: number,
        status: string,
        location_count: number,
        processed_row_count: number,
        unresolved_location_count: number,
        date_created: string,
        date_updated: string
    }>
}

type DeleteLocationListData = [
    number
]

type GetLocationListData = [
    LocationListSummarySchema
]

type UpdateLocationListData = [
    LocationListSchema
]

type DeleteOrganizationLocationListsData = [
    number
]

type GetOrganizationLocationListsData = Array<LocationListSummarySchema>

type CreateOrganizationLocationListData = [
    LocationListSchema
]

type DeleteOrganiztionLocationFromListData = [
    number
]

type DeleteLocationFromListData = [
    number
]

type GetLocationsInListData = Array<LocationSchema>

type AddLocationsToListData = Array<LocationSchema>

type RemoveLocationsFromListData = Array<number>

type SearchLocationListData = Array<LocationSchema> // NEED TO CHECK

type GetFileInfoForLocationListData = [
    LocationListFileUploadSchema
]

type GetFileInfoForOrganizationLocationListData = [
    LocationListFileUploadSchema
]

type CreateOrganizationLocationListUsingFileData = [
    LocationListFileUploadSchema
]

type GetUnresolvedLocationsData = any // SPECIFY

type UpdateLocationAddressByIDData = any // SPECIFY

export default class LocationLists extends Resource {
    /**
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName deleteLocationList
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
                       This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_location_list_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteLocationList({...})
     */
    deleteLocationList(params: DeleteLocationListParams): APIPromise<DeleteLocationListData> {
        return this.client.delete(`/v1/organization_location_lists/${params.organization_location_list_id}`);
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
    getLocationList(params: GetLocationListParams): APIPromise<GetLocationListData> {
        return this.client.get(`/v1/organization_location_lists/${params.organization_location_list_id}`);
    }

    /**
     * @api {put} /v1/organization_location_lists/{organization_location_list_id}
     * @apiName updateLocationList
     * @apiDescription Modify specified location list Location list update can be done in three ways. 1. Addresses can be specified in JSON format -
                       ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations) 2. Addresses can be uploaded
                       from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {} location_list
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationList({...})
     */
    updateLocationList(params: UpdateLocationListParams): APIPromise<UpdateLocationListData> {
        return this.client.put(`/v1/organization_location_lists/${params.organization_location_list_id}`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/location_lists
     * @apiName deleteOrganizationLocationLists
     * @apiDescription Delete the specified location list. If location list is associated with an active organization_subscription, it cannot be deleted.
                       This is a soft delete - location list is inactivated, not deleted from the db.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Number>} location_list_ids
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationLocationLists({...})
     */
    deleteOrganizationLocationLists(params: DeleteOrganizationLocationListsParams): APIPromise<DeleteOrganizationLocationListsData> {
        const data = {
            location_list_ids: params.location_list_ids
        };

        return this.client.delete(`/v1/organizations/${params.organization_id}/location_lists`, data);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/location_lists
     * @apiName getOrganizationLocationLists
     * @apiDescription Get all the location lists that belong to the given organization Return (location_list_id, location_count, name, org_id and status)
                       of the specified location list
     * @apiParam {Number} organization_id
     * @apiParam {GetOrganizationLocationListsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationLocationLists({...})
     */
    getOrganizationLocationLists(params: GetOrganizationLocationListsParams): APIPromise<GetOrganizationLocationListsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/location_lists${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists
     * @apiName createOrganizationLocationList
     * @apiDescription Create a location list for the organization using the input data. Location list update can be done in three ways. 1. Addresses can be
                       specified in JSON format - ('name': location_list_name, 'status': active/inactive/archive/deleted, 'locations': array of locations)
                       2. Addresses can be uploaded from a csv file 3. Location ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_id
     * @apiParam {} location_list
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationList({...})
     */
    createOrganizationLocationList(params: CreateOrganizationLocationListParams): APIPromise<CreateOrganizationLocationListData> {
        return this.client.post(`/v1/organizations/${params.organization_id}/location_lists`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}/locations/{location_id}
     * @apiName deleteOrganiztionLocationFromList
     * @apiDescription Delete specified location from the specified location list The location itself is not deleted, it is just removed from location list.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganiztionLocationFromList({...})
     */
    deleteOrganiztionLocationFromList(params: DeleteOrganiztionLocationFromListParams): APIPromise<DeleteOrganiztionLocationFromListData> {
        return this.client.delete(`/v1/organization_location_lists/${params.organization_location_list_id}/locations/${params.location_id}`);
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
    deleteLocationFromList(params: DeleteLocationFromListParams): APIPromise<DeleteLocationFromListData> {
        return this.client.delete(`/v1/location_lists/${params.organization_location_list_id}/locations/${params.location_id}`);
    }

    /**
     * @api {get} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName getLocationsInList
     * @apiDescription Get all the locations of the given location_list For each location, return (location_id, title, specificity, locality,
                       admin_area_level_1/2, country, postal_code, lat/lon, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} organization_location_list_id
     * @apiParam {GetLocationsInListQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocationsInList({...})
     */
    getLocationsInList(params: GetLocationsInListParams): APIPromise<GetLocationsInListData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/location_lists/${params.organization_location_list_id}/locations${queryString}`);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName addLocationsToList
     * @apiDescription Add location ids specified in JSON payload to the given location list. JSON payload is an array of (id: id) dicts. How is this
                       supposed to work? 404 if location_list does not exist, but we are trying to add the location_list anyway. Is the intention to create
                       a new location_list or not?
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.customers.addLocationsToList({...})
     */
    addLocationsToList(params: AddLocationsToListParams): APIPromise<AddLocationsToListData> {
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
     * @api {put} /v1/location_lists/{organization_location_list_id}/locations
     * @apiName removeLocationsFromList
     * @apiDescription Bulk update locations from a location list, ids are specified in JSON payload. Actions allowed: remove
     * @apiParam {Number} organization_location_list_id
     * @apiParam {Array<Number>} locations
     * @apiExample {js} Example:
     *             gigwalk.customers.removeLocationsFromList({...})
     */
    removeLocationsFromList(params: RemoveLocationsFromListParams): APIPromise<RemoveLocationsFromListData> {
        const data = {
            action: 'remove',
            locations: params.locations
        };

        return this.client.put(`/v1/location_lists/${params.organization_location_list_id}/locations`, data);
    }

    /**
     * @api {post} /v1/location_lists/{organization_location_list_id}/search/locations
     * @apiName searchLocationList
     * @apiDescription Search locations in the given location list Can search for a match in title, address, administrative area level 1/2 or country
     * @apiParam {Number} organization_location_list_id
     * @apiParam {SearchLocationListQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.searchLocationList({...})
     */
    searchLocationList(params: SearchLocationListParams): APIPromise<SearchLocationListData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.post(`/v1/location_lists/${params.organization_location_list_id}/search/locations${queryString}`);
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
    getFileInfoForLocationList(params: GetFileInfoForLocationListParams): APIPromise<GetFileInfoForLocationListData> {
        return this.client.get(`/v1/location_lists/${params.location_list_id}/upload`);
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
    getFileInfoForOrganizationLocationList(params: GetFileInfoForOrganizationLocationListParams): APIPromise<GetFileInfoForOrganizationLocationListData> {
        return this.client.get(`/v1/organizations/${params.organization_id}/location_lists/${params.location_list_id}/upload`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/location_lists/upload
     * @apiName createOrganizationLocationListUsingFile
     * @apiDescription Upload location list data JSON payload should have Amazon S3 key and location list file name
     * @apiParam {Number} organization_id
     * @apiParam {String} location_list_name
     * @apiParam {Array<String>} s3_keys
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationListUsingFile({...})
     */
    createOrganizationLocationListUsingFile(params: CreateOrganizationLocationListUsingFileParams): APIPromise<CreateOrganizationLocationListUsingFileData> {
        const data = {
            location_list_name: params.location_list_name,
            keys: params.s3_keys
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/location_lists/upload`, data);
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
    getUnresolvedLocations(params: GetUnresolvedLocationsParams): APIPromise<GetUnresolvedLocationsData> {
        return this.client.get(`/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations`);
    }

    /**
     * @api {put} /v1/location_lists/{location_list_id}/upload/{file_upload_id}/unresolved_locations/{location_id}
     * @apiName updateLocationAddressByID
     * @apiDescription Update location address Either a file upload or JSON data can be input
     * @apiParam {Number} file_upload_id
     * @apiParam {Number} location_list_id
     * @apiParam {Number} location_id
     * @apiParam {Number} csv
     * @apiParam {String} key
     * @apiParam {Array<AltSimpleLocationTemplate>} location_data_array
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationAddressByID({...})
     */
    updateLocationAddressByID(params: UpdateLocationAddressByIDParams): APIPromise<UpdateLocationAddressByIDData> {
        const data = {
            csv: params.csv,
            key: params.key,
            location_data_array: params.location_data_array
        };

        return this.client.put(`/v1/location_lists/${params.location_list_id}/upload/${params.file_upload_id}/unresolved_locations/${params.location_id}`,
                               data);
    }
}
