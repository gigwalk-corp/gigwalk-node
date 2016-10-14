// import schema from '../src/api/organizationSearch/organizationSearch-schema.json';

describe('Organization Search', () => {
    it('should be able to search organizations', (done) => {
        const apiPromise = gigwalk.organizationSearch.search({
            query: {
                q: 'Gig*',
                size: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
