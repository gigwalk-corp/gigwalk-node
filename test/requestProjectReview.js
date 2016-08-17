import RequestProjectReview from '../src/api/requestProjectReview/index';
import axios from 'axios';
import schema from '../src/api/requestProjectReview/requestProjectReview-schema.json';

describe.only('Request Project Review', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const requestProjectReview = new RequestProjectReview(client);

    const organizationID: number = 4;
    const projectID: number = 8139140;

    it('should be able to request project review', (done) => {
        requestProjectReview.request({
            organization_id: organizationID,
            project_id: projectID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
