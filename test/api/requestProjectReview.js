import schema from '../../src/api/requestProjectReview/requestProjectReview-schema.json';

describe('Request Project Review', () => {
    const organizationID = 4;
    const projectID = 8139140;

    /**
     * Blocked by https://gigwalk.myjetbrains.com/youtrack/issue/GWP-6074
     */
    it.skip('should be able to request project review', (done) => {
        const apiPromise = gigwalk.requestProjectReview.request({
            organization_id: organizationID,
            project_id: projectID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
