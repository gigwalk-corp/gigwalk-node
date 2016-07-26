// @flow
import createClient from '../createClient';
import type AxiosXHRConfig from 'axios';
import type { Dispatcher } from '../';

export type ResetPasswordParams = {
    email: string,
    password: string,
    token: string,
    check_expired: boolean
}

const client = createClient();

export function createRequest(params: ResetPasswordParams): AxiosXHRConfig {
    return {
        url: '/v1/reset_password',
        type: 'post',
        data: params
    }
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
export default function resetPassword(params: ResetPasswordParams, dispatcher?: Dispatcher = client): Promise {
    return dispatcher(createRequest(params))
}