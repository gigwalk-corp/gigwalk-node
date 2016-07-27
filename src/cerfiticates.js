// @flow
import Resource from './api/Resource';

export type Options = {
    baseURL: string,
    auth: string
};

export default class Certificates extends Resource {
    fromActiveUser(): Promise<Object> {
        const URL: string = '/v1/certifications';
        return this.client.get(URL);
    }
}
