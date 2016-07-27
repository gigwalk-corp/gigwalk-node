// @flow
import { Axios } from 'axios';
import Client from '../Client';

export default class Resource {
    constructor(client: Client | Axios) {
        this.client = client;
    }
    client: Client | Axios;
}
