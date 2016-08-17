import Organizations from '../src/api/organizations/index';
import axios from 'axios';
import schema from '../src/api/organizations/organizations-schema.json';
import schemaEmpty from '../src/api/empty-schema.json';

describe('Organizations', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const organizations = new Organizations(client);

    const randString: string = Math.random().toString(36).substring(10);
    let organizationID: number;

    it('should be able to get all organizations', (done) => {
        organizations.getOrganizations({
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
    }).timeout(10000);
    it('should be able create an organization', (done) => {
        organizations.createOrganization({
            organization: {
                organization_name: 'string',
                type: 'CLIENT',
                email: `${randString}@gmail.com`,
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                organizationID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able update a specific organization', (done) => {
        organizations.updateOrganization({
            organization_id: organizationID,
            organization: {
                organization_name: 'string 2'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able get a specific organization', (done) => {
        organizations.getOrganization({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able delete a specific organization', (done) => {
        organizations.deleteOrganization({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaEmpty);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
