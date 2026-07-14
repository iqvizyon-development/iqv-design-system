'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { ButtonSlots } from '@iqvizyonui/react-button';
import { useButtonStyles_unstable } from '@iqvizyonui/react-button';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { HamburgerState } from './Hamburger.types';
import { navItemTokens } from '../sharedNavStyles.styles';

export const hamburgerClassNames: SlotClassNames<ButtonSlots> = {
  root: 'iui-Hamburger',
  icon: 'iui-Hamburger__icon',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    textDecorationLine: 'none',
    backgroundColor: navItemTokens.backgroundColor,
    border: 'none',
    ':hover': {
      backgroundColor: navItemTokens.backgroundColorHover,
    },
    ':active': {
      backgroundColor: navItemTokens.backgroundColorPressed,
    },
  },
});

/**
 * Apply styling to the Hamburger slots based on the state
 */
export const useHamburgerStyles_unstable = (state: HamburgerState): HamburgerState => {
  useButtonStyles_unstable(state);
  const styles = useStyles();

  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(hamburgerClassNames.root, styles.root, state.root.className);

  if (state.icon) {
    // eslint-disable-next-line react-hooks/immutability
    state.icon.className = mergeClasses(hamburgerClassNames.icon, state.icon.className);
  }

  return state;
};
