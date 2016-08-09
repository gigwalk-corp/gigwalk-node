// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type LocationTemplate = {
    title: string,
    locality: string,
    administrative_area_level_1: string,
    administrative_area_level_2?: string,
    status?: string,
    tzid?: string,
    country: string,
    postal_code: string,
    latitude: number,
    longitude: number,
    formatted_address: string
}

type GetLocationsQuery = {
    limit?: number,
    offset?: number
}

type GetLocationsParams = {
    query?: GetLocationsQuery
}

type CreateLocationsParams = {
    locations: Array<LocationTemplate>
}

type GetLocationQuery = {
    limit?: number,
    offset?: number
}

type GetLocationParams = {
    location_id: number,
    query?: GetLocationQuery
}

type GetOrganizationLocationsQuery = {
    limit?: number,
    offset?: number
}

type GetOrganizationLocationsParams = {
    organization_id: number,
    query?: GetOrganizationLocationsQuery
}

type CreateOrganizationLocationsParams = {
    organization_id: number,
    locations: Array<LocationTemplate>
}

type UpdateOrganizationLocationsParams = {
    organization_id: number,
    locations: Array<LocationTemplate>
}

type DeleteOrganizationLocationParams = {
    organization_id: number,
    location_id: number
}

type GetOrganizationLocationParams = {
    organization_id: number,
    location_id: number
}

type CreateOrganizationLocationParams = {
    organization_id: number,
    title: string,
    address: string,
    organization_data: Object
}

type UpdateOrganizationLocationParams = {
    organization_id: number,
    location_id: number,
    title: string,
    address: string,
    organization_data: Object
}

type CreateOrganizationLocationListParams = {
    organization_id: number,
    subscription_id: number
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
    latitude: string,
    longitude: string,
    tzid: string,
    organization_id: number,
    source_location_id: number,
    status: string,
    state: string,
    organization_data: Object
}

type GetLocationsData = Array<LocationSchema>

type CreateLocationsData = Array<LocationSchema>

type GetLocationData = [
    LocationSchema
]

type GetOrganizationLocationsData = Array<LocationSchema>

type CreateOrganizationLocationsData = Array<LocationSchema>

type UpdateOrganizaionLocationsData = Array<LocationSchema>

type DeleteOrganizationLocationData = [
    number
]

type GetOrganizationLocationData = [
    LocationSchema
]

type CreateOrganizationLocationData = [
    LocationSchema
]

type UpdateOrganizationLocationData = [
    LocationSchema
]

type CreateOrganizationLocationListData = [ // NEED TO CHECK
    number
]

