import OrganizationSearch from '../src/api/organizationSearch/index';
import axios from 'axios';
// import schema from '../src/api/organizationSearch/organizationSearch-schema.json';

describe('Organization Search', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const organizationSearch = new OrganizationSearch(client);

    it('should be able to search organizations', (done) => {
        organizationSearch.search({
            query: {
                q: 'Gig*',
                size: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
