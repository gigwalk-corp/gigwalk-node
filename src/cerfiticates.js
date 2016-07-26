// @flow
import axios from 'axios';

export type Options = {
    baseURL: string,
    auth: string
};

export default class Certificates {
    constructor({ auth, baseURL }: Options) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Authorization': `Token ${auth}`
            }
        })
    }

    client: typeof axios;

    fromActiveUser(): Promise<Object> {
        return Promise.reject();
    }
}
