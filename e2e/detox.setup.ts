import { cleanup, init } from 'detox';
import * as adapter from 'detox/runners/jest/adapter';

// @ts-ignore
const config = require('../package.json').detox;

jest.setTimeout(120000);
// @ts-ignore
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, { initGlobals: false });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
