import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { Tag } from '@iqvizyonui/react-components';

export const Icon = (): JSXElement => <Tag icon={<CalendarMonthRegular />}>Primary text</Tag>;

Icon.storyName = 'Icon';
Icon.parameters = {
  docs: {
    description: {
      story: 'A Tag can render a custom icon if provided.',
    },
  },
};
