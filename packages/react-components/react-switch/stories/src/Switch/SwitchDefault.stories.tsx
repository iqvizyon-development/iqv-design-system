import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Switch } from '@iqvizyonui/react-components';
import type { SwitchProps } from '@iqvizyonui/react-components';

export const Default = (props: SwitchProps): JSXElement => <Switch label="This is a switch" {...props} />;

Default.argTypes = {
  checked: {
    control: {
      type: 'inline-radio',
      options: [undefined, false, true],
    },
  },
  defaultChecked: {
    control: {
      type: 'inline-radio',
      options: [false, true],
    },
  },
};
