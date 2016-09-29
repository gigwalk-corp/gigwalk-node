import Search from '../src/api/search/index';
import axios from 'axios';
import schema from '../src/api/search/search-schema.json';

describe('Search', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const search = new Search(client);

    const organizationID: number = 4;

    it('should be able to search documents', (done) => {
        search.searchDocuments({
            query_string: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to create a search', (done) => {
        search.create()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.be.a('string');
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to search an organization', (done) => {
        search.searchOrganization({
            organization_id: organizationID,
            index_type: 'location_lists',
            query_string: 'walmart'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
});
