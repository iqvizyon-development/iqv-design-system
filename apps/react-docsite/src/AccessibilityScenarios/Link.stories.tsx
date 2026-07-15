import * as React from 'react';

import { Link } from '@iqvizyonui/react-components';

import { Scenario } from './utils';

export const SiteNavigationLinks: React.FunctionComponent = () => {
  return (
    <Scenario pageTitle="Site navigation links">
      <nav aria-label="Main menu">
        <ul>
          <li>
            <Link href="https://iqvizyon.com" target="_blank">
              Iqvizyon
            </Link>
          </li>
          <li>
            <Link href="https://iqvizyon.com/docs" target="_blank">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="https://github.com/iBz-04/iqvui" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://iqvizyon.com/blog" target="_blank">
              Blog
            </Link>
          </li>
          <li>
            <Link href="https://iqvizyon.com/pricing" target="_blank" disabled>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="https://iqvizyon.com/support" target="_blank" disabledFocusable>
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </Scenario>
  );
};
