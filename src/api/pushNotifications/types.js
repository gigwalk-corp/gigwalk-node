// @flow

type PushNotificationFields = {
    users: Array<number>,
    group_ids: Array<number>,
    message: string,
    command?: string
}

export type CreatePushNotificationParams = {
    push_notification: PushNotificationFields
}
