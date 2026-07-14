import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Link } from '@iqvizyonui/react-components';

export const Disabled = (): JSXElement => (
  <Link disabled href="https://www.bing.com">
    Disabled link
  </Link>
);
