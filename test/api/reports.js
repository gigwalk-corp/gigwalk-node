// import schema from '../src/api/reports/reports-schema.json';

describe('Reports', () => {
    const reportID: number = 100;

    it.skip('should be able to get a report', (done) => {
        const apiPromise = gigwalk.reports.get({
            report_id: reportID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
