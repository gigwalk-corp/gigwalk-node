import schema from '../../src/api/ticketMetadata/ticketMetadata-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Ticket Metadata', () => {
    const organizationID = 4;
    const ticketId = 11696865;

    it('should be able to create metadata for a ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.create({
            ticket_id: ticketId,
            metadata: {
                moniker: createMoniker()
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
                moniker: createMoniker()
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

    it('should be able to update metadata for an organization ticket', (done) => {
        const apiPromise = gigwalk.ticketMetadata.updateForOrganization({
            organization_id: organizationID,
            ticket_id: ticketId,
            metadata: {
                moniker: createMoniker()
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
