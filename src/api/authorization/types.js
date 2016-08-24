// @flow

export type ForgotPasswordParams = {
    email: string
}

export type ResetPasswordParams = {
    email: string,
    password: string,
    token: string,
    check_expired?: boolean
}
