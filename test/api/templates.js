import schema from '../../src/api/templates/templates-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';

describe('Templates', () => {
    const randString = Math.random().toString(36).substring(10);
    let templateID;

    it('should be able to create new templates', (done) => {
        const apiPromise = gigwalk.templates.bulkCreate({
            templates: [{
                title: randString
            }]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            templateID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get all templates', (done) => {
        const apiPromise = gigwalk.templates.getAll({
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

    it('should be able to update a template', (done) => {
        const apiPromise = gigwalk.templates.update({
            template_id: templateID,
            template: {
                title: randString.substring(0, 8)
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific template', (done) => {
        const apiPromise = gigwalk.templates.get({
            template_id: templateID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete a template', (done) => {
        const apiPromise = gigwalk.templates.delete({
            template_id: templateID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
