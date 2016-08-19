// @flow

export type ESSearch = {
    took: number,
    timed_out: boolean,
    _shards: {
        successful: number,
        failed: number,
        total: number
    },
    hits: {
        total: number,
        max_score: number,
        hits: Array<{
            _score: number,
            _id: number,
            _type: string,
            _index: string,
            _source: Object,
            highlight?: Object
        }>
    }
}

type SearchDocumentsQuery = {
    q?: string
}

export type SearchDocumentsParams = {
    query?: SearchDocumentsQuery
}

type SearchOrganizationQuery = {
    q?: string,
    limit?: number,
    offset?: number,
    certification_id?: number
}

export type SearchOrganizationParams = {
    organization_id: number,
    index_type: 'groups' | 'members' | 'location_lists'| 'target_lists' | 'tickets' | 'subscriptions',
    query?: SearchOrganizationQuery
}
