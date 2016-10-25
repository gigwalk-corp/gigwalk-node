import schema from '../../src/api/groups/groups-schema.json';
import schemaDelete from '../../src/api/delete-schema.json';
import createMoniker from '../utils/createMoniker';

describe('Calendar Events', () => {
    const customerID = 100;
    let calendarEventID;

    it('should be able to create a calendar event', (done) => {
        const apiPromise = gigwalk.calendarEvents.create({
            calendar_event: {
                summary: createMoniker(),
                start: '2220-1-1',
                end: '2220-1-2',
                time_zone: 'UTC',
                event_type: 'TICKET_SCHEDULE'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            calendarEventID = res.data.data[0].id;
            done();
        }).catch(done);
    });

    it('should be able to get all calendar events for a customer', (done) => {
        const apiPromise = gigwalk.calendarEvents.getForCustomer({
            customer_id: customerID,
            query: {
                limit: 2,
                time_zone: 'UTC'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to get a specific calendar event ', (done) => {
        const apiPromise = gigwalk.calendarEvents.get({
            calendar_event_id: calendarEventID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to update calendar event', (done) => {
        const apiPromise = gigwalk.calendarEvents.update({
            calendar_event_id: calendarEventID,
            calendar_event: {
                summary: 'string 2',
                start: '2220-1-1',
                end: '2220-1-2',
                time_zone: 'UTC',
                event_type: 'TICKET_SCHEDULE'
            }
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schema);
            done();
        }).catch(done);
    });

    it('should be able to delete calendar event', (done) => {
        const apiPromise = gigwalk.calendarEvents.delete({
            calendar_event_id: calendarEventID
        });

        apiPromise.then((res) => {
            expect(res.status).to.equal(200);
            expect(res.data).to.have.jsonSchema(schemaDelete);
            done();
        }).catch(done);
    });
});
