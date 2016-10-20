import schema from '../../src/api/locationLists/locationLists-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Location Lists', () => {
    const organizationID = 4;
    const locationIDs = [60, 61, 62];
    let locationListID;
    let locationListID2;
    let fileUploadID;

    it('should be able to get all location lists in an organization', (done) => {
        const apiPromise = gigwalk.locationLists.getForOrganization({
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

    it('should be able to create a new location list', (done) => {
        const apiPromise = gigwalk.locationLists.createForOrganization({
            organization_id: organizationID,
            location_list: {
                name: createMoniker(),
                status: 'ACTIVE',
                locations: []
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            locationListID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get a specific location list', (done) => {
        const apiPromise = gigwalk.locationLists.get({
            organization_location_list_id: locationListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a specific location list', (done) => {
        const apiPromise = gigwalk.locationLists.update({
            organization_location_list_id: locationListID,
            location_list: {
                name: 'string2'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to add locations to a list', (done) => {
        const apiPromise = gigwalk.locationLists.addLocations({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0],
                locationIDs[1],
                locationIDs[2]
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get locations in a list', (done) => {
        const apiPromise = gigwalk.locationLists.getLocations({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0]
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search locations in a list', (done) => {
        const apiPromise = gigwalk.locationLists.searchList({
            organization_location_list_id: locationListID,
            query_string: 'test'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to remove locations in a list', (done) => {
        const apiPromise = gigwalk.locationLists.removeLocations({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0]
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.all.keys('data', 'errors', '_metadata', '_meta', 'code', 'gw_api_response', 'warnings');
            expect(res.data.data).to.be.an('array');
            done();
        }).catch(done);
    });

    it('should be able to delete a location from a list', (done) => {
        const apiPromise = gigwalk.locationLists.deleteLocation({
            organization_location_list_id: locationListID,
            location_id: locationIDs[1]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a location from an organization list', (done) => {
        const apiPromise = gigwalk.locationLists.deleteLocationForOrganization({
            organization_location_list_id: locationListID,
            location_id: locationIDs[2]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to upload a location list from a file', (done) => {
        const apiPromise = gigwalk.locationLists.createForOrganizationWithFile({
            organization_id: organizationID,
            location_list_name: createMoniker(),
            s3_keys: [
                'gnt-s3-key'
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            locationListID2 = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get information about a lists file upload', (done) => {
        const apiPromise = gigwalk.locationLists.getFileInfo({
            location_list_id: locationListID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            fileUploadID = res.data.data[0].file_uploads[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get information about an organization lists file upload', (done) => {
        const apiPromise = gigwalk.locationLists.getFileInfoForOrganization({
            organization_id: organizationID,
            location_list_id: locationListID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get file upload unresolved locations', (done) => {
        const apiPromise = gigwalk.locationLists.getUnresolved({
            file_upload_id: fileUploadID,
            location_list_id: locationListID2
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.all.keys('data', 'metadata');
            expect(res.data.data).to.be.an('array');
            expect(res.data.metadata).to.be.an('object');
            done();
        }).catch(done);
    });

    it.skip('should be able to update location adresses via ID', (done) => {
        const apiPromise = gigwalk.locationLists.updateAddress({
            file_upload_id: fileUploadID,
            location_list_id: locationListID,
            location_id: locationIDs[0],
            csv: 1,
            key: 'gnt-s3-key'
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a specific location list', (done) => {
        const apiPromise = gigwalk.locationLists.delete({
            organization_location_list_id: locationListID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to delete a specific organization location list', (done) => {
        const apiPromise = gigwalk.locationLists.deleteForOrganization({
            organization_id: organizationID,
            location_list_ids: [
                locationListID2
            ]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
