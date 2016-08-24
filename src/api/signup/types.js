// @flow

type UserFields = {
    first_name: string,
    last_name: string,
    email: string,
    organization_id: number,
    password?: string,
    role?: 'ANALYST' | 'WORKER' | 'OPERATOR' | 'ADMIN' | 'SUPER_ADMIN' | 'SELF_SERVICE' | 'PLATFORM_ADMIN',
    customer_status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DELETED',
    confirmation_needed?: boolean
}

export type CreateUserParams = {
    user: UserFields
}

export type BulkCreateUserParams = {
    users: Array<UserFields>
}

export type AcceptUserParams = {
    first_name: string,
    last_name: string,
    password: string,
    invite_hash: string,
    check_expired?: boolean
}
