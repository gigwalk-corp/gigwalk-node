// @flow
export type Dispatcher = Axios | (config: AxiosXHRConfig<*>) => Promise<*>;
export type AuthToken = {
    token: string
}
export type BasicAuth = {
    username: string,
    password: string
}
export type Auth = AuthToken | BasicAuth;

export default class ResourceBase {

    auth: Auth;
    dispatch: Dispatcher;

    constructor(dispatcher: Dispatcher) {
        this.dispatch = dispatcher;
    }

    authenticate(auth: Auth) {
        this.auth = auth;
    }
}
