import schema from '../../src/api/customers/customers-schema.json';
import schemaSearch from '../../src/api/search/search-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';

describe('Customers', () => {

    const organizationID = 4;
    const customerEmail = 'platform_admin@gigwalk.com';
    const deleteCustomerEmail = 'gselfservice_01@mailinator.com';
    const customerID = 100;
    const deleteCustomerID = 45182;
    const ticketID = 11491090;

    it('should be able to get a customer by email', (done) => {
        const apiPromise = gigwalk.customers.getByEmail({
            organization_id: organizationID,
            customer_email: customerEmail
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a customer by ID', (done) => {
        const apiPromise = gigwalk.customers.getById({
            organization_id: organizationID,
            customer_id: customerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a customer by Email', (done) => {
        const apiPromise = gigwalk.customers.updateByEmail({
            organization_id: organizationID,
            customer_email: customerEmail,
            customer: {
                ideal_hours_week: 20,
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a customer by ID', (done) => {
        const apiPromise = gigwalk.customers.updateById({
            organization_id: organizationID,
            customer_id: customerID,
            customer: {
                ideal_hours_week: 20
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get the current customer', (done) => {
        const apiPromise = gigwalk.customers.get();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update the current customer', (done) => {
        const apiPromise = gigwalk.customers.update({
            customer: {
                ideal_hours_week: 20
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all customers from an organization', (done) => {
        const apiPromise = gigwalk.customers.getAllForOrganization({
            organization_id: organizationID,
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update customers in an organization', (done) => {
        const apiPromise = gigwalk.customers.updateForOrganization({
            organization_id: 4,
            action: 'UPDATE',
            customers: [{
                customer_id: deleteCustomerID,
                ideal_hours_week: 20
            }]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search for customers associated with a ticketID', (done) => {
        const apiPromise = gigwalk.customers.search({
            ticket_ids: [
                ticketID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaSearch);
            done();
        }).catch(done);
    });

    it('should be able to delete a customer by email', (done) => {
        const apiPromise = gigwalk.customers.deleteByEmail({
            organization_id: organizationID,
            customer_email: deleteCustomerEmail
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });

    it('should be able to delete a customer by ID', (done) => {
        const apiPromise = gigwalk.customers.deleteById({
            organization_id: organizationID,
            customer_id: deleteCustomerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
