/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { RatingBaseState, RatingSlots, RatingContextValues } from './Rating.types';
import { RatingItemProvider } from '../../contexts/RatingItemContext';

/**
 * Render the final JSX of Rating
 */
export const renderRating_unstable = (state: RatingBaseState, contextValues: RatingContextValues): JSXElement => {
  assertSlots<RatingSlots>(state);

  return (
    <RatingItemProvider value={contextValues.ratingItem}>
      <state.root />
    </RatingItemProvider>
  );
};
