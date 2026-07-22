import * as React from 'react';

import type { Meta } from '@storybook/react-webpack5';
import { CounterBadge } from '@iqvizyonui/react-components';
import descriptionMd from './CounterBadgeDescription.md';
export { Default } from './CounterBadgeDefault.stories';
export { Appearance } from './CounterBadgeAppearance.stories';
export { Shapes } from './CounterBadgeShapes.stories';
export { Sizes } from './CounterBadgeSizes.stories';
export { Color } from './CounterBadgeColor.stories';
export { Dot } from './CounterBadgeDot.stories';

export default {
  title: 'Components/Badge/Counter Badge',
  component: CounterBadge,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
