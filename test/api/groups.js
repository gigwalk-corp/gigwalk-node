import schema from '../../src/api/groups/groups-schema.json';
import schemaEmpty from '../../src/api/empty-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Groups', () => {
    const organizationID = 4;
    const customerID = 1;
    let groupID;
    let groupID2;

    it('should be able to get all groups in an organization', (done) => {
        const apiPromise = gigwalk.groups.getForOrganization({
            organization_id: organizationID,
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            groupID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to create a new group', (done) => {
        const apiPromise = gigwalk.groups.create({
            organization_id: organizationID,
            group: {
                parent_id: groupID,
                name: createMoniker(),
                organization_data: {}
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            groupID2 = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get the heirchy of a group', (done) => {
        const apiPromise = gigwalk.groups.getHierchy();

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaEmpty);
            done();
        }).catch(done);
    });

    it('should be able to get the subgroups of a group', (done) => {
        const apiPromise = gigwalk.groups.getSubgroups({
            group_id: groupID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to add a member to a group', (done) => {
        const apiPromise = gigwalk.groups.addMember({
            group_id: groupID2,
            member: {
                role: 'MEMBER',
                customer_id: customerID
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all members in a group', (done) => {
        const apiPromise = gigwalk.groups.getMembers({
            group_id: groupID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update members in a group', (done) => {
        const apiPromise = gigwalk.groups.updateMembers({
            group_id: groupID2,
            action: 'update',
            members: [{
                role: 'MEMBER',
                customer_id: customerID
            }]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to remove a member from a group', (done) => {
        const apiPromise = gigwalk.groups.removeMember({
            group_id: groupID2,
            customer_id: customerID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });

    it('should be able to clone a group', (done) => {
        const apiPromise = gigwalk.groups.clone({
            group_id: groupID2,
            parent_id: groupID2,
            suffix: 'clone'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a group', (done) => {
        const apiPromise = gigwalk.groups.update({
            organization_id: organizationID,
            group_id: groupID2,
            group: {
                name: createMoniker()
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific group', (done) => {
        const apiPromise = gigwalk.groups.get({
            organization_id: organizationID,
            group_id: groupID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a group', (done) => {
        const apiPromise = gigwalk.groups.delete({
            organization_id: organizationID,
            group_id: groupID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
