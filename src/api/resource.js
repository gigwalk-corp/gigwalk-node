// @flow
import type { Axios } from 'axios';

export type AuthToken = {
    token: string
}
export type BasicAuth = {
    username: string,
    password: string
}
export type Auth = AuthToken | BasicAuth;

export default class Resource {
    client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }
}
