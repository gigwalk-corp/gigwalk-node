// @flow
import ResourceBase from '../resourceBase';

export default class Versions extends ResourceBase {

    get() {
        const request = {
            url: '/v1/version/current',
            method: 'GET'
        };
        return this.dispatch(request);
    }
}
