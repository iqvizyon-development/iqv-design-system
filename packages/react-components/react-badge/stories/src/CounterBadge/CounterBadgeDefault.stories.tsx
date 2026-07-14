import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { CounterBadge } from '@iqvizyonui/react-components';
import type { CounterBadgeProps } from '@iqvizyonui/react-components';

export const Default = (args: CounterBadgeProps): JSXElement => <CounterBadge {...args} />;

Default.args = {
  count: 5,
};
