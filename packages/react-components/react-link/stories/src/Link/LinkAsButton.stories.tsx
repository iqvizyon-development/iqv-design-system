import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Link } from '@iqvizyonui/react-components';

export const AsButton = (): JSXElement => <Link>Render as a button</Link>;

AsButton.parameters = {
  docs: {
    description: {
      story: ['When the `href` property is not provided, the component is rendered as an html `<button>`'].join('\n'),
    },
  },
};
