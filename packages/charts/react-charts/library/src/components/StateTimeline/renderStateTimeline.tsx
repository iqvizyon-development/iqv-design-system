/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { GanttChart } from '../GanttChart/index';
import type { StateTimelineSlots, StateTimelineState } from './StateTimeline.types';

/**
 * Renders a State Timeline chart.
 */
export const renderStateTimeline_unstable = (state: StateTimelineState): JSXElement => {
  assertSlots<StateTimelineSlots>(state);

  return (
    <state.root>
      <GanttChart {...state.chartProps} />
    </state.root>
  );
};
