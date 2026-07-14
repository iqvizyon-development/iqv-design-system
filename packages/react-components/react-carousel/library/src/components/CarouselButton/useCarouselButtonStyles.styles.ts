'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { CarouselButtonSlots, CarouselButtonState } from './CarouselButton.types';
import { useButtonStyles_unstable } from '@iqvizyonui/react-button';
import { tokens } from '@iqvizyonui/react-theme';

export const carouselButtonClassNames: SlotClassNames<CarouselButtonSlots> = {
  root: 'iui-CarouselButton',
  icon: 'iui-CarouselButton__icon',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackgroundAlpha,
    pointerEvents: 'all',
    ':hover': {
      cursor: 'pointer',
    },
  },
});

/**
 * Apply styling to the CarouselButton slots based on the state
 */
export const useCarouselButtonStyles_unstable = (state: CarouselButtonState): CarouselButtonState => {
  'use no memo'; // justified: compiler would optimize useCarouselButtonStyles_unstable — manual opt-out to preserve runtime behavior

  const styles = useStyles();

  state = {
    ...state,
    ...useButtonStyles_unstable(state),
  };

  state.root.className = mergeClasses(carouselButtonClassNames.root, styles.root, state.root.className);

  if (state.icon) {
    state.icon.className = mergeClasses(carouselButtonClassNames.icon, state.icon.className);
  }

  return state;
};
