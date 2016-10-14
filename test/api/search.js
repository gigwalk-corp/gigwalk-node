import schema from '../../src/api/search/search-schema.json';

describe('Search', () => {
    const organizationID = 4;

    it('should be able to search documents', (done) => {
        const apiPromise = gigwalk.search.searchDocuments({
            query_string: 'string'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to create a search', (done) => {
        const apiPromise = gigwalk.search.create();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.be.a('string');
            done();
        }).catch(done);
    });

    it('should be able to search an organization', (done) => {
        const apiPromise = gigwalk.search.searchOrganization({
            organization_id: organizationID,
            index_type: 'location_lists',
            query_string: 'walmart'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
