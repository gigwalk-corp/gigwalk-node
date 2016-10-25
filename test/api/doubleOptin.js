// import schema from '../src/api/doubleOptin/doubleOptin-schema.json';

describe('Double Optin Tickets', () => {
    const customerId = 100;
    const ticketId = 11696866;

    it('should be able to get all applications for the current customer', (done) => {
        const apiPromise = gigwalk.doubleOptin.getForCurrentCustomer();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all applications for a customer', (done) => {
        const apiPromise = gigwalk.doubleOptin.getForCustomer({
            customer_id: customerId
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a customer applying to an optin ticket', (done) => {
        const apiPromise = gigwalk.doubleOptin.get({
            customer_id: customerId,
            ticket_id: ticketId
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all customers applying to an optin ticket', (done) => {
        const apiPromise = gigwalk.doubleOptin.getAll({
            ticket_id: ticketId
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to apply to a customer from an optin ticket', (done) => {
        const apiPromise = gigwalk.doubleOptin.apply({
            ticket_id: ticketId
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to remove a customer from an optin ticket', (done) => {
        const apiPromise = gigwalk.doubleOptin.remove({
            ticket_id: ticketId,
            customer_id: customerId
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to bulk remove customers from an optin ticket', (done) => {
        const apiPromise = gigwalk.doubleOptin.bulkRemove({
            ticket_id: ticketId,
            customer_ids: [
                customerId
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
