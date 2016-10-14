// import schema from '../src/api/dashboardModule/dashboardModule-schema.json';

describe('Dashboard Module', () => {

    const organizationID = 4;

    it.skip('should be able to get an organization dashboard module', (done) => {
        const apiPromise = gigwalk.dashboardModule.getForOranization({
            organization_id: organizationID,
            module_id: 'activity',
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to get a dashboard module', (done) => {
        const apiPromise = gigwalk.dashboardModule.get({
            module_id: 'activity',
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
