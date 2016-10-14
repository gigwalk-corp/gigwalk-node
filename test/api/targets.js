import schema from '../../src/api/targets/targets-schema.json';

describe('Targets', () => {
    const randString = Math.random().toString(36).substring(10);
    const organizationID = 4;
    let targetID;

    it('should be able to create a target', (done) => {
        const apiPromise = gigwalk.targets.create({
            organization_id: organizationID,
            observation_target: {
                observation_target_type_id: 1,
                title: 'string'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            targetID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it.skip('should be able to get a specific target', (done) => {
        const apiPromise = gigwalk.targets.get({
            organization_id: organizationID,
            observation_target_id: targetID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a specific target', (done) => {
        const apiPromise = gigwalk.targets.update({
            organization_id: organizationID,
            observation_target_id: targetID,
            observation_target: {
                title: randString
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search targets in an organization', (done) => {
        const apiPromise = gigwalk.targets.search({
            organization_id: organizationID,
            query_string: randString
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a specific target', (done) => {
        const apiPromise = gigwalk.targets.update({
            organization_id: organizationID,
            observation_target_id: targetID,
            observation_target: {
                status: 'INACTIVE' // NOT SURE IF THIS IS THE CORRECT WAY TO DELETE
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
