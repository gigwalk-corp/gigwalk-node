// import schema from '../src/api/twoWayRatings/twoWayRatings-schema.json';

describe('Two Way Ratings', () => {
    const organizationSubscriptionID = 8000;
    const workerID = 100;

    it.skip('should be able to rate', (done) => {
        const apiPromise = gigwalk.twoWayRatings.rate({
            organization_subscription_id: organizationSubscriptionID,
            rating: {
                rating: 5,
                comments: 'string'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to rate with a workerID', (done) => {
        const apiPromise = gigwalk.twoWayRatings.rateForWorker({
            organization_subscription_id: organizationSubscriptionID,
            worker_id: workerID,
            rating: {
                rating: 5,
                comments: 'string'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
