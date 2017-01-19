import sinon from 'sinon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Payments from '../../src/api/payments';
import Resource from '../../src/api/resource';

describe('Payments', () => {
    const sandbox = sinon.sandbox.create();
    const organizationId = 4;
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
        sandbox.restore();
    });

    it('should be a subclass of Resource', () => {
        const payments = new Payments();
        expect(payments).to.be.an.instanceOf(Resource);
    });

    describe('addFunds', () => {
        it('should make a POST request to /v1/organizations/:organization_id/payments', () => {
            const postSpy = sandbox.spy(axios, 'post');
            const payments = new Payments(axios);
            const params = {
                organization_id: organizationId,
                stripe_token: 'test',
                amount: 100,
            };

            mock.onPost(/\/v1\/organizations\/\d+\/payments/).reply(200);

            const promise = payments.addFunds(params);
            expect(postSpy).to.have.been.calledWithExactly(`/v1/organizations/${organizationId}/payments`, { stripe_token: 'test', amount: 100 });
            return expect(promise).to.be.fulfilled;
        });
    });

    describe('getCurrentBalance', () => {
        it('should make a GET request to /v1/organizations/:organization_id/payments', () => {
            const getSpy = sandbox.spy(axios, 'get');
            const payments = new Payments(axios);
            const params = {
                organization_id: organizationId,
            };

            mock.onGet(/\/v1\/organizations\/\d+\/payments/).reply(200);

            const promise = payments.getCurrentBalance(params);
            expect(getSpy).to.have.been.calledWithExactly(`/v1/organizations/${organizationId}/payments`);
            return expect(promise).to.be.fulfilled;
        });
    });
});
