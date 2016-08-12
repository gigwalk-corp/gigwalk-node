import Locations from '../src/api/locations/index';
import axios from 'axios';
import schema from '../src/api/locations/locations-schema.json';
import schemaDelete from '../src/api/delete-schema.json';

describe('Loctions', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const locations = new Locations(client);

    const randString: string = Math.random().toString(36).substring(10);
    const organizationID: number = 4;
    let locationID: number;

    it('should be able to get all locations in an organization', (done) => {
        locations.getLocations({
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
    it('should be able to get all organization locations in an organization', (done) => {
        locations.getOrganizationLocations({
            organization_id: organizationID,
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
    it('should be able to create a new location', (done) => {
        locations.createLocations({
            locations: [{
                title: 'string',
                locality: null,
                administrative_area_level_1: null,
                country: null,
                postal_code: null,
                latitude: 0,
                longitude: 0,
                formatted_address: null
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                locationID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a specific location', (done) => {
        locations.getLocation({
            location_id: locationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a specific organization location', (done) => {
        locations.getOrganizationLocation({
            organization_id: organizationID,
            location_id: locationID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to create new organization locations', (done) => {
        locations.createOrganizationLocations({
            organization_id: organizationID,
            locations: [{
                title: 'string',
                locality: null,
                administrative_area_level_1: null,
                country: null,
                postal_code: null,
                latitude: 0,
                longitude: 0,
                formatted_address: null
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to update organization locations', (done) => {
        locations.updateOrganizaionLocations({
            organization_id: organizationID,
            locations: [{
                id: locationID,
                title: 'string 2'
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to create organization location', (done) => {
        locations.createOrganizationLocation({
            organization_id: organizationID,
            title: randString,
            address: '600 Bryant'
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to update organization location', (done) => {
        locations.updateOrganizationLocation({
            organization_id: organizationID,
            location_id: locationID,
            address: '600 Bryant',
            title: randString.substring(8),
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to delete a specific location', (done) => {
        locations.deleteOrganizationLocation({
            organization_id: organizationID,
            location_id: locationID,
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to create a location list', (done) => {
        locations.createOrganizationLocationList({
            organization_id: organizationID,
            subscription_id: 1,
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
