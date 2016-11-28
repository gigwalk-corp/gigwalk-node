// @flow
import cloneDeep from 'lodash.clonedeep';
import GigwalkAxios from './client';
import Authorization from './api/authorization';
import CalendarEvents from './api/calendarEvents';
import Certifications from './api/certifications';
import Cloud9Ulrs from './api/cloud9Urls';
import CustomerListFileUpload from './api/customerListFileUpload';
import Customers from './api/customers';
import CustomerStatistics from './api/customerStatistics';
import DashboardModule from './api/dashboardModule';
import DataItems from './api/dataItems';
import DataTypeAttachment from './api/dataTypeAttachment';
import DataTypes from './api/dataTypes';
import DoubleOptin from './api/doubleOptin';
import FileJob from './api/fileJob';
import Groups from './api/groups';
import GroupSearch from './api/groupSearch';
import LocationLists from './api/locationLists';
import Locations from './api/locations';
import OrganizationMetadata from './api/organizationMetadata';
import Organizations from './api/organizations';
import OrganizationSearch from './api/organizationSearch';
import PushNotifications from './api/pushNotifications';
import Reports from './api/reports';
import RequestProjectReview from './api/requestProjectReview';
import Search from './api/search';
import Signup from './api/signup';
import Subscriptions from './api/subscriptions';
import TargetLists from './api/targetLists';
import Targets from './api/targets';
import Templates from './api/templates';
import TicketEvents from './api/ticketEvents';
import TicketMetadata from './api/ticketMetadata';
import Tickets from './api/tickets';
import Versions from './api/versions';
import Waves from './api/waves';

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
    calendarEvents: CalendarEvents;
    certifications: Certifications;
    cloud9Urls: Cloud9Ulrs;
    customerListFileUpload: CustomerListFileUpload;
    customers: Customers;
    customerStatistics: CustomerStatistics;
    dashboardModule: DashboardModule;
    dataItems: DataItems;
    dataTypeAttachment: DataTypeAttachment;
    dataTypes: DataTypes;
    doubleOptin: DoubleOptin;
    fileJob: FileJob;
    groups: Groups;
    groupSearch: GroupSearch;
    locationLists: LocationLists;
    locations: Locations;
    organizationMetadata: OrganizationMetadata;
    organizations: Organizations;
    organizationSearch: OrganizationSearch;
    pushNotifications: PushNotifications
    reports: Reports
    requestProjectReview: RequestProjectReview;
    search: Search;
    signup: Signup;
    subscriptions: Subscriptions;
    targetLists: TargetLists;
    targets: Targets;
    templates: Templates;
    ticketEvents: TicketEvents;
    ticketMetadata: TicketMetadata;
    tickets: Tickets;
    versions: Versions;
    waves: Waves;

    constructor(config?: GigwalkAPIConfig = {}) {
        const client = new GigwalkAxios({ baseURL: `https://${config.hostname || 'api.app.gigwalk.com'}` });
        this.client = client;

        // AxiosIssue - global.defaults and client.defaults reference the same object. Changing the instance
        // defaults will affect the global namespace (and therefore any other axios instances)
        // See https://github.com/mzabriskie/axios/issues/391
        client.defaults = cloneDeep(client.defaults);

        this.authorization = new Authorization(client);
        this.calendarEvents = new CalendarEvents(client);
        this.certifications = new Certifications(client);
        this.cloud9Urls = new Cloud9Ulrs(client);
        this.customerListFileUpload = new CustomerListFileUpload(client);
        this.customers = new Customers(client);
        this.customerStatistics = new CustomerStatistics(client);
        this.dashboardModule = new DashboardModule(client);
        this.dataItems = new DataItems(client);
        this.dataTypeAttachment = new DataTypeAttachment(client);
        this.dataTypes = new DataTypes(client);
        this.doubleOptin = new DoubleOptin(client);
        this.fileJob = new FileJob(client);
        this.groups = new Groups(client);
        this.groupSearch = new GroupSearch(client);
        this.locationLists = new LocationLists(client);
        this.locations = new Locations(client);
        this.organizationMetadata = new OrganizationMetadata(client);
        this.organizations = new Organizations(client);
        this.organizationSearch = new OrganizationSearch(client);
        this.pushNotifications = new PushNotifications(client);
        this.reports = new Reports(client);
        this.requestProjectReview = new RequestProjectReview(client);
        this.search = new Search(client);
        this.signup = new Signup(client);
        this.subscriptions = new Subscriptions(client);
        this.targetLists = new TargetLists(client);
        this.targets = new Targets(client);
        this.templates = new Templates(client);
        this.ticketEvents = new TicketEvents(client);
        this.ticketMetadata = new TicketMetadata(client);
        this.tickets = new Tickets(client);
        this.versions = new Versions(client);
        this.waves = new Waves(client);
    }

    authenticate(auth: AuthToken | BasicAuth) {
        let header: string = '';
        if (typeof auth.email === 'string' && typeof auth.password === 'string') {
            header = `Basic ${auth.email}:${auth.password}`;
        } else if (typeof auth.token === 'string') {
            header = `Token ${auth.token}`;
        }

        Object.assign(this.client.defaults, {
            headers: {
                common: {
                    ...(
                        this.client.defaults.hasOwnProperty('headers') && this.client.defaults.headers.hasOwnProperty('common') ?
                        this.client.defaults.headers.common : {}
                    ),
                    Authorization: header,
                },
            },
        });
    }
}
