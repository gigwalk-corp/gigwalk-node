import TicketEvents from '../src/api/ticketEvents/index';
import axios from 'axios';
import schema from '../src/api/ticketEvents/ticketEvents-schema.json';
import schemaDelete from '../src/api/delete-schema.json';
import helpers from '../src/helpers';

describe('Ticket Events', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const ticketEvents = new TicketEvents(client);

    const randString: string = helpers.randString();
    const ticketID: number = 10825921;
    let ticketEventID: number;

    it('should be able to create a ticket event', (done) => {
        ticketEvents.create({
            ticket_id: ticketID,
            ticket_event: {
                ticket_event_type: 'COMMENT',
                ticket_event_data: {
                    comment: randString
                }
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                ticketEventID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to delete a ticket event', (done) => {
        ticketEvents.delete({
            ticket_event_id: ticketEventID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
