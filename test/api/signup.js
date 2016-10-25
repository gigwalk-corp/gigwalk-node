// import schema from '../src/api/search/search-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Signup', () => {
    const customerEmail = `${createMoniker()}@gigwalk.com`;
    const organizationID = 4;
    const firstName = createMoniker();
    const lastName = createMoniker();

    it('should be able to create a user', (done) => {
        const apiPromise = gigwalk.signup.create({
            user: {
                email: customerEmail,
                organization_id: organizationID,
                first_name: firstName,
                last_name: lastName
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
                email: `${createMoniker()}@gigwalk.com`,
                organization_id: organizationID,
                first_name: createMoniker(),
                last_name: createMoniker()
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
            first_name: firstName,
            last_name: lastName,
            password: 'password',
            invite_hash: 'invite_hash',
            check_expired: false
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
