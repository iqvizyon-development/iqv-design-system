'use client';

import { tokens } from '@iqvizyonui/react-theme';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { ListboxSlots, ListboxState } from './Listbox.types';

export const listboxClassNames: SlotClassNames<ListboxSlots> = {
  root: 'iui-Listbox',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '160px',
    overflowY: 'auto',
    outline: `1px solid ${tokens.colorTransparentStroke}`,
    padding: tokens.spacingHorizontalXS,
    rowGap: tokens.spacingHorizontalXXS,
  },
});

/**
 * Apply styling to the Listbox slots based on the state
 */
export const useListboxStyles_unstable = (state: ListboxState): ListboxState => {
  const styles = useStyles();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(listboxClassNames.root, styles.root, state.root.className);

  return state;
};
