import schema from '../../src/api/customerListFileUpload/customerListFileUpload-schema.json';

describe('Customer List File Upload', () => {
    const organizationID = 4;
    let customerListFile;

    it('should be able to upload a customer list file', (done) => {
        const apiPromise = gigwalk.customerListFileUpload.upload({
            organization_id: organizationID,
            customer_list_file: {
                name: 'string',
                key: 'string'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            customerListFile = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get a customer list file', (done) => {
        const apiPromise = gigwalk.customerListFileUpload.get({
            customer_file_id: customerListFile
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get an organization customer list file', (done) => {
        const apiPromise = gigwalk.customerListFileUpload.getForOrganization({
            organization_id: organizationID,
            customer_file_id: customerListFile
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
