import DoubleOptin from '../src/api/doubleOptin/index';
import axios from 'axios';
// import schema from '../src/api/doubleOptin/doubleOptin-schema.json';

describe('Double Optin Tickets', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const doubleOptin = new DoubleOptin(client);

    const customerId: number = 100;
    const ticketId: number = 11696866;

    it('should be able to get all applications for the current customer', (done) => {
        doubleOptin.getForCurrentCustomer()
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all applications for a customer', (done) => {
        doubleOptin.getForCustomer({
            customer_id: customerId
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a customer applying to an optin ticket', (done) => {
        doubleOptin.get({
            customer_id: customerId,
            ticket_id: ticketId
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all customers applying to an optin ticket', (done) => {
        doubleOptin.getAll({
            ticket_id: ticketId
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to apply to a customer from an optin ticket', (done) => {
        doubleOptin.apply({
            ticket_id: ticketId
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to remove a customer from an optin ticket', (done) => {
        doubleOptin.remove({
            ticket_id: ticketId,
            customer_id: customerId
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to bulk remove customers from an optin ticket', (done) => {
        doubleOptin.bulkRemove({
            ticket_id: ticketId,
            customer_ids: [
                customerId
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
