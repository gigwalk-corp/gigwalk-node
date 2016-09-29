import TicketMetadata from '../src/api/ticketMetadata/index';
import axios from 'axios';
import schema from '../src/api/ticketMetadata/ticketMetadata-schema.json';

describe('Ticket Metadata', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const ticketMetadata = new TicketMetadata(client);

    const randString: string = Math.random().toString(36).substring(10);
    const organizationID: number = 4;
    const ticketId: number = 11696865;

    it('should be able to create metadata for a ticket', (done) => {
        ticketMetadata.create({
            ticket_id: ticketId,
            metadata: {
                randString
            }
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        })
        .catch(done);
    }).timeout(30000);
    it('should be able to get metadata for a ticket', (done) => {
        ticketMetadata.get({
            ticket_id: ticketId,
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
    }).timeout(30000);
    it('should be able to update metadata for a ticket', (done) => {
        ticketMetadata.update({
            ticket_id: ticketId,
            metadata: {
                randString: randString.substring(0, 9)
            },
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
    }).timeout(30000);
    it('should be able to update metadata for an orgaization ticket', (done) => {
        ticketMetadata.updateForOrganization({
            organization_id: organizationID,
            ticket_id: ticketId,
            metadata: {
                randString: randString.substring(0, 8)
            },
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
    }).timeout(30000);
});
