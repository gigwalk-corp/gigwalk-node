// import schema from '../src/api/organizationSearch/organizationSearch-schema.json';

describe('Data Type Attachment', () => {
    const randString = Math.random().toString(36).substring(10);
    const dataTypeID = 50;

    it('should be able to create a data type attachment', (done) => {
        const apiPromise = gigwalk.dataTypeAttachment.create({
            data_type_id: dataTypeID,
            attachment: {
                url: randString,
                file_type: 'image/gif'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a data type attachment', (done) => {
        const apiPromise = gigwalk.dataTypeAttachment.delete({
            data_type_id: dataTypeID,
            url: randString
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
