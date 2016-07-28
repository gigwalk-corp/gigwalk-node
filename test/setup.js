import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import chaiAsPromised from 'chai-as-promised';
import dotenv from 'dotenv';
import sinonChai from 'sinon-chai';
import path from 'path';

/**
 * Use to setup environmental config for local development.
 * @link https://www.npmjs.com/package/dotenv
 */
dotenv.config({ silent: true, path: path.resolve(__dirname, '../.env') });
chai.use(chaiJsonSchema);
chai.use(chaiAsPromised);
chai.use(sinonChai);

global.expect = expect;
global.baseURL = process.env.GIGWALK_TEST_BASEURL;
global.token = `Token ${process.env.GIGWALK_TEST_TOKEN}`;
global.email = process.env.GIGWALK_TEST_EMAIL;
global.password = process.env.GIGWALK_TEST_PASSWORD;
