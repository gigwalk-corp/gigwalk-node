import Targets from '../src/api/targets/index';
import axios from 'axios';
import schema from '../src/api/targets/targets-schema.json';

describe('Targets', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const targets = new Targets(client);

    const randString: string = Math.random().toString(36).substring(10);
    const organizationID: number = 4;
    let targetID: number;

    it('should be able to create a target', (done) => {
        targets.createOrganizationTarget({
            organization_id: organizationID,
            observation_target: {
                observation_target_type_id: 1,
                title: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                targetID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(5000);
    it.skip('should be able to get a specific target', (done) => {
        targets.getOrganizationTarget({
            organization_id: organizationID,
            observation_target_id: targetID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update a specific target', (done) => {
        targets.updateOrganizationTarget({
            organization_id: organizationID,
            observation_target_id: targetID,
            observation_target: {
                title: randString
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search targets in an organization', (done) => {
        targets.searchOrganizationTargets({
            organization_id: organizationID,
            query_string: randString
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to delete a specific target', (done) => {
        targets.updateOrganizationTarget({
            organization_id: organizationID,
            observation_target_id: targetID,
            observation_target: {
                status: 'INACTIVE' // NOT SURE IF THIS IS THE CORRECT WAY TO DELETE
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
