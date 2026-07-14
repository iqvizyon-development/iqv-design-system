'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TeachingPopoverSurfaceSlots, TeachingPopoverSurfaceState } from './TeachingPopoverSurface.types';
import { usePopoverSurfaceStyles_unstable } from '@iqvizyonui/react-popover';
import { tokens } from '@iqvizyonui/react-theme';

export const teachingPopoverSurfaceClassNames: SlotClassNames<TeachingPopoverSurfaceSlots> = {
  root: 'iui-TeachingPopoverSurface',
};

const useStyles = makeStyles({
  root: {
    padding: `${tokens.spacingVerticalL} ${tokens.spacingVerticalL}`,
    borderRadius: tokens.borderRadiusXLarge,
    minWidth: '320px',
    boxSizing: 'border-box',
  },
});

/**
 * Apply styling to the TeachingPopoverSurface slots based on the state
 */
export const useTeachingPopoverSurfaceStyles_unstable = (
  state: TeachingPopoverSurfaceState,
): TeachingPopoverSurfaceState => {
  const styles = useStyles();

  // Make sure to merge teaching bubble surface prior to popover styles
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(teachingPopoverSurfaceClassNames.root, styles.root, state.root.className);

  const updatedState = usePopoverSurfaceStyles_unstable(state);

  return updatedState;
};
