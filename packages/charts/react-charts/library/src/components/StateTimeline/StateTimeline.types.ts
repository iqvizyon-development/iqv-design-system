import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';
import type { AccessibilityProps, GanttChartDataPoint } from '../../types/index';
import type { RenderFunction } from '../../utilities/index';
import type { GanttChartProps } from '../GanttChart/index';

export type StateTimelineSlots = {
  root: Slot<'div'>;
};

/**
 * A single state interval rendered in a State Timeline chart.
 * {@docCategory StateTimeline}
 */
export interface StateTimelineDataPoint {
  /** Start of the interval. */
  start: Date | number;

  /** End of the interval. */
  end: Date | number;

  /** Label of the row that contains the interval. */
  row: string;

  /** State represented by the interval. */
  state: string;

  /** Data visualization token or CSS color used for the interval. */
  color?: string;

  /** Optional text used instead of the formatted interval in the callout. */
  timeRangeLabel?: string;

  /** Optional text used instead of the row label in the callout. */
  rowLabel?: string;

  /** Action invoked when the interval is clicked. */
  onClick?: VoidFunction;

  /** Accessibility data for the interval. */
  callOutAccessibilityData?: AccessibilityProps;
}

type InheritedGanttChartProps = Omit<
  GanttChartProps,
  | 'barHeight'
  | 'barStrokeColor'
  | 'barStrokeWidth'
  | 'data'
  | 'fillOpacity'
  | 'maxBarHeight'
  | 'onRenderCalloutPerDataPoint'
>;

/**
 * State Timeline chart properties.
 * {@docCategory StateTimeline}
 */
export type StateTimelineProps = Omit<ComponentProps<StateTimelineSlots>, 'children'> &
  InheritedGanttChartProps & {
    /** State intervals to render. */
    data?: StateTimelineDataPoint[];

    /** Height of each timeline row, in pixels. */
    rowHeight?: number;

    /** Width of the line around each interval, in pixels. */
    lineWidth?: number;

    /** Design token or CSS color used for interval outlines. */
    lineColor?: string;

    /** Opacity of interval fills. Takes a number in the range [0, 1]. */
    fillOpacity?: number;

    /** Callback used to render custom callout content for an interval. */
    onRenderCalloutPerDataPoint?: RenderFunction<StateTimelineDataPoint>;
  };

/**
 * State used to render a State Timeline chart.
 * {@docCategory StateTimeline}
 */
export type StateTimelineState = ComponentState<StateTimelineSlots> & {
  chartProps: GanttChartProps;
};

export type StateTimelineGanttDataPoint = GanttChartDataPoint & {
  source: StateTimelineDataPoint;
};
