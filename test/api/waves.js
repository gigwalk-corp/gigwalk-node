// import schema from '../src/api/waves/waves-schema.json';

describe('Waves', () => {
    const organizationSubscriptionWaveID = 100;

    it.skip('should be able to get a subscription wave sub-collection', (done) => {
        const apiPromise = gigwalk.waves.getSubCollection({
            organization_subscription_wave_id: organizationSubscriptionWaveID,
            sub_collection: 'summary',
            sub_sub_collection: 'location_id'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to get a subscription wave', (done) => {
        const apiPromise = gigwalk.waves.get({
            organization_subscription_wave_id: organizationSubscriptionWaveID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to create a subscription wave', (done) => {
        const apiPromise = gigwalk.waves.create({
            organization_subscription_wave_id: organizationSubscriptionWaveID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
