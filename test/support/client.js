// @flow
import axios from 'axios';
import path from 'path';
import { camelCase } from 'lodash';
import type { AxiosXHRConfigBase, Axios } from 'axios';
import { RequestMiddleware, ResponseMiddleware } from 'axios-vcr';

export default function createClient<T>(config: AxiosXHRConfigBase<T>, name: string): Axios {
    const client = axios.create(config);
    const fixturesPath = path.join(__dirname, '../fixtures', `./${camelCase(name)}.json`);
    if (!process.argv.includes('--skip-fixtures')) {
        client.interceptors.request.use(
            RequestMiddleware.success(fixturesPath),
            RequestMiddleware.failure
        );
        client.interceptors.response.use(
            ResponseMiddleware.success(fixturesPath),
            ResponseMiddleware.failure
        );
    }
    return client;
}
