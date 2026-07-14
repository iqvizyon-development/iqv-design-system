import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { PresenceBadge } from '@iqvizyonui/react-components';

export const OutOfOffice = (): JSXElement => {
  return (
    <>
      <PresenceBadge outOfOffice status="available" />
      <PresenceBadge outOfOffice status="away" />
      <PresenceBadge outOfOffice status="busy" />
      <PresenceBadge outOfOffice status="do-not-disturb" />
      <PresenceBadge outOfOffice status="offline" />
      <PresenceBadge outOfOffice status="out-of-office" />
      <PresenceBadge outOfOffice status="blocked" />
      <PresenceBadge outOfOffice status="unknown" />
    </>
  );
};

OutOfOffice.parameters = {
  docs: {
    description: {
      story:
        'A presence badge supports `available`, `away`, `busy`, `do-not-disturb`, ' +
        '`offline`, `out-of-office`, `blocked` and `unknown` status when `outOfOffice` is set.',
    },
  },
};
