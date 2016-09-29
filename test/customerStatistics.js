import CustomerStatistics from '../src/api/customerStatistics/index';
import axios from 'axios';

describe('Customer Statistics', () => {
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

    it('should be able to get customer statistics by ID', (done) => {
        customerStatistics.getByID({
            customer_id: customerID
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(30000);
    it('should be able to get customer statistics by email', (done) => {
        customerStatistics.getByEmail({
            email: customerEmail
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(30000);
    it('should be able to get customer statistics', (done) => {
        customerStatistics.get()
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
        .catch(done);
    }).timeout(30000);
    it.skip('should be able to get customer statistics by ticket', (done) => {
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
