describe('Customer Statistics', () => {
    const customerID = 100;
    const customerEmail = 'platform_admin@gigwalk.com';
    const ticketID = 11696865;

    it('should be able to get customer statistics by ID', (done) => {
        const apiPromise = gigwalk.customerStatistics.getByID({
            customer_id: customerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            done();
        }).catch(done);
    });

    it('should be able to get customer statistics by email', (done) => {
        const apiPromise = gigwalk.customerStatistics.getByEmail({
            email: customerEmail
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            done();
        }).catch(done);
    });

    it('should be able to get customer statistics', (done) => {
        const apiPromise = gigwalk.customerStatistics.get();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            done();
        }).catch(done);
    });

    it.skip('should be able to get customer statistics by ticket', (done) => {
        const apiPromise = gigwalk.customerStatistics.getByTicket({
            ticket_id: ticketID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            done();
        }).catch(done);
    });
});
