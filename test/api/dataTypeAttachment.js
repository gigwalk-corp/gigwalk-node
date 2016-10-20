// import schema from '../src/api/organizationSearch/organizationSearch-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Data Type Attachment', () => {
    const url = createMoniker();
    const dataTypeID = 50;

    it('should be able to create a data type attachment', (done) => {
        const apiPromise = gigwalk.dataTypeAttachment.create({
            data_type_id: dataTypeID,
            attachment: {
                url,
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
            url
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
