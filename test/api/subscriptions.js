import schema from '../../src/api/subscriptions/subscriptions-schema.json';
import schemaSearch from '../../src/api/subscriptions/subscriptions_search-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Subscriptions', () => {
    const organizationID = 4;
    let subscriptionID;
    let subscriptionID2;

    it('should be able to create a subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.bulkCreate({
            organization_id: organizationID,
            subscriptions: [{
                title: createMoniker(),
                description: createMoniker(),
                start_date: '2200-1-1',
                end_date: '2201-1-1'
            }, {
                title: createMoniker(),
                description: createMoniker(),
                start_date: '2200-1-1',
                end_date: '2201-1-1'
            }]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            subscriptionID = res.data.data[0].id;
            subscriptionID2 = res.data.data[1].id;
            done();
        }).catch(done);
    });

    it('should be able to get subscriptions', (done) => {
        const apiPromise = gigwalk.subscriptions.getAll({
            organization_id: organizationID,
            query: {
                state: 'ACTIVE',
                offset: 0,
                limit: 10,
                sort_order: 'asc',
                sort_field: 'title',
                dashboard_visible: 1
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to clone a specific subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.clone({
            organization_subscription_id: subscriptionID,
            action: 'CLONE'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to update a specific subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.update({
            organization_subscription_id: subscriptionID,
            version_id: 2,
            subscription: {
                title: 'string 2'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a specific organization subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.updateForOrganization({
            organization_id: organizationID,
            organization_subscription_id: subscriptionID,
            version_id: 2,
            subscription: {
                title: 'string 2'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.get({
            organization_subscription_id: subscriptionID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search subscriptions with params', (done) => {
        const apiPromise = gigwalk.subscriptions.searchWithParams({
            organization_id: organizationID,
            query_string: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaSearch);
            done();
        }).catch(done);
    });

    it('should be able to search subscriptions with a field', (done) => {
        const apiPromise = gigwalk.subscriptions.searchWithField({
            organization_id: organizationID,
            search_field: 'title',
            query_string: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaSearch);
            done();
        }).catch(done);
    });

    it('should be able to search subscriptions', (done) => {
        const apiPromise = gigwalk.subscriptions.search({
            organization_id: organizationID,
            query_string: 'gnt'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaSearch);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a specific subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.delete({
            organization_subscription_id: subscriptionID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });

    it('should be able to delete a specific organization subscription', (done) => {
        const apiPromise = gigwalk.subscriptions.deleteForOrganization({
            organization_id: organizationID,
            organization_subscription_id: subscriptionID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
