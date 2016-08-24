import PushNotifications from '../src/api/pushNotifications/index';
import axios from 'axios';
// import schema from '../src/api/pushNotifications/pushNotifications-schema.json';

describe('Push Notifications', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const pushNotifications = new PushNotifications(client);

    const userID: number = 100;

    it.skip('should be able to create a push notification', (done) => {
        pushNotifications.create({
            push_notification: {
                users: [userID],
                group_ids: [],
                message: 'string'
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
