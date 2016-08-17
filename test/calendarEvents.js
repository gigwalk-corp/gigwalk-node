import CalendarEvents from '../src/api/calendarEvents/index';
import axios from 'axios';
import schema from '../src/api/groups/groups-schema.json';
import schemaDelete from '../src/api/delete-schema.json';

describe('Calendar Event', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const calendarEvents = new CalendarEvents(client);

    const customerID: number = 100;
    let calendarEventID: number;

    it('should be able to create a calendar event', (done) => {
        calendarEvents.create({
            calendar_event: {
                summary: 'string',
                start: '2220-1-1',
                end: '2220-1-2',
                time_zone: 'UTC',
                event_type: 'TICKET_SCHEDULE'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                calendarEventID = res.data.data[0].id;
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get all calendar events for a customer', (done) => {
        calendarEvents.getForCustomer({
            customer_id: customerID,
            query: {
                limit: 2,
                time_zone: 'UTC'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to get a specific calendar event ', (done) => {
        calendarEvents.get({
            calendar_event_id: calendarEventID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to update calendar event', (done) => {
        calendarEvents.update({
            calendar_event_id: calendarEventID,
            calendar_event: {
                summary: 'string 2',
                start: '2220-1-1',
                end: '2220-1-2',
                time_zone: 'UTC',
                event_type: 'TICKET_SCHEDULE'
            }
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    }).timeout(10000);
    it('should be able to delete calendar event', (done) => {
        calendarEvents.delete({
            calendar_event_id: calendarEventID
        })
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.have.jsonSchema(schemaDelete);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
