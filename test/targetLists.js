import TargetLists from '../src/api/targetLists/index';
import axios from 'axios';
import schema from '../src/api/targetLists/targetLists-schema.json';
import schemaDelete from '../src/api/delete-schema.json';

describe('Target Lists', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const targetLists = new TargetLists(client);

    const organizationID: number = 4;
    let targetListID: number;
    let targetID: number;

    it('should be able to create an organization target list', (done) => {
        targetLists.createForOrganization({
            organization_id: organizationID,
            target_list: {
                name: 'string',
                observation_target_type: 1,
                observation_targets: [{
                    title: 'string'
                }]
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                targetListID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get all target lists', (done) => {
        targetLists.getAll()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get all organization target lists', (done) => {
        targetLists.getAllForOrganization({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get a specific organization target list', (done) => {
        targetLists.get({
            organization_id: organizationID,
            observation_target_list_id: targetListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get targets in a list', (done) => {
        targetLists.getTargets({
            target_list_id: targetListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                targetID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to remove targets to a list', (done) => {
        targetLists.updateTargets({
            target_list_id: targetListID,
            action: 'remove',
            target_ids: [
                targetID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to add targets from a list', (done) => {
        targetLists.updateTargets({
            target_list_id: targetListID,
            action: 'add',
            target_ids: [
                targetID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to update a specific target list', (done) => {
        targetLists.update({
            observation_target_list_id: targetListID,
            target_list: {
                observation_targets: []
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it.skip('should be able to search data items', (done) => {
        targetLists.searchDataItems({
            observation_target_id: targetID,
            location_id: 60,
            item_count: 1
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search targets in a list', (done) => {
        targetLists.searchList({
            target_list_id: targetListID,
            query_string: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to search observation targets in a list', (done) => {
        targetLists.searchObservationList({
            target_list_id: targetListID,
            query_string: 'string'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get a specific target list', (done) => {
        targetLists.get({
            observation_target_list_id: targetListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it.skip('should be able to delete a specific target list', (done) => {
        targetLists.delete({
            observation_target_list_id: targetListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
