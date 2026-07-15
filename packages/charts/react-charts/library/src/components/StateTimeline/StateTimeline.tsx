'use client';

import * as React from 'react';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import type { StateTimelineProps } from './StateTimeline.types';
import { renderStateTimeline_unstable } from './renderStateTimeline';
import { useStateTimeline_unstable } from './useStateTimeline';
import { useStateTimelineStyles_unstable } from './useStateTimelineStyles.styles';

/**
 * Displays how categorical states change over continuous time or numeric intervals.
 */
export const StateTimeline: ForwardRefComponent<StateTimelineProps> = React.forwardRef((props, ref) => {
  const state = useStateTimeline_unstable(props, ref);
  useStateTimelineStyles_unstable(state);
  return renderStateTimeline_unstable(state);
});

StateTimeline.displayName = 'StateTimeline';
