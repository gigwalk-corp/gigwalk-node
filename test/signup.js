import Signup from '../src/api/signup/index';
import axios from 'axios';
// import schema from '../src/api/search/search-schema.json';

describe('Signup', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const signup = new Signup(client);

    const email: string = 'gig@gigwalk.com';
    const organizationID: number = 4;

    it('should be able to create a user', (done) => {
        signup.create({
            user: {
                email: email,
                organization_id: organizationID,
                first_name: 'string',
                last_name: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to bulk create users', (done) => {
        signup.bulkCreate({
            users: [{
                email: email,
                organization_id: organizationID,
                first_name: 'string',
                last_name: 'string'
            }]
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it.skip('should be able to accept invitation', (done) => {
        signup.accept({
            first_name: 'string',
            last_name: 'string',
            password: 'string',
            invite_hash: 'string',
            check_expired: false
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
