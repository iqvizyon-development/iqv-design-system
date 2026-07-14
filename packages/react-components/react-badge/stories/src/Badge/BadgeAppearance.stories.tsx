import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { Badge } from '@iqvizyonui/react-components';

export const Appearance = (): JSXElement => {
  return (
    <>
      <Badge appearance="filled">999+</Badge>
      <Badge appearance="ghost">999+</Badge>
      <Badge appearance="outline">999+</Badge>
      <Badge appearance="tint">999+</Badge>
    </>
  );
};

Appearance.parameters = {
  docs: {
    description: {
      story: 'A badge can have a `filled`, `ghost`, `outline`, or `tint` appearance. The default is `filled`.',
    },
  },
};
