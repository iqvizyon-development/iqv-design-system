import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Checkbox } from '@iqvizyonui/react-components';

export const Large = (): JSXElement => <Checkbox size="large" label="Large" />;
Large.parameters = {
  docs: {
    description: {
      story: 'A checkbox can be large in size.',
    },
  },
};
