// import schema from '../src/api/search/search-schema.json';

describe('Signup', () => {
    const customerEmail = 'gig@gigwalk.com';
    const organizationID = 4;

    it('should be able to create a user', (done) => {
        const apiPromise = gigwalk.signup.create({
            user: {
                email: customerEmail,
                organization_id: organizationID,
                first_name: 'string',
                last_name: 'string'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to bulk create users', (done) => {
        const apiPromise = gigwalk.signup.bulkCreate({
            users: [{
                email: customerEmail,
                organization_id: organizationID,
                first_name: 'string',
                last_name: 'string'
            }]
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to accept invitation', (done) => {
        const apiPromise = gigwalk.signup.accept({
            first_name: 'string',
            last_name: 'string',
            password: 'string',
            invite_hash: 'string',
            check_expired: false
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
