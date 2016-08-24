import DataTypeAttachment from '../src/api/dataTypeAttachment/index';
import axios from 'axios';
// import schema from '../src/api/organizationSearch/organizationSearch-schema.json';

describe('Data Type Attachment', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const dataTypeAttachment = new DataTypeAttachment(client);

    const randString: string = Math.random().toString(36).substring(10);
    const dataTypeID: number = 50;

    it('should be able to create a data type attachment', (done) => {
        dataTypeAttachment.create({
            data_type_id: dataTypeID,
            attachment: {
                url: randString,
                file_type: 'image/gif'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to delete a data type attachment', (done) => { // only works sometimes??
        dataTypeAttachment.delete({
            data_type_id: dataTypeID,
            url: randString
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
