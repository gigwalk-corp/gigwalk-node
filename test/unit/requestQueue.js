import RequestQueue from '../../src/requestQueue';
import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('RequestQueue', () => {
    const sandbox = sinon.sandbox.create();
    let requestQueue;
    let mock;

    beforeEach(() => {
        requestQueue = new RequestQueue();
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        sandbox.reset();
    });

    it('should process requests in order of addition', () => {
        const clock = sandbox.useFakeTimers();
        const firstRequest = {
            url: '/v1/tickets',
            method: 'get'
        };
        const secondRequest = {
            url: '/v1/certifications/12',
            method: 'delete'
        };

        const users = [{ id: 1, email: 'marc@gigwalk.com' }];
        mock.onGet('/v1/tickets').reply(200, users);
        mock.onDelete('/v1/certifications/12').reply(500);

        const firstPromise = requestQueue.add(firstRequest);
        const secondPromise = requestQueue.add(secondRequest);

        expect(requestQueue.dispatchQueue.length).to.equal(2);
        expect(requestQueue.activeRequests.size).to.equal(2);

        clock.tick(1);
        expect(requestQueue.dispatchQueue.length).to.equal(1);

        clock.tick(1);
        expect(requestQueue.dispatchQueue.length).to.equal(0);

        return Promise.all([
            expect(firstPromise).to.eventually.contain.all.keys({ status: 200, data: users }),
            expect(secondPromise).to.be.rejected
        ]);
    });

    it('should prevent duplicate outgoing requests', () => {
        sandbox.stub(requestQueue, 'checkQueue');

        const request = {
            url: '/v1/certifications',
            method: 'put',
            data: {
                title: 'FBI',
                description: 'Female Body Inspector'
            }
        };
        const duplicateRequest = {
            method: 'put',
            data: {
                description: 'Female Body Inspector',
                title: 'FBI'
            },
            url: '/v1/certifications'
        };

        const firstPromise = requestQueue.add(request);
        const secondPromise = requestQueue.add(duplicateRequest);

        expect(requestQueue.dispatchQueue.length).to.equal(1);
        expect(requestQueue.activeRequests.size).to.equal(1);
        expect(firstPromise).to.equal(secondPromise);
    });
});
