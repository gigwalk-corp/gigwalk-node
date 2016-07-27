import Client from '../src/Client';

describe('Gigwalk Client', () => {
    const client = new Client({ baseURL });
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
});
