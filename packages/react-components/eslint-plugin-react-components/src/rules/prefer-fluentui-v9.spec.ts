import { RuleTester } from '@typescript-eslint/rule-tester';
import { RULE_NAME, rule } from './prefer-fluentui-v9';

const ruleTester = new RuleTester();

ruleTester.run(RULE_NAME, rule, {
  valid: [
    {
      code: `import type { IDropdownOption } from '@iqvizyonui/react';`,
    },
    {
      code: `import type { ITheme } from '@iqvizyonui/react';`,
    },
    {
      code: `import { ThemeProvider } from '@iqvizyonui/react';`,
    },
    {
      code: `import { Button } from '@iqvizyonui/react-components';`,
    },
  ],
  invalid: [
    {
      code: `import { Dropdown, Icon } from '@iqvizyonui/react';`,
      errors: [{ messageId: 'replaceFluent8With9' }, { messageId: 'replaceIconWithJsx' }],
    },
    {
      code: `import { Stack } from '@iqvizyonui/react';`,
      errors: [{ messageId: 'replaceStackWithFlex' }],
    },
    {
      code: `import { DatePicker } from '@iqvizyonui/react';`,
      errors: [
        {
          messageId: 'replaceFluent8With9',
          data: { fluent8: 'DatePicker', fluent9: 'DatePicker', package: '@iqvizyonui/react-datepicker-compat' },
        },
      ],
    },
    {
      code: `import { CompoundButton } from '@iqvizyonui/react/lib/Button';`,
      errors: [
        {
          messageId: 'replaceFluent8With9',
          data: { fluent8: 'CompoundButton', fluent9: 'CompoundButton', package: '@iqvizyonui/react-components' },
        },
      ],
    },
    {
      code: `import { Stack } from '@iqvizyonui/react/lib/Stack';`,
      errors: [{ messageId: 'replaceStackWithFlex' }],
    },
  ],
});
