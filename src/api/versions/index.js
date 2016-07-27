// @flow
import Resource from '../Resource';
import type { $AxiosXHR, $AxiosXHRConfigBase } from 'axios';

export default class Versions extends Resource {
    get(config?: $AxiosXHRConfigBase<*>): Promise<$AxiosXHR<Object>> {
        return this.client.get('/v1/versions/current', config);
    }
}
