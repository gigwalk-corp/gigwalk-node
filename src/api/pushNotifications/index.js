// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    CreatePushNotificationParams
} from './types';

export default class PushNotifications extends Resource {

    /**
     * @api {post} /v1/push_notifications create
     * @apiGroup PushNotifications
     * @apiName create
     * @apiDescription Sends a push notification to a list of user emails/ids as well as any users in the list of group_ids.
     * @apiParam {Object} push_notification
     * @apiExample {js} Example:
     *             gigwalk.pushNotifications.create({...})
     */
    create(params: CreatePushNotificationParams): APIPromise<any> {
        return this.client.post('/v1/push_notifications', { ...params.push_notification });
    }
}
