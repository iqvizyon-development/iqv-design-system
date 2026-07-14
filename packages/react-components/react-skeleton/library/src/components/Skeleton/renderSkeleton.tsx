/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { SkeletonContextProvider } from '../../contexts/SkeletonContext';
import type { SkeletonContextValues, SkeletonSlots, SkeletonBaseState } from './Skeleton.types';

/**
 * Render the final JSX of Skeleton
 */
export const renderSkeleton_unstable = (state: SkeletonBaseState, contextValues: SkeletonContextValues): JSXElement => {
  assertSlots<SkeletonSlots>(state);

  return (
    <SkeletonContextProvider value={contextValues.skeletonGroup}>
      <state.root />
    </SkeletonContextProvider>
  );
};
