import Subscriptions from '../src/api/subscriptions/index';
import axios from 'axios';
import schema from '../src/api/subscriptions/subscriptions-schema.json';

describe('Subscriptions', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const subscriptions = new Subscriptions(client);

    const organizationID: number = 4;
    let subscriptionID: number;
    let subscriptionID2: number;

    it('should be able to create a subscription', (done) => {
        subscriptions.createSubscriptions({
            organization_id: organizationID,
            subscriptions: [{
                title: 'string',
                description: 'string',
                start_date: '2200-1-1',
                end_date: '2201-1-1'
            },
            {
                title: 'string',
                description: 'string',
                start_date: '2200-1-1',
                end_date: '2201-1-1'
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                subscriptionID = res.data.data[0].id;
                subscriptionID2 = res.data.data[1].id;
                done();
            })
            .catch(done);
    }).timeout(5000);
    it.skip('should be able to clone a specific subscription', (done) => {
        subscriptions.createClonedSubscription({
            organization_subscription_id: subscriptionID,
            action: 'CLONE'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to update a specific subscription', (done) => {
        subscriptions.updateSubscription({
            organization_subscription_id: subscriptionID,
            version_id: 2,
            subscription: {
                title: 'string 2'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update a specific organization subscription', (done) => {
        subscriptions.updateOrganizationSubscription({
            organization_id: organizationID,
            organization_subscription_id: subscriptionID,
            version_id: 2,
            subscription: {
                title: 'string 2'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get a specific subscription', (done) => {
        subscriptions.getSubscription({
            organization_subscription_id: subscriptionID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to search subscriptions with params', (done) => {
        subscriptions.searchSubscriptionsWithParams({
            organization_id: organizationID,
            query_string: 'string',
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search subscriptions with a field', (done) => {
        subscriptions.searchSubscriptionsWithField({
            organization_id: organizationID,
            search_field: 'title',
            query_string: 'string',
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search subscriptions', (done) => {
        subscriptions.searchSubscriptions({
            organization_id: organizationID,
            query_string: 'string',
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to delete a specific subscription', (done) => {
        subscriptions.deleteSubscription({
            organization_subscription_id: subscriptionID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to delete a specific organization subscription', (done) => {
        subscriptions.deleteOrganizationSubscription({
            organization_id: organizationID,
            organization_subscription_id: subscriptionID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
