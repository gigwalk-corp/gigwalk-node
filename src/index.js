// @flow
import GigwalkAxios from './client';
import Authorization from './api/authorization';
import Certifications from './api/certifications';
import Customers from './api/customers';
import LocationLists from './api/locationLists';
import Locations from './api/locations';
import Organizations from './api/organizations';
import Search from './api/search';
import Subscriptions from './api/subscriptions';
import TargetLists from './api/targetLists';
import Targets from './api/targets';
import TicketEvents from './api/ticketEvents';
import Tickets from './api/tickets';
import cloneDeep from 'lodash.clonedeep';

export type GigwalkAPIConfig = {
    hostname?: string,
};

export type AuthToken = {
    token: string
}

export type BasicAuth = {
    username: string,
    password: string
}

export default class GigwalkAPI {

    // The http client
    client: GigwalkAxios;

    // API resources
    authorization: Authorization;
    certifications: Certifications;
    customers: Customers;
    locationLists: LocationLists;
    locations: Locations;
    organizations: Organizations;
    search: Search;
    subscriptions: Subscriptions;
    targetLists: TargetLists;
    targets: Targets;
    ticketEvents: TicketEvents;
    tickets: Tickets;

    constructor(config?: GigwalkAPIConfig = {}) {
        const client = new GigwalkAxios({ baseURL: `https://${config.hostname || 'api.app.gigwalk.com'}` });
        this.client = client;

        // AxiosIssue - global.defaults and client.defaults reference the same object. Changing the instance
        // defaults will affect the global namespace (and therefore any other axios instances)
        // See https://github.com/mzabriskie/axios/issues/391
        client.defaults = cloneDeep(client.defaults);

        this.authorization = new Authorization(client);
        this.certifications = new Certifications(client);
        this.customers = new Customers(client);
        this.locationLists = new LocationLists(client);
        this.locations = new Locations(client);
        this.organizations = new Organizations(client);
        this.search = new Search(client);
        this.subscriptions = new Subscriptions(client);
        this.targetLists = new TargetLists(client);
        this.targets = new Targets(client);
        this.ticketEvents = new TicketEvents(client);
        this.tickets = new Tickets(client);
    }

    authenticate(auth: AuthToken | BasicAuth) {
        let header = '';
        if (auth.email && auth.password) {
            header = `Basic ${auth.email}:${auth.password}`;
        } else if (auth.token) {
            header = `Token ${auth.token}`;
        }

        this.client.defaults.headers.common.Authorization = header;
    }
}
