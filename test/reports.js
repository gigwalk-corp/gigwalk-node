import Reports from '../src/api/reports/index';
import axios from 'axios';
// import schema from '../src/api/reports/reports-schema.json';

describe('Reports', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const reports = new Reports(client);

    const reportID: number = 100;

    it.skip('should be able to get a report', (done) => {
        reports.get({
            report_id: reportID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
