// @flow
import axios from 'axios';
import RequestQueue from './requestQueue';
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
import ResourceBase from './api/resourceBase';

import type { Dispatcher, Auth } from './api/resourceBase';

export type GigwalkAPIConfig = {
    hostname?: string,
};

export default class GigwalkAPI {

    hostname: string;

    // Stored auth credentials
    auth: Auth;

    // Outgoing request queue
    requestQueue: RequestQueue;

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

    constructor(config: GigwalkAPIConfig) {
        this.hostname = config.hostname || 'api.apps.gigwalk.com';

        const client = axios.create({ baseURL: this.hostname });
        this.requestQueue = new RequestQueue(client);

        const dispatcher: Dispatcher = (request: AxiosXHRConfig<*>): Promise<*> => this.dispatchRequest(request);
        this.authorization = new Authorization(dispatcher);
        this.certifications = new Certifications(dispatcher);
        this.customers = new Customers(dispatcher);
        this.locationLists = new LocationLists(dispatcher);
        this.locations = new Locations(dispatcher);
        this.organizations = new Organizations(dispatcher);
        this.search = new Search(dispatcher);
        this.subscriptions = new Subscriptions(dispatcher);
        this.targetLists = new TargetLists(dispatcher);
        this.targets = new Targets(dispatcher);
        this.ticketEvents = new TicketEvents(dispatcher);
        this.tickets = new Tickets(dispatcher);
    }

    authenticate(auth: Auth) {
        this.auth = auth;

        Object.values(this).forEach((property: any) => {
            if (property instanceof ResourceBase) {
                property.authenticate(this.auth);
            }
        });
    }

    dispatchRequest(request: AxiosXHRConfig<*>): Promise<*> {
        return this.requestQueue.add(request);
    }
}
