const { RuleTester } = require('@typescript-eslint/rule-tester');
const rule = require('./index');

const ruleTester = new RuleTester();

ruleTester.run('no-restricted-imports', rule, {
  valid: [
    {
      code: `
        import { webLightTheme } from '@iqvizyonui/react-components';
      `,
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
            },
          ],
        },
      ],
    },
    {
      code: `
        import { webDarkTheme } from '@iqvizyonui/react-components';
      `,
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
    },
    {
      code: `
        import type { TypographyStyle } from '@iqvizyonui/react-components';
      `,
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
    },
    {
      code: `
        import type { TypographyStyle, SpinnerProps } from '@iqvizyonui/react-components';
        import { makeStyles } from '@iqvizyonui/react-components';
      `,
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme', '@iqvizyonui/react-spinner'],
              preferred: '@iqvizyonui/react-components',
            },
            {
              forbidden: ['@griffel/react'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
    },
  ],
  invalid: [
    {
      code: `
        import { webDarkTheme } from '@iqvizyonui/react-theme';
      `,
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
            },
          ],
        },
      ],
    },
    {
      code: `
        import type { TypographyStyle } from '@iqvizyonui/react-theme';
      `,
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
            },
          ],
        },
      ],
    },
    {
      code: `
        import { webDarkTheme } from '@iqvizyonui/react-theme';
      `,
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: `
        import { webDarkTheme } from '@iqvizyonui/react-components';
      `,
    },
    {
      code: `
        import type { TypographyStyle } from '@iqvizyonui/react-theme';
      `,
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: `
        import type { TypographyStyle } from '@iqvizyonui/react-components';
      `,
    },
    {
      code: `
        import type { SpinnerProps, TypographyStyle } from '@iqvizyonui/react-components';
        import { makeStyles } from '@griffel/react';
      `,
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-spinner', '@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
            {
              forbidden: ['@griffel/react'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: `
        import type { SpinnerProps, TypographyStyle } from '@iqvizyonui/react-components';
        import { makeStyles } from '@iqvizyonui/react-components';
      `,
    },
    {
      code: "import { Spinner, Text } from '@iqvizyonui/react-components';import { makeStyles } from '@griffel/react';",
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-spinner', '@iqvizyonui/react-theme'],
              preferred: '@iqvizyonui/react-components',
            },
            {
              forbidden: ['@griffel/react'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: `import { Spinner, Text, makeStyles } from '@iqvizyonui/react-components';`,
    },
    {
      code: "import type { SpinnerProps } from '@iqvizyonui/react-components';import type { TextProps } from '@iqvizyonui/react-text';",
      errors: [{ messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-text'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: "import type { SpinnerProps, TextProps } from '@iqvizyonui/react-components';",
    },
    {
      code: "import type { SpinnerProps } from '@iqvizyonui/react-spinner';import { Text } from '@iqvizyonui/react-text';",
      errors: [{ messageId: 'restrictedImport' }, { messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-spinner', '@iqvizyonui/react-text'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output:
        "import type { SpinnerProps } from '@iqvizyonui/react-components';import { Text } from '@iqvizyonui/react-components';",
    },
    {
      code: "import type { SpinnerProps } from '@iqvizyonui/react-spinner';import type { TextProps } from '@iqvizyonui/react-text';",
      errors: [{ messageId: 'restrictedImport' }, { messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-spinner', '@iqvizyonui/react-text'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output: "import type { SpinnerProps, TextProps } from '@iqvizyonui/react-components';",
    },
    {
      code: "import { Spinner } from '@iqvizyonui/react-spinner';import { Text } from '@iqvizyonui/react-text';import type { SpinnerProps } from '@iqvizyonui/react-spinner';",
      errors: [{ messageId: 'restrictedImport' }, { messageId: 'restrictedImport' }, { messageId: 'restrictedImport' }],
      options: [
        {
          paths: [
            {
              forbidden: ['@iqvizyonui/react-spinner', '@iqvizyonui/react-text'],
              preferred: '@iqvizyonui/react-components',
            },
          ],
        },
      ],
      output:
        "import { Spinner, Text } from '@iqvizyonui/react-components';import type { SpinnerProps } from '@iqvizyonui/react-components';",
    },
  ],
});
