// @flow
import Resource from '../resource';
import type { APIResponse } from '../resource';

type GetCurrentBalanceParams = {
    organization_id: number
};

type AddFundsParams = {
    organization_id: number,
    stripe_token: string,
    amount: number,
}

export default class Payments extends Resource {
    /**
     * @api {get} /v1/organizations/:organization_id/payments get
     * @apiGroup Payments
     * @apiName getCurrentBalance
     * @apiDescription Get the organization's current balance
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.payments.getCurrentBalance({...})
     */
    getCurrentBalance(params: GetCurrentBalanceParams): APIResponse<[{ current_balance: number }]> {
        return this.client.get(`/v1/organizations/${params.organization_id}/payments`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/payments post
     * @apiGroup Payments
     * @apiName addFunds
     * @apiDescription Add funds to an organization's account
     * @apiParam {Number} organization_id
     * @apiParam {String} stripe_token
     * @apiParam {Number} amount
     * @apiExample {js} Example:
     *             gigwalk.payments.addFunds({...})
     */
    addFunds(params: AddFundsParams): APIResponse<void> {
        const { organization_id, ...data } = params;
        return this.client.post(`/v1/organizations/${organization_id}/payments`, data);
    }
}
