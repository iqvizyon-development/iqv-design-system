import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Label } from '@iqvizyonui/react-components';

export const Weight = (): JSXElement => <Label weight="semibold">Strong label</Label>;

Weight.parameters = {
  docs: {
    description: {
      story: 'A Label with a semibold font weight.',
    },
  },
};
