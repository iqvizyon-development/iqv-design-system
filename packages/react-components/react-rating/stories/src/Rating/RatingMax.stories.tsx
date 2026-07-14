import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Rating } from '@iqvizyonui/react-components';

export const Max = (): JSXElement => {
  return <Rating max={10} defaultValue={5} />;
};

Max.parameters = {
  docs: {
    description: {
      story: 'You can specify the number of elements in the Rating with the `max` prop.',
    },
  },
};