export default class Locations extends Resource {
    /**
     * @api {get} /v1/locations
     * @apiName getLocations
     * @apiDescription Return all locations of the current customer's organization. For each location, return (id, title, specificity, locality,
                       admin_area_level_1/2, country, postal_code, latitude, longitude, formatted_address, state, status, timezone_id, source_location_id,
                       org_id, org_data)
     * @apiParam {GetLocationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocations({...})
     */
    getLocations(params: GetLocationsParams): APIPromise<GetLocationsData> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/locations${queryString}`);
    }

    /**
     * @api {post} /v1/locations
     * @apiName createLocations
     * @apiDescription Create new locations with the current_user's organization. JSON payload is an array. Mandatory fields are (title, locality,
                       admin_area_level_1, country, postal_code, latitude, longitude, formatted_address). Optional fields are (admin_area_level_2, status,
                       timezone_id). No check for update permission!
     * @apiParam {Array<LocationTemplate>} locations
     * @apiExample {js} Example:
     *             gigwalk.customers.createLocations({...})
     */
    createLocations(params: CreateLocationsParams): APIPromise<CreateLocationsData> {
        const data = {
            locations: params.locations
        };

        return this.client.post('/v1/locations', data);
    }

    /**
     * @api {get} /v1/locations/{location_id}
     * @apiName getLocation
     * @apiDescription Return info about the specified location Return (id, title, specificity, locality, admin_area_level_1/2, country, postal_code, latitude,
                       longitude, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} location_id
     * @apiParam {GetLocationQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getLocation({...})
     */
    getLocation(params: GetLocationParams): APIPromise<GetLocationData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/locations/${params.location_id}${queryString}`);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/locations
     * @apiName getOrganizationLocations
     * @apiDescription Return all locations of the specified organization. For each location, return (id, title, specificity, locality, admin_area_level_1/2,
                       country, postal_code, latitude, longitude, formatted_address, state, status, timezone_id, source_location_id, org_id, org_data)
     * @apiParam {Number} organization_id
     * @apiParam {GetOrganizationLocationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationLocations({...})
     */
    getOrganizationLocations(params: GetOrganizationLocationsParams): APIPromise<GetOrganizationLocationsData> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/locations${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/locations
     * @apiName createOrganizationLocations
     * @apiDescription Create new locations with the specified organization. JSON payload is an array. Mandatory fields are (title, locality,
                       admin_area_level_1, country, postal_code, latitude, longitude, formatted_address). Optional fields are (admin_area_level_2, status,
                       timezone_id). No check for create permission!
     * @apiParam {Number} organization_id
     * @apiParam {Array<LocationTemplate>} locations
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocations({...})
     */
    createOrganizationLocations(params: CreateOrganizationLocationsParams): APIPromise<CreateOrganizationLocationsData> {
        const data = {
            locations: params.locations
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/locations`, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/locations
     * @apiName updateOrganizaionLocations
     * @apiDescription Update locations of the specified organization. If location has been resolved already, update the location with JSON payload which
                       can be an array of (id, title, locality, admin_area_level_1/2, country, postal_code, latitude, longitude, formatted_address, status,
                       timezone_id). No check for update permission! No check for create permission!
     * @apiParam {Number} organization_id
     * @apiParam {Array<LocationTemplate>} locations
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizaionLocations({...})
     */
    updateOrganizaionLocations(params: UpdateOrganizationLocationsParams): APIPromise<UpdateOrganizaionLocationsData> {
        const data = {
            locations: params.locations
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/locations`, data);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/locations/{location_id}
     * @apiName deleteOrganizationLocation
     * @apiDescription Delete location Locations are never deleted, only related metadata. No check for delete permission.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganizationLocation({...})
     */
    deleteOrganizationLocation(params: DeleteOrganizationLocationParams): APIPromise<DeleteOrganizationLocationData> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/locations/${params.location_id}`);
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
    getOrganizationLocation(params: GetOrganizationLocationParams): APIPromise<GetOrganizationLocationData> {
        return this.client.get(`/v1/organizations/${params.organization_id}/locations/${params.location_id}`);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/locations/geocode
     * @apiName createOrganizationLocation
     * @apiDescription This endpoint adds metadata items to organization location metadata, as well as creates a new location with the address and title.
     * @apiParam {Number} organization_id
     * @apiParam {String} title
     * @apiParam {String} address
     * @apiParam {Object} organization_data
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocation({...})
     */
    createOrganizationLocation(params: CreateOrganizationLocationParams): APIPromise<CreateOrganizationLocationData> {
        const data = {
            address: params.address,
            title: params.title,
            organization_data: params.organization_data
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/locations/geocode`, data);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/locations/geocode/{location_id}
     * @apiName updateOrganizationLocation
     * @apiDescription This endpoint adds metadata items to organization location metadata, as well as modifies the address or title of the location.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiParam {String} title
     * @apiParam {String} address
     * @apiParam {Object} organization_data
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationLocation({...})
     */
    updateOrganizationLocation(params: UpdateOrganizationLocationParams): APIPromise<UpdateOrganizationLocationData> {
        const data = {
            address: params.address,
            title: params.title,
            organization_data: params.organization_data
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/locations/geocode/${params.location_id}`, data);
    }

    /**
     * @api {post} /v1/organizations/{organization_id}/subscriptions/{subscription_id}/locations
     * @apiName createOrganizationLocationList
     * @apiDescription If a project doesn't already have an ad-hoc location list, a new ad-hoc list is created and assigned to the project.
                       The new location is added to this ad-hoc list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganizationLocationList({...})
     */
    createOrganizationLocationList(params: CreateOrganizationLocationListParams): APIPromise<CreateOrganizationLocationListData> {
        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions/${params.subscription_id}/locations`);
    }
}
