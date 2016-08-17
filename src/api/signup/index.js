// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    CreateUserParams,
    BulkCreateUserParams,
    AcceptUserParams
} from './types';

export default class Signup extends Resource {

    /**
     * @api {post} /v1/signup create
     * @apiGroup Signup
     * @apiName create
     * @apiDescription Add a new Gigwalk user.
     * @apiParam {Object} user
     * @apiExample {js} Example:
     *             gigwalk.signup.create({...})
     */
    create(params: CreateUserParams): APIPromise<any> {
        return this.client.post('/v1/signup', { ...params.user });
    }

    /**
     * @api {post} /v1/signup/bulk bulkCreate
     * @apiGroup Signup
     * @apiName bulkCreate
     * @apiDescription Add a list of Gigwalk users.
     * @apiParam {Array<Object>} users
     * @apiExample {js} Example:
     *             gigwalk.signup.bulkCreate({...})
     */
    bulkCreate(params: BulkCreateUserParams): APIPromise<any> {
        const data = {
            users: params.users
        };

        return this.client.post('/v1/signup/bulk', data);
    }

    /**
     * @api {post} /v1/accept_invitation accept
     * @apiGroup Signup
     * @apiName accept
     * @apiDescription Accept an invitation to become a Gigwalk user.
     * @apiParam {String} first_name
     * @apiParam {String} last_name
     * @apiParam {String} password
     * @apiParam {String} invite_hash
     * @apiParam {Boolean} check_expired
     * @apiExample {js} Example:
     *             gigwalk.signup.accept({...})
     */
    accept(params: AcceptUserParams): APIPromise<any> {
        return this.client.post('/v1/accept_invitation', { ...params });
    }
}
