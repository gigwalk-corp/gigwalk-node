import Groups from '../src/api/groups/index';
import axios from 'axios';
import schema from '../src/api/groups/groups-schema.json';
import schemaEmpty from '../src/api/empty-schema.json';
import schemaDelete from '../src/api/delete-schema.json';

describe.only('Groups', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const groups = new Groups(client);

    const randString: string = Math.random().toString(36).substring(10);
    const organizationID: number = 4;
    const customerID: number = 1;
    let groupID: number;
    let groupID2: number;

    it('should be able to get all location lists in an organization', (done) => {
        groups.getForOrganization({
            organization_id: organizationID,
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                groupID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.create({
            organization_id: organizationID,
            group: {
                parent_id: groupID,
                name: randString,
                organization_data: {}
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                groupID2 = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.getHierchy()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaEmpty);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.getSubgroups({
            group_id: groupID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.addMember({
            group_id: groupID2,
            member: {
                role: 'MEMBER',
                customer_id: customerID
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.getMembers({
            group_id: groupID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.updateMembers({
            group_id: groupID2,
            action: 'update',
            members: [{
                role: 'MEMBER',
                customer_id: customerID
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all location lists in an organization', (done) => {
        groups.removeMember({
            group_id: groupID2,
            customer_id: customerID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    });
    it('should be able to get all location lists in an organization', (done) => {
        groups.clone({
            group_id: groupID2,
            parent_id: groupID2,
            suffix: randString
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get all location lists in an organization', (done) => {
        groups.update({
            organization_id: organizationID,
            group_id: groupID2,
            group: {
                name: randString.substring(0, 8)
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get all location lists in an organization', (done) => {
        groups.get({
            organization_id: organizationID,
            group_id: groupID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get all location lists in an organization', (done) => {
        groups.delete({
            organization_id: organizationID,
            group_id: groupID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    });
});
