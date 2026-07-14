'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import { useDividerStyles_unstable, type DividerSlots } from '@iqvizyonui/react-divider';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { NavDividerState } from './NavDivider.types';

export const navDividerClassNames: SlotClassNames<DividerSlots> = {
  root: 'iui-NavDivider',
  wrapper: 'iui-NavDivider__wrapper',
};

const useStyles = makeStyles({
  root: {
    flexGrow: 0,
    marginTop: '4px',
    marginBottom: '4px',
  },
});

/**
 * Apply styling to the NavDivider slots based on the state
 */
export const useNavDividerStyles_unstable = (state: NavDividerState): NavDividerState => {
  const styles = useStyles();

  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(navDividerClassNames.root, styles.root, state.root.className);
  // eslint-disable-next-line react-hooks/immutability
  state.wrapper.className = mergeClasses(navDividerClassNames.wrapper, state.wrapper.className);

  useDividerStyles_unstable(state);
  return state;
};
