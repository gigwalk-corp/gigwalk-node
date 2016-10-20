// import schema from '../src/api/dataItems/dataItems-schema.json';

describe('Data Items', () => {
    const organizationID = 4;
    const subscriptionID = 100;

    it.skip('should be able to get data items using an aggregate', (done) => {
        const apiPromise = gigwalk.dataItems.get({
            aggregate: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search data items', (done) => {
        const apiPromise = gigwalk.dataItems.search({
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search data items using an organizationID', (done) => {
        const apiPromise = gigwalk.dataItems.searchForOrganizations({
            organization_id: organizationID,
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search data items using a subscriptionID', (done) => {
        const apiPromise = gigwalk.dataItems.searchForSubscriptions({
            subscription_id: subscriptionID,
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
