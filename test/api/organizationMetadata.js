import schema from '../../src/api/organizationMetadata/organizationMetadata-schema.json';

describe('Organization Metadata', () => {
    const randString = Math.random().toString(36).substring(10);
    const organizationID = 7;
    const metadataFieldID = 1;

    it('should be able to create metadata for an organization', (done) => {
        const apiPromise = gigwalk.organizationMetadata.create({
            organization_id: organizationID,
            name: randString
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get metadata for an organization', (done) => {
        const apiPromise = gigwalk.organizationMetadata.get({
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

    it('should be able to update metadata for an organization', (done) => {
        const apiPromise = gigwalk.organizationMetadata.update({
            organization_id: organizationID,
            organization_metadata_field_id: metadataFieldID,
            name: randString.substring(0, 8),
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

    it('should be able to get a metadata field for an organization', (done) => {
        const apiPromise = gigwalk.organizationMetadata.getField({
            organization_id: organizationID,
            organization_metadata_field_id: metadataFieldID,
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

    it('should be able to update a metadata field for an organization', (done) => {
        const apiPromise = gigwalk.organizationMetadata.updateField({
            organization_id: organizationID,
            organization_metadata_field_id: metadataFieldID,
            metadata: {
                randString
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
