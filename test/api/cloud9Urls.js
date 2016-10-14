// import schema from '../src/api/cloud9Urls/cloud9Urls-schema.json';

describe('Cloud9URLs', () => {

    const organizationID = 4;

    it('should be able to get cloud9 URLs', (done) => {
        const apiPromise = gigwalk.cloud9Urls.get({
            organization_id: organizationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
