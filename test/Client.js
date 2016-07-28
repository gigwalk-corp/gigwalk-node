import Client from '../src/Client';
import Mock from 'axios-mock-adapter';
import sinon from 'sinon';

describe('Gigwalk Client', () => {
    const client = new Client({ baseURL });
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });
    it('should be able to authorize and set the default authorization header', () =>
        client.authorize(email, password)
            .then((res) => {
                const token = res.data.data[0].auth_token;
                expect(client.defaults.headers.common.Authorization).to.equal(`Token ${token}`);
                return Promise.all([
                    client.get('/v1/versions/current'),
                    client.versions.get()
                ])
                    .then(([res1, res2]) => {
                        expect(res1.data.data).to.deep.equal(res2.data.data);
                    });
            })
    );

    it('should allow a user to set the auth token and verify that it is correct', () =>
        client.setAuthToken(process.env.GIGWALK_TEST_TOKEN)
            .then(res => {
                const token = res.data.data[0].auth_token;
                expect(client.defaults.headers.common.Authorization).to.equal(`Token ${token}`);
            })
    );

    it('should only allow for a single request at a time', () => {
        const mock = new Mock(client);
        sandbox.useFakeTimers();
        const spy = sandbox.spy(() => [200, {}]);
        mock.onAny(/.*/).reply(spy);
        const promise = Promise.all((() => {
            const requests = [];
            for (let i = 0; i < 20; i++) {
                requests.push(client.get('/'));
            }
            return requests;
        })())
            .then((results) => {
                results.forEach((result) => {
                    expect(result.status).to.equal(200);
                });
                expect(spy).to.have.been.calledOnce;
                mock.restore();
            });

        sandbox.clock.tick(1);
        return promise;
    });
});
