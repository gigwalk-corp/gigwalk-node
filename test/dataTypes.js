import DataTypes from '../src/api/dataTypes/index';
import axios from 'axios';
import schema from '../src/api/dataTypes/dataTypes-schema.json';

describe('Data Types', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const dataTypes = new DataTypes(client);

    const organizationID: number = 4;
    let dataTypeID: number;

    it('should be able to get all data types', (done) => {
        dataTypes.getAll({
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
    }).timeout(30000);
    it('should be able to create a new data type', (done) => {
        dataTypes.create({
            dataType: {
                description: 'string',
                value_type: 'CURRENCY',
                questions: {
                    question_text: 'string'
                }
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                dataTypeID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to get a specific data type', (done) => {
        dataTypes.get({
            data_type_id: dataTypeID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to update a data type', (done) => {
        dataTypes.update({
            data_type_id: dataTypeID,
            dataType: {
                description: 'string 2',
                value_type: 'CURRENCY',
                questions: {
                    question_text: 'string'
                }
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it('should be able to search all data types', (done) => {
        dataTypes.search({
            organization_id: organizationID,
            query_string: 'string',
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
    }).timeout(30000);
    it('should be able to search data types with a search field', (done) => {
        dataTypes.searchWithField({
            organization_id: organizationID,
            search_field: 'description',
            query_string: 'string',
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
    }).timeout(30000);
});
