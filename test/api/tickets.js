import schema from '../../src/api/tickets/tickets-schema.json';
import schemaAlt from '../../src/api/tickets/tickets_alt-schema.json';

describe('Tickets', () => {
    const organizationID = 4;
    const subscriptionID = 1;
    const customerID = 1;
    const groupID = 1;
    let ticketID;

    it('should be able to get current customer\'s tickets', (done) => {
        const apiPromise = gigwalk.tickets.getAllForCurrentCustomer();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all tickets for a specific customer', (done) => {
        const apiPromise = gigwalk.tickets.getAllForCustomer({
            customer_id: customerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all tickets available to customer', (done) => {
        const apiPromise = gigwalk.tickets.getAll({
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            ticketID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get a specific ticket', (done) => {
        const apiPromise = gigwalk.tickets.get({
            ticket_id: ticketID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific tickets events', (done) => {
        const apiPromise = gigwalk.tickets.getEvents({
            ticket_id: ticketID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaAlt);
            done();
        }).catch(done);
    });

    it('should be able to get all tickets in an organizaiton', (done) => {
        const apiPromise = gigwalk.tickets.getAllForOrganization({
            organization_id: organizationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all tickets in a subscription', (done) => {
        const apiPromise = gigwalk.tickets.getAllForSubscription({
            subscription_id: subscriptionID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to get all tickets in an area', (done) => { // CANT DO WITH PLATFORM ADMIN
        const apiPromise = gigwalk.tickets.getAllInArea({
            map_lat: 0,
            map_lon: 0,
            radius: 100
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a ticket\'s execution state', (done) => {
        const apiPromise = gigwalk.tickets.updateWithState({
            ticket_id: ticketID,
            execution_state: 'NO_ISSUES'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get edit a specific ticket', (done) => {
        const apiPromise = gigwalk.tickets.update({
            ticket_id: ticketID,
            action: 'edit',
            time_estimate: 60
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get assign a specific ticket', (done) => {
        const apiPromise = gigwalk.tickets.update({
            ticket_id: ticketID,
            action: 'assign',
            ticket_ids: [
                ticketID
            ],
            customer_id: customerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to create a new ticket data item', (done) => { // CANT DO WITH PLATFORM ADMIN
        const apiPromise = gigwalk.tickets.createDataItem({
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
                user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a data item', (done) => { // CANT DO WITH PLATFORM ADMIN
        const apiPromise = gigwalk.tickets.deleteDataItem({});

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to clone a specific ticket', (done) => {
        const apiPromise = gigwalk.tickets.clone({
            ticket_id: ticketID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to submit a ticket', (done) => { // CANT DO WITH PLATFORM ADMIN
        const apiPromise = gigwalk.tickets.submit({
            ticket_id: ticketID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search tickets by group', (done) => {
        const apiPromise = gigwalk.tickets.searchForGroup({
            group_id: groupID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search organization tickets', (done) => {
        const apiPromise = gigwalk.tickets.searchForOrganization({
            organization_id: organizationID,
            query_string: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data.data.search_results).to.be.an('array');
            expect(res.data.data.total_records).to.be.a('number');
            done();
        }).catch(done);
    });

    it('should be able to search organization tickets with field', (done) => {
        const apiPromise = gigwalk.tickets.searchWithFieldForOrganization({
            organization_id: organizationID,
            search_field: 'title',
            query_string: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data.data).to.be.an('array');
            done();
        }).catch(done);
    });

    it('should be able to search tickets with ID', (done) => {
        const apiPromise = gigwalk.tickets.searchWithID({
            ticket_id: ticketID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search tickets', (done) => {
        const apiPromise = gigwalk.tickets.search({
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search tickets matching criteria', (done) => {
        const apiPromise = gigwalk.tickets.searchWithCriteriaForOrganization({
            organization_id: organizationID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search tickets in subscription', (done) => {
        const apiPromise = gigwalk.tickets.searchForSubscription({
            subscription_id: subscriptionID,
            search: {
                search_type: 'status',
                status: 'ASSIGNED'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
