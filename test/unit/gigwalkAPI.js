import sinon from 'sinon';
import GigwalkAPI from '../../src/index';
import GigwalkAxios from '../../src/client';
import Authorization from '../../src/api/authorization';
import Certifications from '../../src/api/certifications';
import Customers from '../../src/api/customers';
import LocationLists from '../../src/api/locationLists';
import Locations from '../../src/api/locations';
import Organizations from '../../src/api/organizations';
import Search from '../../src/api/search';
import Subscriptions from '../../src/api/subscriptions';
import TargetLists from '../../src/api/targetLists';
import Targets from '../../src/api/targets';
import TicketEvents from '../../src/api/ticketEvents';
import Tickets from '../../src/api/tickets';

describe('GigwalkAPI', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('should use GigwalkAxios as the http client', () => {
        const gigwalk = new GigwalkAPI();
        expect(gigwalk.client).to.be.instanceOf(GigwalkAxios);
    });

    it('should accept hostname as a config option', () => {
        const clientStub = sandbox.stub();
        GigwalkAPI.__Rewire__('GigwalkAxios', clientStub);

        new GigwalkAPI({ hostname: 'beta-api.app.gigwalk.com' }); // eslint-disable-line no-new
        expect(clientStub).to.have.been.calledWith({ baseURL: 'https://beta-api.app.gigwalk.com' });

        new GigwalkAPI(); // eslint-disable-line no-new
        expect(clientStub).to.have.been.calledWith({ baseURL: 'https://api.app.gigwalk.com' });

        GigwalkAPI.__ResetDependency__('GigwalkAxios');
    });

    it('should allow users to authenticate', () => {
        const gigwalk = new GigwalkAPI();

        gigwalk.authenticate({ email: 'marc@gigwalk.com', password: 'password' });
        expect(gigwalk.client).to.have.deep.property('defaults.headers.common.Authorization', 'Basic marc@gigwalk.com:password');

        gigwalk.authenticate({ token: 'qwerty' });
        expect(gigwalk.client).to.have.deep.property('defaults.headers.common.Authorization', 'Token qwerty');
    });

    it('should instantiate all API resources', () => {
        const gigwalk = new GigwalkAPI();

        expect(gigwalk.authorization).to.be.instanceof(Authorization);
        expect(gigwalk.authorization.client).to.equal(gigwalk.client);

        expect(gigwalk.certifications).to.be.instanceof(Certifications);
        expect(gigwalk.certifications.client).to.equal(gigwalk.client);

        expect(gigwalk.customers).to.be.instanceof(Customers);
        expect(gigwalk.customers.client).to.equal(gigwalk.client);

        expect(gigwalk.locationLists).to.be.instanceof(LocationLists);
        expect(gigwalk.locationLists.client).to.equal(gigwalk.client);

        expect(gigwalk.locations).to.be.instanceof(Locations);
        expect(gigwalk.locations.client).to.equal(gigwalk.client);

        expect(gigwalk.organizations).to.be.instanceof(Organizations);
        expect(gigwalk.organizations.client).to.equal(gigwalk.client);

        expect(gigwalk.search).to.be.instanceof(Search);
        expect(gigwalk.search.client).to.equal(gigwalk.client);

        expect(gigwalk.subscriptions).to.be.instanceof(Subscriptions);
        expect(gigwalk.subscriptions.client).to.equal(gigwalk.client);

        expect(gigwalk.targetLists).to.be.instanceof(TargetLists);
        expect(gigwalk.targetLists.client).to.equal(gigwalk.client);

        expect(gigwalk.targets).to.be.instanceof(Targets);
        expect(gigwalk.targets.client).to.equal(gigwalk.client);

        expect(gigwalk.ticketEvents).to.be.instanceof(TicketEvents);
        expect(gigwalk.ticketEvents.client).to.equal(gigwalk.client);

        expect(gigwalk.tickets).to.be.instanceof(Tickets);
        expect(gigwalk.tickets.client).to.equal(gigwalk.client);
    });
});
