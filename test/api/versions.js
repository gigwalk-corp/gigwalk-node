import schema from '../../src/api/versions/versions-schema.json';

describe('versions', () => {
    it('should be able to return current versions for the api', (done) => {
        const apiPromise = gigwalk.versions.get();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.be.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should fail if there is no auth token set', (done) => {
        const apiPromise = gigwalk.versions.get();

        apiPromise.then(done)
            .catch((err) => {
                expect(err.response.data.message).to.be.equal('Not Authorized');
                expect(err.response.status).to.equal(401);
                done();
            });
    });
});
