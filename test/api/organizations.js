import schema from '../../src/api/organizations/organizations-schema.json';
import schemaEmpty from '../../src/api/empty-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Organizations', () => {
    let organizationID;

    it('should be able to get all organizations', (done) => {
        const apiPromise = gigwalk.organizations.getAll({
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

    it('should be able create an organization', (done) => {
        const apiPromise = gigwalk.organizations.create({
            organization: {
                organization_name: createMoniker(),
                type: 'CLIENT',
                email: `${createMoniker()}@gigwalk.com`
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            organizationID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able update a specific organization', (done) => {
        const apiPromise = gigwalk.organizations.update({
            organization_id: organizationID,
            organization: {
                organization_name: createMoniker()
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able get a specific organization', (done) => {
        const apiPromise = gigwalk.organizations.get({
            organization_id: organizationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able delete a specific organization', (done) => {
        const apiPromise = gigwalk.organizations.delete({
            organization_id: organizationID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaEmpty);
            done();
        }).catch(done);
    });
});
