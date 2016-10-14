import schema from '../../src/api/targetLists/targetLists-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';

describe('Target Lists', () => {
    const organizationID = 4;
    let targetListID;
    let targetID;

    it('should be able to create an organization target list', (done) => {
        const apiPromise = gigwalk.targetLists.createForOrganization({
            organization_id: organizationID,
            target_list: {
                name: 'string',
                observation_target_type: 1,
                observation_targets: [{
                    title: 'string'
                }]
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            targetListID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get all target lists', (done) => {
        const apiPromise = gigwalk.targetLists.getAll();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all organization target lists', (done) => {
        const apiPromise = gigwalk.targetLists.getAllForOrganization({
            organization_id: organizationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific organization target list', (done) => {
        const apiPromise = gigwalk.targetLists.get({
            organization_id: organizationID,
            observation_target_list_id: targetListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get targets in a list', (done) => {
        const apiPromise = gigwalk.targetLists.getTargets({
            target_list_id: targetListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            targetID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to remove targets to a list', (done) => {
        const apiPromise = gigwalk.targetLists.updateTargets({
            target_list_id: targetListID,
            action: 'remove',
            target_ids: [
                targetID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });

    it('should be able to add targets from a list', (done) => {
        const apiPromise = gigwalk.targetLists.updateTargets({
            target_list_id: targetListID,
            action: 'add',
            target_ids: [
                targetID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });

    it('should be able to update a specific target list', (done) => {
        const apiPromise = gigwalk.targetLists.update({
            observation_target_list_id: targetListID,
            target_list: {
                observation_targets: []
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search data items', (done) => {
        const apiPromise = gigwalk.targetLists.searchDataItems({
            observation_target_id: targetID,
            location_id: 60,
            item_count: 1
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search targets in a list', (done) => {
        const apiPromise = gigwalk.targetLists.searchList({
            target_list_id: targetListID,
            query_string: 'string'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search observation targets in a list', (done) => {
        const apiPromise = gigwalk.targetLists.searchObservationList({
            target_list_id: targetListID,
            query_string: 'string'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific target list', (done) => {
        const apiPromise = gigwalk.targetLists.get({
            observation_target_list_id: targetListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a specific target list', (done) => {
        const apiPromise = gigwalk.targetLists.delete({
            observation_target_list_id: targetListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
