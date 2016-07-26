// @flow
import axios from 'axios';

export type Options = {
    baseURL: string,
    auth: string
};

export default class Certificates {
    constructor({ auth, baseURL }: Options) {
        const c = axios.create({
            baseURL,
            headers: {
                'Authorization': `Token ${auth}`
            }
        });

        this.client = axios.create({
            baseURL,
            headers: {
                'Authorization': `Token ${auth}`
            }
        });
    }

    client: typeof axios;

    fromActiveUser(): Promise<Object> {
        const URL: string = '/v1/certifications'
        return this.client.get(URL);
    }
}
