// @flow
import createClient from '../createClient';
import type AxiosXHRConfig from 'axios';
import type { Dispatcher } from '../';

type ForgotPasswordParams = {
    email: string
}

const client = createClient();

export function createRequest(params: ForgotPasswordParams): AxiosXHRConfig {
    return {
        url: '/v1/forgot_password',
        type: 'post',
        data: params
    }
}

/**
 * @api {post} /v1/forgot_password
 * @apiName ForgotPassword
 * @apiDescription Sends an email to the customer to reset their password. Authorization not required
 * @apiParam {String} email
 * @apiExample {js} Example:
 *             gigwalk.authorization.forgotPassword({ ... })
 */
export default function forgotPassword(params: ForgotPasswordParams, dispatcher?: Dispatcher = client): Promise {
    return dispatcher(createRequest(params))
}