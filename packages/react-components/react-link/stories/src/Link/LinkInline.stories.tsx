import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Link } from '@iqvizyonui/react-components';

export const Inline = (): JSXElement => (
  <div>
    This is an{' '}
    <Link href="https://www.bing.com" inline>
      inline link
    </Link>{' '}
    used alongside other text
  </div>
);
