import Certificates from '../src/cerfiticates';
import { expect } from 'chai';

describe('Certificates', () => {
    const certificates = new Certificates();
    it('should pass a smoke test', () => {
        expect(true).to.be.true;
    });
    it('should be able to get all the certificates from the server', () =>
        certificates.fromActiveUser()
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
            })
    );
});
