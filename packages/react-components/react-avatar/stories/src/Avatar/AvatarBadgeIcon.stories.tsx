import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Avatar } from '@iqvizyonui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';

export const BadgeIcon = (): JSXElement => <Avatar name="John Doe" badge={{ icon: <CalendarMonthRegular /> }} />;

BadgeIcon.parameters = {
  docs: {
    description: {
      story: 'An Avatar can have a custom icon inside the badge.',
    },
  },
};
