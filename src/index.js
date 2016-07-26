// @flow
import RequestQueue from './requestQueue';
import Authorization from './api/authorization'
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

import type AxiosXHRConfig from 'axios';
import type { Dispatcher, Auth } from './api/resourceBase';

export type GigwalkAPIConfig = {
    hostname?: string,
};

export default class GigwalkAPI {

    // Stored auth credentials
    auth: Auth;

    // Outgoing request queue
    requestQueue: typeof RequestQueue;

    // API resources
    authorization: typeof Authorization;
    certifications: typeof Certifications;
    customers: typeof Customers;
    locationLists: typeof LocationLists;
    locations: typeof Locations;
    organizations: typeof Organizations;
    search: typeof Search;
    subscriptions: typeof Subscriptions;
    targetLists: typeof TargetLists;
    targets: typeof Targets;
    ticketEvents: typeof TicketEvents;
    tickets: typeof Tickets;

    constructor(config: GigwalkAPIConfig) {
        const dispatcher = (request: AxiosXHRConfig): Promise => this.dispatchRequest(request);

        this.requestQueue = new RequestQueue();

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
        })
    }

    dispatchRequest(request: AxiosXHRConfig): Promise {
        return this.requestQueue.add(request);
    }
}