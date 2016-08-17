import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import chaiAsPromised from 'chai-as-promised';
import dotenv from 'dotenv';
import path from 'path';
import sinonChai from 'sinon-chai';

/**
 * Use to setup environmental config for local development.
 * @link https://www.npmjs.com/package/dotenv
 */
dotenv.config({ silent: true, path: path.resolve(__dirname, '../.env') });
chai.use(chaiJsonSchema);
chai.use(chaiAsPromised);
chai.use(sinonChai);

global.expect = expect;
global.baseURL = 'https://stage-api.apps.gigwalk.com';
global.token = 'Token 4ccad270d29b4884a36cbc0f56180f97';
