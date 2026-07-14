import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { RatingDisplay } from '@iqvizyonui/react-components';

export const Max = (): JSXElement => {
  return <RatingDisplay max={10} value={5} />;
};

Max.parameters = {
  docs: {
    description: {
      story: 'You can specify the number of elements in the RatingDisplay with the `max` prop.',
    },
  },
};
