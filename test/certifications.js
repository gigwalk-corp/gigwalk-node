import Certifications from '../src/api/certifications/index';
import axios from 'axios';
import schema from '../src/api/certifications/certifications-schema.json';

describe('Certifications', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const certifications = new Certifications(client);

    const randString: string = Math.random().toString(36).substring(10);
    let certificationID: number;
    let certificationID2: number;
    const organizationID: number = 4;
    const customerID: number = 1;

    it('should be able to create cerfitications', (done) => {
        certifications.createCertifications({
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
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                certificationID = res.data.data[0].id;
                certificationID2 = res.data.data[1].id;
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to get all certifications', (done) => {
        certifications.getCertifications({
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to get a specific certifiation', (done) => {
        certifications.getCertification({
            certification_id: certificationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to edit a specific certification', (done) => {
        certifications.updateCertification({
            certification_id: certificationID,
            certification: {
                description: randString.substr(0, 8),
                title: randString.substr(0, 8),
                type: 'ASSIGNED_CERT',
                state: 'ACTIVE'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to remove a certification from a customer', (done) => {
        certifications.updateCustomerCertifications({
            organization_id: organizationID,
            customer_id: customerID,
            action: 'remove',
            certification_ids: [
                certificationID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to add a certification to a customer', (done) => {
        certifications.updateCustomerCertifications({
            organization_id: organizationID,
            customer_id: customerID,
            action: 'add',
            certification_ids: [
                certificationID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get a customers certifications', (done) => {
        certifications.getCustomerCertifications({
            organization_id: organizationID,
            customer_id: customerID,
            query: {
                limit: 2
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be create certifications for an organization', (done) => {
        certifications.createOrganizationCertifications({
            organization_id: organizationID,
            certifications: [
                {
                    description: 'test post',
                    title: 'test post',
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                }
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get all certifications for an organization', (done) => {
        certifications.getOrganizationCertifications({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
    it('should be able to edit a certification for an organiztion', (done) => {
        certifications.updateOrganizationCertifications({
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
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to create certifications for an organiztion from a file', (done) => {
        certifications.createOrganizationCertificationsFromFile({
            organization_id: organizationID,
            s3_keys: [
                'null'
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to delete a certification for an organization', (done) => { // SEEMS TO BE RETURNING 500 RIGHT NOW
        certifications.deleteOrganizationCertifications({
            organization_id: organizationID,
            certification_ids: [
                certificationID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to delete a specific certification', (done) => {
        certifications.deleteCertification({
            certification_id: certificationID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(5000);
});
