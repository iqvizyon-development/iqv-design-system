import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Link } from '@iqvizyonui/react-components';
import type { LinkProps } from '@iqvizyonui/react-components';

export const Default = (props: LinkProps & { as?: 'a' }): JSXElement => (
  <Link href="https://www.bing.com" {...props}>
    This is a link
  </Link>
);
