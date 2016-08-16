import CustomerStatistics from '../src/api/customerStatistics/index';
import axios from 'axios';
import schema from '../src/api/organizationMetadata/organizationMetadata-schema.json';

describe.only('Customer Statistics', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const customerStatistics = new CustomerStatistics(client);

    const customerID: number = 100;
    const customerEmail: string = 'platform_admin@gigwalk.com';
    const ticketID: number = 11696865;

    it('should be able to ', (done) => {
        customerStatistics.getByID({
            customer_id: customerID
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(10000);
    it('should be able to ', (done) => {
        customerStatistics.getByEmail({
            email: customerEmail
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(10000);
    it('should be able to ', (done) => {
        customerStatistics.get()
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(10000);
    it.skip('should be able to ', (done) => {
        customerStatistics.getByTicket({
            ticket_id: ticketID
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    });
});
