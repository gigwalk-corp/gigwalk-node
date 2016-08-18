// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    ForgotPasswordParams,
    ResetPasswordParams
} from './types';

export default class Authorization extends Resource {

    /**
     * @api {get} /v1/auth get
     * @apiGroup Authorization
     * @apiName get
     * @apiDescription Generate or regenerate authorization info for the current user.
     * @apiExample {js} Example:
     *             gigwalk.authorization.get({ ... })
     */
    get(): APIPromise<any> {
        return this.client.get('/v1/auth');
    }

    /**
     * @api {post} /v1/auth create
     * @apiGroup Authorization
     * @apiName create
     * @apiDescription Generate or regenerate authorization info for the current user.
     * @apiExample {js} Example:
     *             gigwalk.authorization.create({ ... })
     */
    create(): APIPromise<any> {
        return this.client.post('/v1/auth');
    }

    /**
     * @api {post} /v1/forgot_password forgotPassword
     * @apiGroup Authorization
     * @apiName forgotPassword
     * @apiDescription Sends an email to the customer to reset their password. Authorization is not required.
     * @apiParam {String} email
     * @apiExample {js} Example:
     *             gigwalk.authorization.forgotPassword({ ... })
     */
    forgotPassword(params: ForgotPasswordParams): APIPromise<null> {
        return this.client.post('/v1/forgot_password', { ...params });
    }

    /**
     * @api {post} /v1/reset_password resetPassword
     * @apiGroup Authorization
     * @apiName resetPassword
     * @apiDescription Reset the customer's password. Returns the customer's information.
     * @apiParam {String} email
     * @apiParam {String} password
     * @apiParam {String} token
     * @apiParam {Boolean} check_expired
     * @apiExample {js} Example:
     *             gigwalk.authorization.resetPassword({ ... })
     */
    resetPassword(params: ResetPasswordParams): APIPromise<null> {
        return this.client.post('/v1/reset_password', { ...params });
    }
}
