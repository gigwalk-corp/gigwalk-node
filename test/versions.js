import Versions from '../src/api/versions';
import axios from 'axios';
import schema from '../src/api/versions/versions-schema.json';

describe('versions', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const version = new Versions(client);

    it('should be able to return current versions for the api', (done) => {
        version.get()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.be.jsonSchema(schema);
                done();
            })
            .catch(done);
    });

    it('should fail if there is no auth token set', (done) => {
        // create a new Versions instance with a new client that doesn't have the headers set.
        const other = axios.create({
            baseURL
        });
        const otherVersion = new Versions(other);
        otherVersion.get()
            .then(done)
            .catch((err) => {
                expect(err.response.data.message).to.be.equal('Not Authorized');
                expect(err.response.status).to.equal(401);
                done();
            });
    });
});
