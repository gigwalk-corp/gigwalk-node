import Customers from '../src/api/customers/index';
import axios from 'axios';
import schema from '../src/api/customers/customers-schema.json';
import schema_search from '../src/api/search/search-schema.json';
import schema_delete from '../src/api/delete-schema.json';

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
        customers.getCustomerWithEmail({
            organization_id: organizationID,
            customer_email: customerEmail
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to get a customer by ID', (done) => {
        customers.getCustomerWithID({
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
        customers.updateCustomerWithEmail({
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
    }).timeout(5000);
    it('should be able to update a customer by ID', (done) => {
        customers.updateCustomerWithID({
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
    }).timeout(5000);
    it('should be able to get the current customer', (done) => {
        customers.getCustomer()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to update the current customer', (done) => {
        customers.updateCustomer({
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
        customers.getOrganizationCustomers({
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
    }).timeout(5000);
    it('should be able to update customers in an organization', (done) => {
        customers.updateOrganizationCustomers({
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
        customers.searchCustomers({
            ticket_ids: [
                ticketID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema_search);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to delete a customer by email', (done) => {
        customers.deleteCustomerWithEmail({
            organization_id: organizationID,
            customer_email: deleteCustomerEmail
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema_delete);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to delete a customer by ID', (done) => {
        customers.deleteCustomerWithID({
            organization_id: organizationID,
            customer_id: deleteCustomerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema_delete);
                done();
            })
            .catch(done);
    }).timeout(5000);
});
