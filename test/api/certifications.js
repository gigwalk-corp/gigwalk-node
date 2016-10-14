// @flow
import schema from '../../src/api/certifications/certifications-schema.json';

describe('Certifications', () => {
    const randString: string = Math.random().toString(36).substring(10);

    let certificationID;
    let certificationID2;

    const organizationID = 4;
    const customerID = 1;

    it('should be able to create certifications', (done) => {
        const apiPromise = gigwalk.certifications.create({
            certifications: [
                {
                    description: randString,
                    title: randString,
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                },
                {
                    description: randString.substr(0, 9),
                    title: randString.substr(0, 9),
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                }
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            certificationID = res.data.data[0].id;
            certificationID2 = res.data.data[1].id;
            done();
        }).catch(done);
    });

    it('should be able to get all certifications', (done) => {
        const apiPromise = gigwalk.certifications.getAll({
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific certifiation', (done) => {
        const apiPromise = gigwalk.certifications.get({
            certification_id: certificationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
    
    it('should be able to edit a specific certification', (done) => {
        const apiPromise = gigwalk.certifications.update({
            certification_id: certificationID,
            certification: {
                description: randString.substr(0, 8),
                title: randString.substr(0, 8),
                type: 'ASSIGNED_CERT',
                state: 'ACTIVE'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to remove a certification from a customer', (done) => {
        const apiPromise = gigwalk.certifications.removeFromCustomer({
            organization_id: organizationID,
            customer_id: customerID,
            certification_ids: [
                certificationID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to add a certification to a customer', (done) => {
        const apiPromise = gigwalk.certifications.addToCustomer({
            organization_id: organizationID,
            customer_id: customerID,
            certification_ids: [
                certificationID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a customers certifications', (done) => {
        const apiPromise = gigwalk.certifications.getAllForCustomer({
            organization_id: organizationID,
            customer_id: customerID,
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be create certifications for an organization', (done) => {
        const apiPromise = gigwalk.certifications.createForOrganization({
            organization_id: organizationID,
            certifications: [
                {
                    description: 'test post',
                    title: 'test post',
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                }
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get all certifications for an organization', (done) => {
        const apiPromise = gigwalk.certifications.getAllForOrganization({
            organization_id: organizationID,
            query: {
                limit: 2
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to edit a certification for an organiztion', (done) => {
        const apiPromise = gigwalk.certifications.updateForOrganization({
            organization_id: organizationID,
            certifications: [
                {
                    id: 0,
                    description: 'test put',
                    title: 'test put',
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                }
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to create certifications for an organization from a file', (done) => {
        const apiPromise = gigwalk.certifications.uploadForOrganization({
            organization_id: organizationID,
            s3_keys: [
                'null'
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a certification for an organization', (done) => {
        const apiPromise = gigwalk.certifications.bulkDeleteForOrganization({
            organization_id: organizationID,
            certification_ids: [
                certificationID
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a specific certification', (done) => {
        const apiPromise = gigwalk.certifications.delete({
            certification_id: certificationID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
