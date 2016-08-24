import Waves from '../src/api/waves/index';
import axios from 'axios';
// import schema from '../src/api/waves/waves-schema.json';

describe('Waves', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const waves = new Waves(client);

    const organizationSubscriptionWaveID: number = 100;

    it.skip('should be able to get a subscription wave sub-collection', (done) => {
        waves.getSubCollection({
            organization_subscription_wave_id: organizationSubscriptionWaveID,
            sub_collection: 'summary',
            sub_sub_collection: 'location_id'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to get a subscription wave', (done) => {
        waves.get({
            organization_subscription_wave_id: organizationSubscriptionWaveID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to create a subscription wave', (done) => {
        waves.create({
            organization_subscription_wave_id: organizationSubscriptionWaveID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
