import TwoWayRatings from '../src/api/twoWayRatings/index';
import axios from 'axios';
// import schema from '../src/api/twoWayRatings/twoWayRatings-schema.json';

describe('Two Way Ratings', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const twoWayRatings = new TwoWayRatings(client);

    const organizationSubscriptionID: number = 8000;
    const workerID: number = 100;

    it.skip('should be able to rate', (done) => {
        twoWayRatings.rate({
            organization_subscription_id: organizationSubscriptionID,
            rating: {
                rating: 5,
                comments: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to rate with a workerID', (done) => {
        twoWayRatings.rateForWorker({
            organization_subscription_id: organizationSubscriptionID,
            worker_id: workerID,
            rating: {
                rating: 5,
                comments: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
