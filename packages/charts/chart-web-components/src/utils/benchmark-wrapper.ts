// eslint-disable-next-line
// @ts-nocheck
import { tests } from '@tensile-perf/web-components';
import { webLightTheme } from '@iqvizyonui/tokens';
import { setTheme } from '@iqvizyonui/web-components';

const testWrapper = (test: any, args: any) => {
  setTheme(webLightTheme);
  return test(args);
};

const wrappedTests = {};

for (const testName of Object.keys(tests)) {
  const test = tests[testName];

  wrappedTests[testName] = (args: any) => {
    return testWrapper(test, args);
  };
}

export { wrappedTests as tests };
