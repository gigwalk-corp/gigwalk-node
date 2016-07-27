// @flow

export default class Versions {
    constructor(client: Axios) {
        this.client = client;
    }

    client: Axios;
    get(): Promise<AxiosXHR<Object>> {
        return this.client.get('/v1/versions/current');
    }
}
