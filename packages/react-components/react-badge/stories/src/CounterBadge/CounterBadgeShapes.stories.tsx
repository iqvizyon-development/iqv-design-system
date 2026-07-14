import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { CounterBadge } from '@iqvizyonui/react-components';

export const Shapes = (): JSXElement => {
  return (
    <>
      <CounterBadge count={5} shape="circular" />
      <CounterBadge count={5} shape="rounded" />
    </>
  );
};

Shapes.parameters = {
  docs: {
    description: {
      story: 'A counter badge can have a `rounded` or `circular` shape. The default is `circular`.',
    },
  },
};
