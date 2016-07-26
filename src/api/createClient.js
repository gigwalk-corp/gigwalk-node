// @flow
import axios from 'axios';

/**
 * Create axios client for HTTP requests
 */
export default function createClient(): typeof axios {
    return axios.create({
        baseURL: `https://${process.env.GIGWALK_API_SERVER_HOSTNAME || 'api.app.gigwalk.com'}`,
        responseType: 'json'
    });
}
