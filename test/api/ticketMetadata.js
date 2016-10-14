import schema from '../../src/api/ticketMetadata/ticketMetadata-schema.json';

describe('Ticket Metadata', () => {
    const randString = Math.random().toString(36).substring(10);
    const organizationID = 4;
    const ticketId = 11696865;

    it('should be able to create metadata for a ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.create({
            ticket_id: ticketId,
            metadata: {
                randString
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get metadata for a ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.get({
            ticket_id: ticketId,
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

    it('should be able to update metadata for a ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.update({
            ticket_id: ticketId,
            metadata: {
                randString: randString.substring(0, 9)
            },
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

    it('should be able to update metadata for an orgaization ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.updateForOrganization({
            organization_id: organizationID,
            ticket_id: ticketId,
            metadata: {
                randString: randString.substring(0, 8)
            },
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
