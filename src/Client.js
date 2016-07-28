// @flow
import { Axios } from 'axios';
import Versions from './api/versions';
import Certifications from './api/certifications/Certifications';
import type { $AxiosXHRConfigBase, $AxiosXHR, $AxiosXHRConfig } from 'axios';

class AxiosError extends Error {
    response: $AxiosXHR<*>;
    config: $AxiosXHRConfig<*>;
}
const DEFAULT_OPTS = {
    baseURL: 'https://api.app.gigwalk.com'
};
export default class Gigwalk extends Axios {
    constructor(config?: $AxiosXHRConfigBase<*> = DEFAULT_OPTS) {
        super(config);
        this.versions = new Versions(this);
        this.certifications = new Certifications(this);
    }

    versions: Versions;
    certifications: Certifications;
    defaults: {
        headers: {
            common: {
                Authorization?: string
            }
        }
    };

    setAuthToken(token: string): Promise<$AxiosXHR<*>> {
        const prefix: string = 'Token ';
        const Authorization = token.indexOf(prefix) === 0 ? token : `${prefix}${token}`;
        return this.get('/v1/auth', {
            headers: { Authorization }
        }).then((res: $AxiosXHR<*>): $AxiosXHR<*> => {
            this.defaults.headers.common.Authorization = Authorization;
            return res;
        });
    }

    authorize(email: string, password: string): Promise<$AxiosXHR<*>> {
        return this.post('/v1/auth', null, {
            auth: {
                username: email,
                password
            }
        })
            .then((res: $AxiosXHR<*>): $AxiosXHR<*> => {
                const token: ?string = res.data.data[0].auth_token;
                if (typeof token === 'string' && token.length) {
                    this.defaults.headers.common.Authorization = `Token ${token}`;
                } else {
                    const e = new AxiosError('Expected the user information to reutrn an auth token');
                    e.response = res.config;
                    e.config = res.config;
                    throw e;
                }
                return res;
            });
    }
}
