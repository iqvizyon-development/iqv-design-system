'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { StateTimelineSlots, StateTimelineState } from './StateTimeline.types';

export const stateTimelineClassNames: SlotClassNames<StateTimelineSlots> = {
  root: 'iui-state-timeline__root',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
});

/**
 * Applies styles to the State Timeline chart.
 */
export const useStateTimelineStyles_unstable = (state: StateTimelineState): StateTimelineState => {
  const styles = useStyles();
  state.root.className = mergeClasses(stateTimelineClassNames.root, styles.root, state.root.className);
  return state;
};
