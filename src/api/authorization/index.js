// @flow
import Resource from '../resource';

type ForgotPasswordParams = {
    email: string
}

type ResetPasswordParams = {
    email: string,
    password: string,
    token: string,
    check_expired: boolean
}

export default class Authorization extends Resource {

    /**
     * @api {post} /v1/forgot_password
     * @apiName ForgotPassword
     * @apiDescription Sends an email to the customer to reset their password. Authorization not required
     * @apiParam {String} email
     * @apiExample {js} Example:
     *             gigwalk.authorization.forgotPassword({ ... })
     */
    forgotPassword(params: ForgotPasswordParams): Promise<any> {
        return this.client.post('/v1/forgot_password', { ...params });
    }

    /**
     * @api {post} /v1/reset_password
     * @apiName ResetPassword
     * @apiDescription Reset the customer's password. Authorization is part of the JSON payload and not passed as a header. Returns the customer's info.
     * @apiParam {String} email
     * @apiParam {String} password
     * @apiParam {String} token
     * @apiParam {Boolean} check_expired
     * @apiExample {js} Example:
     *             gigwalk.authorization.resetPassword({ ... })
     */
    resetPassword(params: ResetPasswordParams): Promise<any> {
        return this.client.post('/v1/reset_password', { ...params });
    }
}
