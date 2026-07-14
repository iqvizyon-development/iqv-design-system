import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { InteractionTag, InteractionTagPrimary } from '@iqvizyonui/react-components';

export const SecondaryText = (): JSXElement => (
  <InteractionTag>
    <InteractionTagPrimary secondaryText="Secondary text">Primary text</InteractionTagPrimary>
  </InteractionTag>
);

SecondaryText.storyName = 'SecondaryText';
SecondaryText.parameters = {
  docs: {
    description: {
      story: 'An InteractionTag can have a secondary text.',
    },
  },
};
