import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Checkbox } from '@iqvizyonui/react-components';
import type { CheckboxProps } from '@iqvizyonui/react-components';

export const Default = (props: CheckboxProps): JSXElement => <Checkbox {...props} />;
Default.argTypes = {
  label: {
    control: 'text',
    defaultValue: 'Checkbox',
    type: 'string',
  },
  checked: {
    control: {
      type: 'inline-radio',
      options: [undefined, false, true, 'mixed'],
    },
  },
  size: {
    control: {
      type: 'inline-radio',
    },
  },
  defaultChecked: {
    control: {
      type: 'inline-radio',
      options: [false, true, 'mixed'],
    },
  },
};
