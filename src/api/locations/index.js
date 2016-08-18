// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Location,
    GetLocationsParams,
    CreateLocationsParams,
    GetLocationParams,
    GetOrganizationLocationsParams,
    CreateOrganizationLocationsParams,
    UpdateOrganizationLocationsParams,
    DeleteOrganizationLocationParams,
    GetOrganizationLocationParams,
    CreateOrganizationLocationParams,
    UpdateOrganizationLocationParams,
    CreateOrganizationLocationListParams
} from './types';

export default class Locations extends Resource {
    /**
     * @api {get} /v1/locations getAll
     * @apiGroup Locations
     * @apiName getAll
     * @apiDescription Return all locations of the current customer's organization. Capable of returning paginated results.
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.locations.getAll({...})
     */
    getAll(params: GetLocationsParams): APIPromise<Array<Location>> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/locations${queryString}`);
    }

    /**
     * @api {post} /v1/locations bulkCreate
     * @apiGroup Locations
     * @apiName bulkCreate
     * @apiDescription Create new locations with the current_user's organization. Currently does not check permissions.
     * @apiParam {Array<Object>} locations
     * @apiExample {js} Example:
     *             gigwalk.locations.bulkCreate({...})
     */
    bulkCreate(params: CreateLocationsParams): APIPromise<Array<Location>> {
        const data = {
            locations: params.locations
        };

        return this.client.post('/v1/locations', data);
    }

    /**
     * @api {get} /v1/locations/:location_id get
     * @apiGroup Locations
     * @apiName get
     * @apiDescription Return information about specified location. Capable of returning paginated results.
     * @apiParam {Number} location_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.locations.get({...})
     */
    get(params: GetLocationParams): APIPromise<[Location]> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/locations/${params.location_id}${queryString}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/locations getAllForOrganization
     * @apiGroup Locations
     * @apiName getAllForOrganization
     * @apiDescription Return all locations of the specified organization. Capable of returning paginated results.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.locations.getAllForOrganization({...})
     */
    getAllForOrganization(params: GetOrganizationLocationsParams): APIPromise<Array<Location>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/locations${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/locations bulkCreateForOrganization
     * @apiGroup Locations
     * @apiName bulkCreateForOrganization
     * @apiDescription Create new location(s) in organization. Currently does not check permissions.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Object>} locations
     * @apiExample {js} Example:
     *             gigwalk.locations.bulkCreateForOrganization({...})
     */
    bulkCreateForOrganization(params: CreateOrganizationLocationsParams): APIPromise<Array<Location>> {
        const data = {
            locations: params.locations
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/locations`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/locations bulkUpdateForOrganization
     * @apiGroup Locations
     * @apiName bulkUpdateForOrganization
     * @apiDescription Update locations of the specified organization. Currently does not check permissions.
     * @apiParam {Number} organization_id
     * @apiParam {Array<Object>} locations
     * @apiExample {js} Example:
     *             gigwalk.locations.bulkUpdateForOrganization({...})
     */
    bulkUpdateForOrganization(params: UpdateOrganizationLocationsParams): APIPromise<Array<Location>> {
        const data = {
            locations: params.locations
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/locations`, data);
    }

    /**
     * @api {delete} /v1/organizations/:organization_id/locations/:location_id deleteForOrganization
     * @apiGroup Locations
     * @apiName deleteForOrganization
     * @apiDescription Delete location. Only metadata is deleted. Currently does not check permissions.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.locations.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteOrganizationLocationParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/locations/${params.location_id}`);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/locations/:location_id getForOrganization
     * @apiGroup Locations
     * @apiName getForOrganization
     * @apiDescription Return information about the given location. Location should belong to the organization.
    * @apiParam {Number} organization_id
    * @apiParam {Number} location_id
     * @apiExample {js} Example:
     *             gigwalk.locations.getForOrganization({...})
     */
    getForOrganization(params: GetOrganizationLocationParams): APIPromise<[Location]> {
        return this.client.get(`/v1/organizations/${params.organization_id}/locations/${params.location_id}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/locations/geocode createForOrganization
     * @apiGroup Locations
     * @apiName createForOrganization
     * @apiDescription Adds metadata items to organization location metadata, as well as creates a new location with address and title.
     * @apiParam {Number} organization_id
     * @apiParam {String} title
     * @apiParam {String} address
     * @apiParam {Object} organization_data
     * @apiExample {js} Example:
     *             gigwalk.locations.createForOrganization({...})
     */
    createForOrganization(params: CreateOrganizationLocationParams): APIPromise<[Location]> {
        const data = {
            address: params.address,
            title: params.title,
            organization_data: params.organization_data
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/locations/geocode`, data);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/locations/geocode/:location_id updateForOrganization
     * @apiGroup Locations
     * @apiName updateForOrganization
     * @apiDescription Adds metadata items to organization location metadata, as well as creates a new location with address and title.
     * @apiParam {Number} organization_id
     * @apiParam {Number} location_id
     * @apiParam {String} title
     * @apiParam {String} address
     * @apiParam {Object} organization_data
     * @apiExample {js} Example:
     *             gigwalk.locations.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateOrganizationLocationParams): APIPromise<[Location]> {
        const data = {
            address: params.address,
            title: params.title,
            organization_data: params.organization_data
        };

        return this.client.put(`/v1/organizations/${params.organization_id}/locations/geocode/${params.location_id}`, data);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/subscriptions/:subscription_id/locations createListForOrganization
     * @apiGroup Locations
     * @apiName createListForOrganization
     * @apiDescription If a project doesn't have an ad-hoc location list, a new list is created and assigned to the project.
                       The new location is then added to the list.
     * @apiParam {Number} organization_id
     * @apiParam {Number} subscription_id
     * @apiExample {js} Example:
     *             gigwalk.locations.createListForOrganization({...})
     */
    createListForOrganization(params: CreateOrganizationLocationListParams): APIPromise<[number]> {
        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions/${params.subscription_id}/locations`);
    }
}
