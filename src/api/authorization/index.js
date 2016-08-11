// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';

type ForgotPasswordParams = {
    email: string
}

type ResetPasswordParams = {
    email: string,
    password: string,
    token: string,
    check_expired?: boolean
}

type ForgotPasswordData = null

type ResetPasswordData = null

export default class Authorization extends Resource {

    /**
     * @api {post} /v1/forgot_password
     * @apiName forgotPassword
     * @apiDescription Sends an email to the customer to reset their password. Authorization is not required.
     * @apiParam {String} email
     * @apiExample {js} Example:
     *             gigwalk.authorization.forgotPassword({ ... })
     */
    forgotPassword(params: ForgotPasswordParams): APIPromise<ForgotPasswordData> {
        return this.client.post('/v1/forgot_password', { ...params });
    }

    /**
     * @api {post} /v1/reset_password
     * @apiName resetPassword
     * @apiDescription Reset the customer's password. Returns the customer's information.
     * @apiParam {String} email
     * @apiParam {String} password
     * @apiParam {String} token
     * @apiParam {Boolean} check_expired
     * @apiExample {js} Example:
     *             gigwalk.authorization.resetPassword({ ... })
     */
    resetPassword(params: ResetPasswordParams): APIPromise<ResetPasswordData> {
        return this.client.post('/v1/reset_password', { ...params });
    }
}
