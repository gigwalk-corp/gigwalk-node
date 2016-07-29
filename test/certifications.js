import Certifications from '../src/api/certifications/certifications';
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

    it('should be able to create cerfitications', () =>
        certifications.createCertifications([
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
        ])
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
                certificationID = res.data.data[0].id;
                certificationID2 = res.data.data[1].id;
            })
    );
    it('should be able to get all certifications', () =>
        certifications.getCertifications()
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get a specific certifiation', () =>
        certifications.getCertification(certificationID)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to edit a specific certification', () =>
        certifications.updateCertification(certificationID, {
            description: randString.substr(0, 8),
            title: randString.substr(0, 8),
            type: 'ASSIGNED_CERT',
            state: 'ACTIVE'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to remove a certification from a customer', () =>
        certifications.updateCustomerCertifications(organizationID, customerID, {
            action: 'remove',
            certification_ids: [
                certificationID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to add a certification to a customer', () =>
        certifications.updateCustomerCertifications(organizationID, customerID, {
            action: 'add',
            certification_ids: [
                certificationID
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get a customers certifications', () =>
        certifications.getCustomerCertifications(organizationID, customerID)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be create certifications for an organization', () =>
        certifications.createOrganizationCertifications(organizationID, [
            {
                description: 'test post',
                title: 'test post',
                type: 'ASSIGNED_CERT',
                state: 'ACTIVE'
            }
        ])
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to get all certifications for an organization', () =>
        certifications.getOrganizationCertifications(organizationID)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to edit a certification for an organiztion', () =>
        certifications.updateOrganizationCertifications(organizationID, [
            {
                id: 0,
                description: 'test put',
                title: 'test put',
                type: 'ASSIGNED_CERT',
                state: 'ACTIVE'
            }
        ])
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to create certifications for an organiztion from a file', () =>
        certifications.createOrganizationCertificationsFromFile(organizationID, [
            'null'
        ])
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to delete a certification for an organiztion', () =>
        certifications.deleteOrganizationCertifications(organizationID, [
            certificationID
        ])
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
    it('should be able to delete a specific certification', () =>
        certifications.deleteCertification(certificationID2)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.statusText).to.equal('OK');
                // expect(res.data).to.have.jsonSchema(schema);
            })
    );
});
