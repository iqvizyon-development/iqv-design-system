// @ts-check

/** @type {import('@iqvizyonui/react-integration-tester').Config} */
const config = {
  react: {
    17: {
      runConfig: {
        test: {
          command:
            'jest --passWithNoTests -u --testPathIgnorePatterns components/IqvizyonProvider/IqvizyonProvider-hydrate.test.tsx',
        },
      },
    },
  },
};

module.exports = config;
