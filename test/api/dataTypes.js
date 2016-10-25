import schema from '../../src/api/dataTypes/dataTypes-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Data Types', () => {
    const organizationID = 4;
    let dataTypeID;

    it('should be able to get all data types', (done) => {
        const apiPromise = gigwalk.dataTypes.getAll({
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

    it('should be able to create a new data type', (done) => {
        const apiPromise = gigwalk.dataTypes.create({
            dataType: {
                description: createMoniker(),
                value_type: 'CURRENCY',
                questions: {
                    question_text: createMoniker()
                }
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            dataTypeID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get a specific data type', (done) => {
        const apiPromise = gigwalk.dataTypes.get({
            data_type_id: dataTypeID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update a data type', (done) => {
        const apiPromise = gigwalk.dataTypes.update({
            data_type_id: dataTypeID,
            dataType: {
                description: createMoniker(),
                value_type: 'CURRENCY',
                questions: {
                    question_text: createMoniker()
                }
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to search all data types', (done) => {
        const apiPromise = gigwalk.dataTypes.search({
            organization_id: organizationID,
            query_string: 'gnt',
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

    it('should be able to search data types with a search field', (done) => {
        const apiPromise = gigwalk.dataTypes.searchWithField({
            organization_id: organizationID,
            search_field: 'description',
            query_string: 'gnt',
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
});
