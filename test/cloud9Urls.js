import Cloud9Urls from '../src/api/cloud9Urls/index';
import axios from 'axios';
// import schema from '../src/api/cloud9Urls/cloud9Urls-schema.json';

describe('Cloud9 URLs', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const cloud9Urls = new Cloud9Urls(client);

    const organizationID: number = 4;

    it('should be able to get cloud9 URLs', (done) => {
        cloud9Urls.get({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
});
