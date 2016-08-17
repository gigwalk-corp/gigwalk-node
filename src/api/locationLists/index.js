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
    order_dir?: 'ASCENDING' | 'DESCENDING',
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
    order_dir?: 'ASCENDING' | 'DESCENDING'
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
    order_dir?: 'ASCENDING' | 'DESCENDING'
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
     * @apiDescription Delete the specified location list only if location list is associated with an active organization_subscription. This is a soft delete.
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
     * @apiDescription Get location list.
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
     * @apiDescription Modify location list. Updates can be done in three ways:
                       1. Specified in JSON format - ('name': location_list_name, 'status': ACTIVE/INACTIVE/ARCHIVE/DELETED, 'locations': array of locations).
                       2. Addresses can be uploaded from a csv file.
                       3. Location_ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_location_list_id
     * @apiParam {LocationListTemplate} location_list
     * @apiExample {js} Example:
     *             gigwalk.customers.updateLocationList({...})
     */
    updateLocationList(params: UpdateLocationListParams): APIPromise<UpdateLocationListData> {
        return this.client.put(`/v1/organization_location_lists/${params.organization_location_list_id}`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/location_lists
     * @apiName deleteOrganizationLocationLists
     * @apiDescription Delete the specified location list only if location list is associated with an active organization_subscription. This is a soft delete.
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
     * @apiDescription Get all location lists that belong to the given organization. Capable of returning paginated results.
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
     * @apiDescription Create a location list for the organization. Creation can be done in three ways:
                       1. Specified in JSON format - ('name': location_list_name, 'status': ACTIVE/INACTIVE/ARCHIVE/DELETED, 'locations': array of locations).
                       2. Addresses can be uploaded from a csv file.
                       3. Location_ids can be uploaded from a spreadsheet.
     * @apiParam {Number} organization_id
     * @apiParam {LocationListTemplate} location_list
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationList({...})
     */
    createOrganizationLocationList(params: CreateOrganizationLocationListParams): APIPromise<CreateOrganizationLocationListData> {
        return this.client.post(`/v1/organizations/${params.organization_id}/location_lists`, { ...params.location_list });
    }

    /**
     * @api {delete} /v1/organization_location_lists/{organization_location_list_id}/locations/{location_id}
     * @apiName deleteOrganiztionLocationFromList
     * @apiDescription Delete location from the specified location list. The location is removed from the location list.
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
     * @apiDescription Delete location from the specified location list. The location is removed from the location list.
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
     * @apiDescription Get all locations of the given location list. Capable of returning paginated results.
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
     * @apiDescription Add location ids specified in JSON payload to location list.
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
     * @apiDescription Remove location ids specified in JSON payload from location list.
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
     * @apiDescription Search locations in a location list. Can search for in title, address, administrative area level 1/2 or country
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
     * @apiDescription Get information about the file that was used to upload the location list.
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
     * @apiDescription Get information about the file that was used to upload the location list.
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
     * @apiDescription Create location list using an Amazon s3 uploaded file.
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
     * @apiDescription Update location address. Either a JSON payloa or file upload may be used as input.
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
     * @apiDescription Update location address. Either a JSON payloa or file upload may be used as input.
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
