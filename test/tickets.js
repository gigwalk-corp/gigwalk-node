import Tickets from '../src/api/tickets/index';
import axios from 'axios';
import schema from '../src/api/tickets/tickets-schema.json';
import schemaAlt from '../src/api/tickets/tickets_alt-schema.json';

describe('Tickets', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const tickets = new Tickets(client);

    const organizationID: number = 4;
    const subscriptionID: number = 1;
    const customerID: number = 1;
    const groupID: number = 1;
    let ticketID: number;

    it('should be able to get current customer\'s tickets', (done) => {
        tickets.getAllForCurrentCustomer()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all tickets for a specific customer', (done) => {
        tickets.getAllForCustomer({
            customer_id: customerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(20000);
    it('should be able to get all tickets available to customer', (done) => {
        tickets.getAll({
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                ticketID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a specific ticket', (done) => {
        tickets.get({
            ticket_id: ticketID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a specific tickets events', (done) => {
        tickets.getEvents({
            ticket_id: ticketID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaAlt);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all tickets in an organizaiton', (done) => {
        tickets.getAllForOrganization({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all tickets in a subscription', (done) => {
        tickets.getAllForSubscription({
            subscription_id: subscriptionID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to get all tickets in an area', (done) => { // CANT DO WITH PLATFORM ADMIN
        tickets.getAllInArea({
            map_lat: 0,
            map_lon: 0,
            radius: 100,
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update a ticket\'s execution state', (done) => {
        tickets.updateWithState({
            ticket_id: ticketID,
            execution_state: 'NO_ISSUES'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get edit a specific ticket', (done) => {
        tickets.update({
            ticket_id: ticketID,
            action: 'edit',
            time_estimate: 60
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get assign a specific ticket', (done) => {
        tickets.update({
            ticket_id: ticketID,
            action: 'assign',
            ticket_ids: [
                ticketID
            ],
            customer_id: customerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to create a new ticket data item', (done) => { // CANT DO WITH PLATFORM ADMIN
        tickets.createDataItem({
            ticket_id: ticketID,
            data_item: {
                data_type_id: 0,
                observation_target_id: 0,
                data_item_value: [],
                timestamp: 0,
                latitude: 0,
                longitude: 0,
                template_id: 0,
                device_id: 0,
                app_version: 0,
                user_agent: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to delete a data item', (done) => { // CANT DO WITH PLATFORM ADMIN
        tickets.deleteDataItem({

        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to clone a specific ticket', (done) => {
        tickets.clone({
            ticket_id: ticketID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to submit a ticket', (done) => { // CANT DO WITH PLATFORM ADMIN
        tickets.submit({
            ticket_id: ticketID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search tickets by group', (done) => {
        tickets.searchForGroup({
            group_id: groupID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search organization tickets', (done) => {
        tickets.searchForOrganization({
            organization_id: organizationID,
            query_string: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data.data.search_results).to.be.an('array');
                expect(res.data.data.total_records).to.be.a('number');
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search organiation tickets with field', (done) => {
        tickets.searchWithFieldForOrganization({
            organization_id: organizationID,
            search_field: 'title',
            query_string: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data.data).to.be.an('array');
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search tickets with ID', (done) => {
        tickets.searchWithID({
            ticket_id: ticketID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search tickets', (done) => {
        tickets.search({
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search tickets matching criteria', (done) => {
        tickets.searchWithCriteriaForOrganization({
            organization_id: organizationID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to search tickets in subscription', (done) => {
        tickets.searchForSubscription({
            subscription_id: subscriptionID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
