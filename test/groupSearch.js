import GroupSearch from '../src/api/groupSearch/index';
import axios from 'axios';
// import schema from '../src/api/locationLists/locationLists-schema.json';

describe('Group Search', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const groupSearch = new GroupSearch(client);

    const groupId: number = 100;

    it('should be able to search for groups', (done) => {
        groupSearch.search({
            group_id: groupId,
            index_type: 'members',
            query: {
                q: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(30000);
    it.skip('should be able to search for groups with type', (done) => {
        groupSearch.searchWithType({
            group_id: groupId,
            query: {
                q: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
    it.skip('should be able to search for groups with ticket', (done) => {
        groupSearch.searchTickets({
            group_id: groupId,
            query: {
                query_string: 'string',
                from: 0,
                size: 0,
                sort_field: 'string',
                sort_order: 'string',
                filter_key: 'assigned_customer_name',
                filter_value: 'string'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                // expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
