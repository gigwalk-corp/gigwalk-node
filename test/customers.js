import Customers from '../src/api/customers/index';
import axios from 'axios';
import schema from '../src/api/customers/customers-schema.json';
import schemaSearch from '../src/api/search/search-schema.json';
import schemaDelete from '../src/api/delete-schema.json';

describe('Customers', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const customers = new Customers(client);

    const organizationID: number = 4;
    const customerEmail: string = 'platform_admin@gigwalk.com';
    const deleteCustomerEmail: string = 'gselfservice_01@mailinator.com';
    const customerID: number = 100;
    const deleteCustomerID: number = 45182;
    const ticketID: number = 11491090;

    it('should be able to get a customer by email', (done) => {
        customers.getByEmail({
            organization_id: organizationID,
            customer_email: customerEmail
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get a customer by ID', (done) => {
        customers.getById({
            organization_id: organizationID,
            customer_id: customerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update a customer by Email', (done) => {
        customers.updateByEmail({
            organization_id: organizationID,
            customer_email: customerEmail,
            customer: {
                ideal_hours_week: 20,
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to update a customer by ID', (done) => {
        customers.updateById({
            organization_id: organizationID,
            customer_id: customerID,
            customer: {
                ideal_hours_week: 20,
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get the current customer', (done) => {
        customers.get()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to update the current customer', (done) => {
        customers.update({
            customer: {
                ideal_hours_week: 20
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get all customers from an organization', (done) => {
        customers.getAllForOrganization({
            organization_id: organizationID,
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to update customers in an organization', (done) => {
        customers.updateForOrganization({
            organization_id: 4,
            action: 'UPDATE',
            customers: [{
                customer_id: deleteCustomerID,
                ideal_hours_week: 20
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search for customers associated with a ticketID', (done) => {
        customers.search({
            ticket_ids: [
                ticketID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaSearch);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to delete a customer by email', (done) => {
        customers.deleteByEmail({
            organization_id: organizationID,
            customer_email: deleteCustomerEmail
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to delete a customer by ID', (done) => {
        customers.deleteById({
            organization_id: organizationID,
            customer_id: deleteCustomerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(30000);
});
