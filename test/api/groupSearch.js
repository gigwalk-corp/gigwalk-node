// import schema from '../src/api/locationLists/locationLists-schema.json';

describe('Group Search', () => {
    const groupId = 100;

    it('should be able to search for groups', (done) => {
        const apiPromise = gigwalk.groupSearch.search({
            group_id: groupId,
            index_type: 'members',
            query: {
                q: 'gnt'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search for groups with type', (done) => {
        const apiPromise = gigwalk.groupSearch.searchWithType({
            group_id: groupId,
            query: {
                q: 'gnt'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it.skip('should be able to search for groups with ticket', (done) => {
        const apiPromise = gigwalk.groupSearch.searchTickets({
            group_id: groupId,
            query: {
                query_string: 'gnt',
                from: 0,
                size: 10,
                sort_field: 'title',
                sort_order: 'asc',
                filter_key: 'assigned_customer_name',
                filter_value: 'gnt'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            // expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });
});
