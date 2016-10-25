import schema from '../../src/api/ticketEvents/ticketEvents-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Ticket Events', () => {
    const ticketID = 10825921;
    let ticketEventID;

    it('should be able to create a ticket event', (done) => {
        const apiPromise = gigwalk.ticketEvents.create({
            ticket_id: ticketID,
            ticket_event: {
                ticket_event_type: 'COMMENT',
                ticket_event_data: {
                    comment: createMoniker()
                }
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            ticketEventID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to delete a ticket event', (done) => {
        const apiPromise = gigwalk.ticketEvents.delete({
            ticket_event_id: ticketEventID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
