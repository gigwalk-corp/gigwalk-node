import LocationLists from '../src/api/locationLists/index';
import axios from 'axios';
// import schema from '../src/api/certifications/certifications-schema.json';

describe('Loction Lists', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const locationLists = new LocationLists(client);

    const organizationID: number = 4;
    const locationIDs: Array<number> = [60, 61, 62];
    let locationListID: number;
    let locationListID2: number;
    let fileUploadID: number;

    it('should be able to get all location lists in an organization', (done) => {
        locationLists.getOrganizationLocationLists({
            organization_id: organizationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to create a new location list', (done) => {
        locationLists.createOrganizationLocationList({
            organization_id: organizationID,
            location_list: {
                name: 'string',
                status: 'ACTIVE',
                locations: []
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                locationListID = res.data.data[0].id;
                done();
            })
            .catch(done);
    });
    it('should be able to get a specific location list', (done) => {
        locationLists.getLocationList({
            organization_location_list_id: locationListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update a specific location list', (done) => {
        locationLists.updateLocationList({
            organization_location_list_id: locationListID,
            location_list: {
                name: 'string2'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to add locations to a list', (done) => {
        locationLists.addLocationsToList({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0],
                locationIDs[1],
                locationIDs[2]
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to get locations in a list', (done) => {
        locationLists.getLocationsInList({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0]
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to search locations in a list', (done) => {
        locationLists.searchLocationList({
            organization_location_list_id: locationListID,
            query_string: 'test'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to remove locations in a list', (done) => {
        locationLists.removeLocationsFromList({
            organization_location_list_id: locationListID,
            locations: [
                locationIDs[0]
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to delete a location from a list', (done) => {
        locationLists.deleteLocationFromList({
            organization_location_list_id: locationListID,
            location_id: locationIDs[1]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to delete a location from an organization list', (done) => {
        locationLists.deleteLocationFromList({
            organization_location_list_id: locationListID,
            location_id: locationIDs[2]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to upload a location list from a file', (done) => {
        locationLists.createOrganizationLocationListUsingFile({
            organization_id: organizationID,
            location_list_name: 'string',
            s3_keys: [
                'test'
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                locationListID2 = res.data.data[0].id;
                done();
            })
            .catch(done);
    });
    it('should be able to get info about a lists file upload', (done) => {
        locationLists.getFileInfoForLocationList({
            location_list_id: locationListID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                fileUploadID = res.data.data[0].file_uploads[0].id;
                done();
            })
            .catch(done);
    });
    it('should be able to get info about an organization lists file upload', (done) => {
        locationLists.getFileInfoForOrganizationLocationList({
            organization_id: organizationID,
            location_list_id: locationListID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to update location addresses', (done) => {
        locationLists.updateLocationAddress({
            file_upload_id: fileUploadID,
            location_list_id: locationListID2
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to update location adresses via ID', (done) => {
        locationLists.getFileInfoForOrganizationLocationList({
            organization_id: organizationID,
            location_list_id: locationListID2,
            location_id: 0
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it('should be able to delete a specific location list', (done) => {
        locationLists.deleteLocationList({
            organization_location_list_id: locationListID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to delete a specific organization location list', (done) => {
        locationLists.deleteOrganizationLocationLists({
            organization_id: organizationID,
            location_list_ids: [
                locationListID2
            ]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
