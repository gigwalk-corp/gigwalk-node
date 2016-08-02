import GigwalkAxios from '../src/client';
import RequestQueue from '../src/requestQueue';
import { Axios } from 'axios';
import sinon from 'sinon';
import mockery from 'mockery';

describe('GigwalkAxios', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
        mockery.deregisterAll();
    });

    it('should extend Axios', () => {
        const client = new GigwalkAxios();
        expect(client).to.be.instanceOf(Axios);
    });

    it('should instantiate a new RequestQueue with the correct adapter', () => {
        const requestQueueStub = sandbox.stub();
        GigwalkAxios.__Rewire__('RequestQueue', requestQueueStub);

        const mockXHRAdapter = function mockXHRAdapter() {};
        const mockHttpAdapter = function mockHttpAdapter() {};
        mockery.registerMock('axios/lib/adapters/xhr', mockXHRAdapter);
        mockery.registerMock('axios/lib/adapters/http', mockHttpAdapter);

        // Simulate browser if running in a node environment
        let restoreGlobal = false;
        if (typeof XMLHttpRequest === 'undefined') {
            restoreGlobal = true;
            global.XMLHttpRequest = {};
        }

        mockery.enable();
        new GigwalkAxios(); // eslint-disable-line no-new
        mockery.disable();

        if (restoreGlobal) {
            delete global.XMLHttpRequest;
        }

        expect(requestQueueStub).to.have.been.calledWithNew;
        expect(requestQueueStub).to.have.been.calledWith(mockXHRAdapter);

        // Simulate a node environment if running in a browser
        restoreGlobal = false;
        if (typeof process === 'undefined') {
            restoreGlobal = true;
            global.process = {};
        }

        mockery.enable();
        new GigwalkAxios(); // eslint-disable-line no-new
        mockery.disable();

        if (restoreGlobal) {
            delete global.process;
        }

        expect(requestQueueStub).to.have.been.calledWithNew;
        expect(requestQueueStub).to.have.been.calledWith(mockHttpAdapter);

        GigwalkAxios.__ResetDependency__('RequestQueue');
    });

    it('should dispatch all requests to the RequestQueue', (done) => {
        const requestQueueAddStub = sandbox.stub(RequestQueue.prototype, 'add');
        const client = new GigwalkAxios();
        const promise = Promise.resolve({});
        requestQueueAddStub.returns(promise);

        expect(client.get('/v1/tickets')).to.be.fulfilled.then(() => {
            expect(requestQueueAddStub).to.have.been.calledOnce;
            done();
        });
    });
});
