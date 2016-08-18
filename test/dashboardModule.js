import DashboardModule from '../src/api/dashboardModule/index';
import axios from 'axios';
// import schema from '../src/api/dashboardModule/dashboardModule-schema.json';

describe('Dashboard Module', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const dashboardModule = new DashboardModule(client);

    const organizationID: number = 4;

    it.skip('should be able to get an organization dashboard module', (done) => {
        dashboardModule.getForOranization({
            organization_id: organizationID,
            module_id: 'activity',
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to get a dashboard module', (done) => {
        dashboardModule.get({
            module_id: 'activity',
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
