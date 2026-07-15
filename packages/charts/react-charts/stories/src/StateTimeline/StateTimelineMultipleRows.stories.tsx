import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import type { StateTimelineDataPoint } from '@iqvizyonui/react-charts';
import { DataVizPalette, StateTimeline } from '@iqvizyonui/react-charts';

const data: StateTimelineDataPoint[] = [
  { start: 0, end: 35, row: 'API', state: 'Healthy', color: DataVizPalette.success },
  { start: 35, end: 52, row: 'API', state: 'Degraded', color: DataVizPalette.warning },
  { start: 52, end: 100, row: 'API', state: 'Healthy', color: DataVizPalette.success },
  { start: 0, end: 60, row: 'Database', state: 'Healthy', color: DataVizPalette.success },
  { start: 60, end: 72, row: 'Database', state: 'Unavailable', color: DataVizPalette.error },
  { start: 72, end: 100, row: 'Database', state: 'Healthy', color: DataVizPalette.success },
  { start: 0, end: 44, row: 'Queue', state: 'Healthy', color: DataVizPalette.success },
  { start: 44, end: 80, row: 'Queue', state: 'Degraded', color: DataVizPalette.warning },
  { start: 80, end: 100, row: 'Queue', state: 'Healthy', color: DataVizPalette.success },
];

export const StateTimelineMultipleRows = (): JSXElement => (
  <StateTimeline
    chartTitle="Service state timeline"
    data={data}
    height={360}
    showYAxisLables
    xAxisTitle="Elapsed minutes"
  />
);

StateTimelineMultipleRows.parameters = {
  docs: {
    description: {
      story: 'Multiple rows share one continuous numeric axis so state changes can be compared across systems.',
    },
  },
};
