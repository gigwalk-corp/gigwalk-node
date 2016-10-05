import Templates from '../src/api/templates/index';
import axios from 'axios';
import schema from '../src/api/templates/templates-schema.json';
import schemaDelete from '../src/api/delete-schema.json';
import helpers from '../src/helpers';

describe('Templates', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const templates = new Templates(client);

    const randString: string = helpers.randString();
    let templateID: number;

    it('should be able to create new templates', (done) => {
        templates.bulkCreate({
            templates: [{
                title: randString
            }]
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            templateID = res.data.data[0].id;
            done();
        })
        .catch(done);
    }).timeout(10000);
    it('should be able to get all templates', (done) => {
        templates.getAll({
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
    it('should be able to update a template', (done) => {
        templates.update({
            template_id: templateID,
            template: {
                title: randString.substring(0, 8)
            }
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        })
        .catch(done);
    }).timeout(10000);
    it('should be able to get a specific template', (done) => {
        templates.get({
            template_id: templateID
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        })
        .catch(done);
    }).timeout(10000);
    it('should be able to delete a template', (done) => {
        templates.delete({
            template_id: templateID
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        })
        .catch(done);
    }).timeout(10000);
});
