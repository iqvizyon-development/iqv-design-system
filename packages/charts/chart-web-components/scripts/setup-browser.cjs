/**
 *
 * @param r {__WebpackModuleApi.RequireContext}
 *
 * This script should be shared for all web-component packages.
 * Tracking issue - https://github.com/iBz-04/iqvui/issues/33576
 */
function importAll(r) {
  r.keys().forEach(r);
}

// Explicitly add to browser test
importAll(require.context('../dist/esm', true, /\.spec\.js$/));
