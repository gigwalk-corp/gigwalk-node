// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Response,
    RequestProjectReviewParams
} from './types';

export default class RequestProjectReview extends Resource {

    /**
     * @api {post} /v1/self_service/request_project_review request
     * @apiGroup RequestProjectReview
     * @apiName request
     * @apiDescription Schedule an email to the current user requesting a project review.
     * @apiParam {Number} organization_id
     * @apiParam {Number} project_id
     * @apiExample {js} Example:
     *             gigwalk.requestProjectReview.request({...})
     */
    request(params: RequestProjectReviewParams): APIPromise<Response> {
        const data = {
            organization_id: params.organization_id,
            project_id: params.project_id
        };

        return this.client.post('/v1/self_service/request_project_review', data);
    }
}
