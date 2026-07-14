import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { RatingDisplay } from '@iqvizyonui/react-components';

export const Compact = (): JSXElement => <RatingDisplay compact value={3} count={1160} />;

Compact.parameters = {
  docs: {
    description: {
      story: 'You can specify a compact RatingDisplay with `compact`.',
    },
  },
};
