import DataItems from '../src/api/dataItems/index';
import axios from 'axios';
// import schema from '../src/api/dataItems/dataItems-schema.json';

describe('Data Items', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const dataItems = new DataItems(client);

    const organizationID: number = 4;
    const subscriptionID: number = 100;

    it.skip('should be able to get data items using an aggregate', (done) => {
        dataItems.get({
            aggregate: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to search data items', (done) => {
        dataItems.search({
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to search data items using an organizationID', (done) => {
        dataItems.searchForOrganizations({
            organization_id: organizationID,
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to search data items using a subscriptionID', (done) => {
        dataItems.searchForSubscriptions({
            subscription_id: subscriptionID,
            query: {
                search_type: 'date_range',
                limit: 2,
                start_date: '2012-1-1',
                end_date: '2220-1-1',
                timezone: 'UTC'
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
