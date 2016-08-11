// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type OrganizationTemplate = {
    organization_name: string,
    type: string,
    email: string,
    needs_core?: boolean,
    core_customer_account?: string,
    core_private_workforce?: string,
    config?: {
        logo_uri: string,
        hours_after_due: number
    },
    cloud9urls?: Array<{
        name: string,
        url: string,
        customer_id: number
    }>
}

type DeleteOrganizationParams = {
    organization_id: number
}

type GetOrganizationParams = {
    organization_id: number
}

type UpdateOrganizationParams = {
    organization_id: number,
    organization: OrganizationTemplate
}

type GetOrganizationsQuery = {
    limit?: number,
    offset?: number,
    order_by?: string,
    order_dir?: string
}

type GetOrganizationsParams = {
    query?: GetOrganizationsQuery
}

type CreateOrganizationParams = {
    organization: OrganizationTemplate
}

type OrganizationSchema = {
    organization_name: string,
    id: number,
    type: string,
    date_updated: string,
    user_count: number,
    status: string,
    vertical_type: string,
    core_customer_account: boolean,
    core_private_workforce: boolean,
    needs_core: boolean,
    cloud9urls: Object,
    created_user: {
        email: string,
        first_name: string,
        last_name: string
    },
    stats: {
        projects: {
            draft_count: number,
            active_count: number,
            completed_count: number,
            archived_count: number,
            canceled_count: number
        },
        resources: {
            certification_count: number,
            location_count: number,
            target_count: number
        },
        team: {
            group_count: number,
            user_count: number
        },
        tickets: {
            scheduled_count: number,
            assigned_count: number,
            unassigned_count: number,
            started_count: number,
            submitted_count: number
        }
    },
    config: {
        logo_uri: string,
        is_crossmark_org: boolean,
        invitation_ttl: number,
        locale: string,
        targets_enabled: boolean,
        force_timing_template: boolean,
        week_start_day: number,
        hours_after_due: number,
        max_weekly_hours: number,
        cannot_opt_out: boolean,
        autoassign: {
            enabled: boolean,
            use_work_history: boolean,
            ft_priority: boolean,
            groups_required: boolean,
            radius_km: number,
            bundling_days: Object,
        },
        push_notifications: {
            enabled: boolean
        },
        two_way_rating: {
            enabled: boolean,
            rating_email_template: string,
            max_creator_response_days: number,
            max_worker_response_days: number,
            max_comment_length: number,
            max_rating_emails: number
        }
    }
}

type DeleteOrganizationData = null

type GetOrganizationData = [
    OrganizationSchema
]

type UpdateOrganizationData = [
    OrganizationSchema
]

type GetOrganizationsData = Array<OrganizationSchema>

type CreateOrganizationData = [ // NEED TO CHECK
    OrganizationSchema
]

export default class Organzations extends Resource {
    /**
     * @api {delete} /v1/organizations/{organization_id}
     * @apiName deleteOrganization
     * @apiDescription Delete organization.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteOrganization({...})
     */
    deleteOrganization(params: DeleteOrganizationParams): APIPromise<DeleteOrganizationData> {
        return this.client.delete(`/v1/organizations/${params.organization_id}`);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}
     * @apiName getOrganization
     * @apiDescription Get organization.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganization({...})
     */
    getOrganization(params: GetOrganizationParams): APIPromise<GetOrganizationData> {
        return this.client.get(`/v1/organizations/${params.organization_id}`);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}
     * @apiName updateOrganization
     * @apiDescription Update organization info. The endpoint can also be used to update the company logo. A file with name
                       'logo' has to be added in a multipart form in order to do that. For example, the following curl:
                       - curl -X PUT http://stage-api.apps.gigwalk.com/v1/organizations/7 -F logo=@path/to/file.png --user user:password
     * @apiParam {Number} organization_id
     * @apiParam {OrganizationTemplate} organization
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganization({...})
     */
    updateOrganization(params: UpdateOrganizationParams): APIPromise<UpdateOrganizationData> {
        return this.client.put(`/v1/organizations/${params.organization_id}`, { ...params.organization });
    }

    /**
     * @api {get} /v1/organizations
     * @apiName getOrganizations
     * @apiDescription Get all organizations. Capable of returning paginated results.
     * @apiParam {GetOrganizationsQuery} query
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizations({...})
     */
    getOrganizations(params: GetOrganizationsParams): APIPromise<GetOrganizationsData> {
        const queryString = (params) ? this.queryStringForSearchObject(params.query) : '';

        return this.client.get(`/v1/organizations${queryString}`);
    }

    /**
     * @api {post} /v1/organizations
     * @apiName createOrganization
     * @apiDescription Crete organization. Only super-admins and above can create or update organization info.
     * @apiParam {OrganizationTemplate} organization
     * @apiExample {js} Example:
     *             gigwalk.customers.createOrganization({...})
     */
    createOrganization(params: CreateOrganizationParams): APIPromise<CreateOrganizationData> {
        return this.client.post('/v1/organizations', { ...params.organization });
    }
}
