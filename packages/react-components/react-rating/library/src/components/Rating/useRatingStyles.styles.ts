'use client';

import { makeResetStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { RatingSlots, RatingState } from './Rating.types';

export const ratingClassNames: SlotClassNames<RatingSlots> = {
  root: 'iui-Rating',
};

/**
 * Styles for the root slot
 */

const useRootClassName = makeResetStyles({
  display: 'flex',
  flexWrap: 'wrap',
});

/**
 * Apply styling to the Rating slots based on the state
 */
export const useRatingStyles_unstable = (state: RatingState): RatingState => {
  const rootClassName = useRootClassName();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(ratingClassNames.root, rootClassName, state.root.className);
  return state;
};
