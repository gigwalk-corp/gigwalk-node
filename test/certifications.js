import schema from '../src/certifications-schema.json';
import Certifications from '../src/cerfitications';
import { expect } from 'chai';

describe('Certifications', () => {
    const certifications = new Certifications({
        baseURL,
        auth: token
    });

    const randString : string = Math.random().toString(36).substring(10);
    let certificationID : number;
    let certificationID2 : number;
    const organizationID : number = 4;
    const customerID : number = 1;

    it('should be able to post new cerfitications to the server', () =>
        certifications.postCertifications({
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
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
                certificationID = resp.data.data[0].id;
                certificationID2 = resp.data.data[1].id;
            })
    );
    it('should be able to get all the certifications from the server', () =>
        certifications.getCertifications()
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get a specific certifiation from the server ', () =>
        certifications.getCertificationID(certificationID)
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to edit a specific certification from the server', () =>
        certifications.putCertificationID(certificationID, {
            description: randString.substr(0, 8),
            title: randString.substr(0, 8),
            type: 'ASSIGNED_CERT',
            state: 'ACTIVE'
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to remove a certification to a customer to the server', () =>
        certifications.putCustomerCertifications(organizationID, customerID, {
            action: 'remove',
            certification_ids: [
                certificationID
            ]
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to add a certification to a customer to the server', () =>
        certifications.putCustomerCertifications(organizationID, customerID, {
            action: 'add',
            certification_ids: [
                certificationID
            ]
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get a customers certifications from the server', () =>
        certifications.getCustomerCertifications(organizationID, customerID)
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be post new certifications for an organization to the server', () =>
        certifications.postOrganizationCertifications(organizationID, {
            certifications: [
                {
                    description: 'test post',
                    title: 'test post',
                    type: 'ASSIGNED_CERT',
                    state: 'ACTIVE'
                }
            ]
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get an organizations certifications from the server', () =>
        certifications.getOrganizationCertifications(organizationID)
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to edit a certification for an organiztion from the server', () =>
        certifications.putOrganizationCertifications(organizationID, {
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
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to upload a certification for an organiztion to the server from a S3 file', () =>
        certifications.uploadOrganizationCertificationsFromS3(organizationID, {
            s3_keys: [
                'null'
            ]
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to delete a certification for an organiztion from the server', () =>
        certifications.deleteOrganizationCertifications(organizationID, {
            certification_ids: [
                certificationID
            ]
        })
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to delete a specific certification from the server', () =>
        certifications.deleteCertificationID(certificationID2)
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                // expect(resp.data).to.have.jsonSchema(schema);
            })
    );
});
