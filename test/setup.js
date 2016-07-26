import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiJsonSchema);
chai.use(chaiAsPromised);

global.expect = expect;
