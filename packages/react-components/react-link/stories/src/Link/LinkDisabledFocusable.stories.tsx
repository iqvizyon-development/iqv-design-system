import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Link } from '@iqvizyonui/react-components';

export const DisabledFocusable = (): JSXElement => (
  <Link inline disabled disabledFocusable href="https://www.bing.com">
    Disabled but still focusable
  </Link>
);
