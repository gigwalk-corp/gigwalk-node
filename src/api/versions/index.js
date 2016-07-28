// @flow
import Resource from '../Resource';
import type { $AxiosXHR, $AxiosXHRConfigBase } from 'axios';

export type APIRes<T> = {
  _meta: Object,
  warnings: mixed,
  gw_api_response: Array<Object>,
  _metadata: Object,
  code: number,
  data: T,
  errors: mixed
};

export type VersionsData = [{
    version: string,
    minimum_android_version: string,
    minimum_ios_version: string
}];

export type APIPromise<T> = Promise<$AxiosXHR<APIRes<T>>>;

export default class Versions extends Resource {
    get(config?: $AxiosXHRConfigBase<*>): APIPromise<VersionsData> {
        return this.client.get('/v1/versions/current', config);
    }
}
