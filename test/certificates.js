import axios from 'axios';
import schema from '../src/certificates-schema.json';
import Certificates from '../src/cerfiticates';
import { expect } from 'chai';

describe('Certificates', () => {
    const certificates = new Certificates(axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    }));

    it('should pass a smoke test', () => {
        expect(certificates).to.be.defined;
    });

    it('should be able to get all the certificates from the server', () =>
        certificates.fromActiveUser()
            .then((resp) => {
                expect(resp.status).to.equal(200);
                expect(resp.statusText).to.equal('OK');
                expect(resp.data).to.have.jsonSchema(schema);
            })
    );
});
