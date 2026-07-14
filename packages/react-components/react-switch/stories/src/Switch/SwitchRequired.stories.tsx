import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Switch } from '@iqvizyonui/react-components';

export const Required = (): JSXElement => <Switch required label="Required" />;
Required.parameters = {
  docs: {
    description: {
      story: 'When a Switch is marked as `required`, its label also gets the required styling.',
    },
  },
};
