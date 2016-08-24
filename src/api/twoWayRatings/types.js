// @flow

type RatingField = {
    rating: number,
    comments: string
}

export type RateParams = {
    organization_subscription_id: number,
    rating: RatingField
}

export type RateForWorkerParams = {
    organization_subscription_id: number,
    worker_id: number,
    rating: RatingField
}
