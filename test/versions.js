import Versions from '../src/api/versions';
import schema from '../src/api/versions/versions-schema.json';
import createClient from './support/client';

describe('versions', () => {
    const client = createClient({
        baseURL,
        headers: {
            Authorization: token
        }
    }, 'versions');
    const version = new Versions(client);

    it('should be able to return current versions for the api', (done) => {
        version.get()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.be.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);

    it('should fail if there is no auth token set', (done) => {
        // create a new Versions instance with a new client that doesn't have the headers set.
        const other = createClient({
            baseURL
        }, 'versions');
        const otherVersion = new Versions(other);
        otherVersion.get()
            .then(done)
            .catch((err) => {
                expect(err.response.data.message).to.be.equal('Not Authorized');
                expect(err.response.status).to.equal(401);
                done();
            });
    }).timeout(10000);
});
