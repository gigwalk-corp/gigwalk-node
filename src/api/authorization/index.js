// @flow
import ResourceBase from '../resourceBase';

type ForgotPasswordParams = {
    email: string
}

type ResetPasswordParams = {
    email: string,
    password: string,
    token: string,
    check_expired: boolean
}

type ForgotPasswordData = null

type ResetPasswordData = null

export default class Authorization extends ResourceBase {

    /**
     * @api {post} /v1/forgot_password
     * @apiName ForgotPassword
     * @apiDescription Sends an email to the customer to reset their password. Authorization not required
     * @apiParam {String} email
     * @apiExample {js} Example:
     *             gigwalk.authorization.forgotPassword({ ... })
     */
    forgotPassword(params: ForgotPasswordParams): Promise<ForgotPasswordData> {
        const request: AxiosXHRConfig<any> = {
            url: '/v1/forgot_password',
            method: 'post',
            data: params
        };

        return this.dispatch(request);
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
    resetPassword(params: ResetPasswordParams): Promise<ResetPasswordData> {
        const request: AxiosXHRConfig<any> = {
            url: '/v1/reset_password',
            method: 'post',
            data: params
        };

        return this.dispatch(request);
    }
}
