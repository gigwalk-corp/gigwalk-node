import schema from '../../src/api/fileJob/fileJob-schema.json';

describe('File Job', () => {
    const fileJobID = 100;

    it('should be able to get a file job', (done) => {
        const apiPromise = gigwalk.fileJob.get({
            file_job_id: fileJobID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
