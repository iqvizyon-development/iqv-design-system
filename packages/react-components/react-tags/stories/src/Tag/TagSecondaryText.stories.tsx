import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Tag } from '@iqvizyonui/react-components';

export const SecondaryText = (): JSXElement => <Tag secondaryText="Secondary text">Primary text</Tag>;

SecondaryText.storyName = 'SecondaryText';
SecondaryText.parameters = {
  docs: {
    description: {
      story: 'A Tag can have a secondary text.',
    },
  },
};
