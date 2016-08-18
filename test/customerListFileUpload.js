import CustomerListFileUpload from '../src/api/customerListFileUpload/index';
import axios from 'axios';
import schema from '../src/api/customerListFileUpload/customerListFileUpload-schema.json';

describe('Customer List File Upload', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const customerListFileUpload = new CustomerListFileUpload(client);

    const organizationID: number = 4;
    let customerListFile: number;

    it('should be able to ', (done) => {
        customerListFileUpload.upload({
            organization_id: organizationID,
            customer_list_file: {
                name: 'string',
                key: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                customerListFile = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to ', (done) => {
        customerListFileUpload.get({
            customer_file_id: customerListFile
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to ', (done) => {
        customerListFileUpload.getForOrganization({
            organization_id: organizationID,
            customer_file_id: customerListFile
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
