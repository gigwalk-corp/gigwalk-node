import FileJob from '../src/api/fileJob/index';
import axios from 'axios';
import schema from '../src/api/fileJob/fileJob-schema.json';

describe('File Job', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const fileJob = new FileJob(client);

    const fileJobID: number = 100;

    it('should be able to get a file job', (done) => {
        fileJob.get({
            file_job_id: fileJobID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
});
