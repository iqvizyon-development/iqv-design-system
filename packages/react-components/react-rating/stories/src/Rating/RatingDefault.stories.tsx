import * as React from 'react';
import type { JSXElement, RatingProps } from '@iqvizyonui/react-components';
import { Rating } from '@iqvizyonui/react-components';

export const Default = (props: Partial<RatingProps>): JSXElement => {
  return <Rating {...props} />;
};
