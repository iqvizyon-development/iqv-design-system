'use client';

import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@iqvizyonui/react-utilities';
import { tokens } from '@iqvizyonui/react-theme';
import type { GanttChartProps } from '../GanttChart/index';
import type {
  StateTimelineDataPoint,
  StateTimelineGanttDataPoint,
  StateTimelineProps,
  StateTimelineState,
} from './StateTimeline.types';

const DEFAULT_ROW_HEIGHT = 24;
const DEFAULT_LINE_WIDTH = 1;
const DEFAULT_FILL_OPACITY = 0.9;

const clamp = (value: number, minimum: number, maximum?: number): number =>
  Math.min(Math.max(value, minimum), maximum ?? Number.POSITIVE_INFINITY);

/**
 * Creates the state used to render a State Timeline chart.
 */
export const useStateTimeline_unstable = (
  props: StateTimelineProps,
  ref: React.Ref<HTMLDivElement>,
): StateTimelineState => {
  const {
    data = [],
    rowHeight = DEFAULT_ROW_HEIGHT,
    lineWidth = DEFAULT_LINE_WIDTH,
    lineColor = tokens.colorNeutralStroke1,
    fillOpacity = DEFAULT_FILL_OPACITY,
    onRenderCalloutPerDataPoint,
  } = props;

  const rootProps = getIntrinsicElementProps('div', { ...props, ref }, [
    'data',
    'fillOpacity',
    'height',
    'href',
    'lineColor',
    'lineWidth',
    'onRenderCalloutPerDataPoint',
    'rowHeight',
    'width',
  ]);

  const chartProps = React.useMemo(() => {
    const nativePropNames = new Set(Object.keys(rootProps));
    const inheritedProps = Object.fromEntries(
      Object.entries(props).filter(([propName]) => !nativePropNames.has(propName)),
    ) as Record<string, unknown>;

    delete inheritedProps.as;
    delete inheritedProps.root;
    delete inheritedProps.data;
    delete inheritedProps.fillOpacity;
    delete inheritedProps.lineColor;
    delete inheritedProps.lineWidth;
    delete inheritedProps.onRenderCalloutPerDataPoint;
    delete inheritedProps.rowHeight;

    const transformedData: StateTimelineGanttDataPoint[] = data.map(point => ({
      x: { start: point.start, end: point.end },
      y: point.row,
      legend: point.state,
      color: point.color,
      xAxisCalloutData: point.timeRangeLabel,
      yAxisCalloutData: point.rowLabel,
      onClick: point.onClick,
      callOutAccessibilityData: point.callOutAccessibilityData,
      source: point,
    }));

    const transformedBySource = new Map<StateTimelineDataPoint, StateTimelineGanttDataPoint>(
      transformedData.map(point => [point.source, point]),
    );
    const rowCount = new Set(data.map(point => point.row)).size;
    const intervalLabel = data.length === 1 ? 'interval' : 'intervals';
    const rowLabel = rowCount === 1 ? 'row' : 'rows';
    const chartName = props.chartTitle ? `${props.chartTitle}. ` : '';
    const defaultAriaLabel = `${chartName}State timeline with ${data.length} ${intervalLabel} across ${rowCount} ${rowLabel}.`;

    const renderCallout: GanttChartProps['onRenderCalloutPerDataPoint'] = onRenderCalloutPerDataPoint
      ? (point, defaultRender) => {
          const timelinePoint = (point as StateTimelineGanttDataPoint | undefined)?.source;
          const timelineDefaultRender = (nextPoint?: StateTimelineDataPoint) => {
            const ganttPoint = nextPoint ? transformedBySource.get(nextPoint) : point;
            return defaultRender?.(ganttPoint) ?? null;
          };
          return onRenderCalloutPerDataPoint(timelinePoint, timelineDefaultRender);
        }
      : undefined;

    const nextChartProps: GanttChartProps = {
      ...(inheritedProps as GanttChartProps),
      data: transformedData,
      barHeight: clamp(rowHeight, 1),
      maxBarHeight: clamp(rowHeight, 1),
      barStrokeWidth: clamp(lineWidth, 0),
      barStrokeColor: lineColor,
      fillOpacity: clamp(fillOpacity, 0, 1),
      svgProps: {
        ...props.svgProps,
        'aria-label': props.svgProps?.['aria-label'] ?? defaultAriaLabel,
      },
      onRenderCalloutPerDataPoint: renderCallout,
    };

    return nextChartProps;
  }, [data, fillOpacity, lineColor, lineWidth, onRenderCalloutPerDataPoint, props, rootProps, rowHeight]);

  return {
    components: { root: 'div' },
    root: slot.always(rootProps, { elementType: 'div' }),
    chartProps,
  };
};
