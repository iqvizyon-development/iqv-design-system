import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Skeleton, SkeletonItem } from '@iqvizyonui/react-components';
import type { SkeletonProps } from '@iqvizyonui/react-components';

export const Default = (props: Partial<SkeletonProps>): JSXElement => (
  <Skeleton {...props} aria-label="Loading Content">
    <SkeletonItem />
  </Skeleton>
);
