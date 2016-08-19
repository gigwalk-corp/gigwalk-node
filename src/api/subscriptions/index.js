// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Subscription,
    ESSubcriptionSearch,
    DeleteSubscriptionParams,
    GetSubscriptionParams,
    CreateClonedSubscriptionParams,
    UpdateSubscriptionParams,
    CreateSubscriptionsParams,
    SearchSubscriptionsWithParamsParams,
    DeleteOrganizationSubscriptionParams,
    UpdateOrganizationSubscriptionParams,
    SearchSubscriptionsWithFieldParams,
    SearchSubscriptionsParams
} from './types';

export default class Subscriptions extends Resource {
    /**
     * @api {delete} /v1/organization_subscriptions/:organization_subscription_id delete
     * @apiGroup Subscriptions
     * @apiName delete
     * @apiDescription Delete the organizationSubscription. This is a hard delete.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.delete({...})
     */
    delete(params: DeleteSubscriptionParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organization_subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {get} /v1/organization_subscriptions/:organization_subscription_id get
     * @apiGroup Subscriptions
     * @apiName get
     * @apiDescription If specified, return information about the organizationSubscription. Otherwise, list all organizationSubscriptions of the organization.
                       Defaults to the current user's organization if no organizationID is specified.
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.get({...})
     */
    get(params: GetSubscriptionParams): APIPromise<[Subscription]> {
        return this.client.get(`/v1/organization_subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {post} /v1/organization_subscriptions/:organization_subscription_id clone
     * @apiGroup Subscriptions
     * @apiName clone
     * @apiDescription Create a new subscription by cloning the given organizationSubscription or schedule autoassignment for the subscription.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {String} [action='clone']
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.clone({...})
     */
    clone(params: CreateClonedSubscriptionParams): APIPromise<[Subscription]> {
        const data = {
            action: (params.action) ? params.action : 'clone'
        };

        return this.client.post(`/v1/organization_subscriptions/${params.organization_subscription_id}`, data);
    }

    /**
     * @api {put} /v1/organization_subscriptions/:organization_subscription_id update
     * @apiGroup Subscriptions
     * @apiName update
     * @apiDescription Update organizationSubscription.
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {Object} subscription
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.update({...})
     */
    update(params: UpdateSubscriptionParams): APIPromise<[Subscription]> {
        return this.client.put(`/v1/organization_subscriptions/${params.organization_subscription_id}`, { ...params.subscription });
    }

    /**
     * @api {post} /v1/organizations/:organization_id/subscriptions bulkCreate
     * @apiGroup Subscriptions
     * @apiName bulkCreate
     * @apiDescription Create new organizationSubscription(s). Maximum of five new subscriptions.
     * @apiParam {Number} organization_id
     * @apiParam {Object[]} subscriptions
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.bulkCreate({...})
     */
    bulkCreate(params: CreateSubscriptionsParams): APIPromise<Array<Subscription>> {
        const data = {
            projects: params.subscriptions
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions`, data);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/subscriptions/search searchWithParams
     * @apiGroup Subscriptions
     * @apiName searchWithParams
     * @apiDescription Search organizationSubscriptions. searchParameters should be in key op value (e.g. date_created > now; title = 'project_name').
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.searchWithParams({...})
     */
    searchWithParams(params: SearchSubscriptionsWithParamsParams): APIPromise<[]> {
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v1/organizations/${params.organization_id}/subscriptions/search`, data);
    }

    /**
     * @api {delete} /v1/organizations/:organization_id/subscriptions/:organization_subscription_id deleteForOrganization
     * @apiGroup Subscriptions
     * @apiName deleteForOrganization
     * @apiDescription Delete the specified project. Only DRAFT projects may be deleted.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.deleteForOrganization({...})
     */
    deleteForOrganization(params: DeleteOrganizationSubscriptionParams): APIPromise<[number]> {
        return this.client.delete(`/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/subscriptions/:organization_subscription_id updateForOrganization
     * @apiGroup Subscriptions
     * @apiName updateForOrganization
     * @apiDescription Modify project.
     * @apiParam {Number} organization_id
     * @apiParam {Number} organization_subscription_id
     * @apiParam {Number} version_id
     * @apiParam {Object} subscription
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.updateForOrganization({...})
     */
    updateForOrganization(params: UpdateOrganizationSubscriptionParams): APIPromise<[Subscription]> {
        return this.client.put(`/v1/organizations/${params.organization_id}/subscriptions/${params.organization_subscription_id}`, { ...params.subscription });
    }

    /**
     * @api {post} /v2/organizations/:organization_id/search/subscriptions/filters searchWithField
     * @apiGroup Subscriptions
     * @apiName searchWithField
     * @apiDescription Searches ES documents using searchField.
     * @apiParam {Number} organization_id
     * @apiParam {String} search_field
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.searchWithField({...})
     */
    searchWithField(params: SearchSubscriptionsWithFieldParams): APIPromise<{search_field: string, search_results: Object}> {
        const data = {
            search_field: params.search_field,
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/subscriptions/filters`, data);
    }

    /**
     * @api {post} /v2/organizations/:organization_id/search/subscriptions search
     * @apiGroup Subscriptions
     * @apiName search
     * @apiDescription Searches all strings in ES documents.
     * @apiParam {Number} organization_id
     * @apiParam {String} query_string
     * @apiExample {js} Example:
     *             gigwalk.subscriptions.search({...})
     */
    search(params: SearchSubscriptionsParams): APIPromise<ESSubcriptionSearch> {
        const data = {
            query_string: params.query_string
        };

        return this.client.post(`/v2/organizations/${params.organization_id}/search/subscriptions`, data);
    }
}
