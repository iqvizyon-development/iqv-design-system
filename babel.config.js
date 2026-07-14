module.exports = api => ({
  ...require('@iqvizyonui/scripts-babel')(api),
  babelrcRoots: ['./packages/*'],
});
