import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, Slider } from '@iqvizyonui/react-components';
import { makeStyles } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';
import type { StateTimelineDataPoint } from '@iqvizyonui/react-charts';
import { DataVizPalette, StateTimeline } from '@iqvizyonui/react-charts';

const atHour = (hour: number, minute = 0): Date => new Date(Date.UTC(2026, 6, 15, hour, minute));

const data: StateTimelineDataPoint[] = [
  { start: atHour(4), end: atHour(4, 20), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(4, 20), end: atHour(4, 40), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(4, 40), end: atHour(5), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(5), end: atHour(5, 10), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(5, 10), end: atHour(7, 5), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(7, 5), end: atHour(7, 55), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(7, 55), end: atHour(8, 25), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(8, 25), end: atHour(8, 35), row: 'Voltage', state: 'Critical', color: DataVizPalette.error },
  { start: atHour(8, 35), end: atHour(10), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(10), end: atHour(10, 20), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(10, 20), end: atHour(10, 40), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(10, 40), end: atHour(11), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(11), end: atHour(13, 30), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(13, 30), end: atHour(13, 40), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(13, 40), end: atHour(14, 30), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
  { start: atHour(14, 30), end: atHour(14, 40), row: 'Voltage', state: 'Warning', color: DataVizPalette.warning },
  { start: atHour(14, 40), end: atHour(15), row: 'Voltage', state: 'Normal', color: DataVizPalette.success },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalM,
  },
  controls: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: tokens.spacingHorizontalL,
  },
  chart: {
    width: '100%',
  },
});

export const StateTimelineDefault = (): JSXElement => {
  const styles = useStyles();
  const [lineWidth, setLineWidth] = React.useState(1);
  const [rowHeight, setRowHeight] = React.useState(32);
  const [fillOpacity, setFillOpacity] = React.useState(0.9);

  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <Field label={`Line width: ${lineWidth}`}>
          <Slider min={0} max={4} step={0.5} value={lineWidth} onChange={(_, value) => setLineWidth(value.value)} />
        </Field>
        <Field label={`Row height: ${rowHeight}`}>
          <Slider min={8} max={64} step={4} value={rowHeight} onChange={(_, value) => setRowHeight(value.value)} />
        </Field>
        <Field label={`Fill opacity: ${fillOpacity.toFixed(1)}`}>
          <Slider
            min={0.1}
            max={1}
            step={0.1}
            value={fillOpacity}
            onChange={(_, value) => setFillOpacity(value.value)}
          />
        </Field>
      </div>
      <div className={styles.chart}>
        <StateTimeline
          chartTitle="System state history"
          data={data}
          fillOpacity={fillOpacity}
          height={320}
          lineWidth={lineWidth}
          rowHeight={rowHeight}
          showYAxisLables
          tickFormat="%H:%M"
          useUTC
        />
      </div>
    </div>
  );
};

StateTimelineDefault.parameters = {
  docs: {
    description: {
      story: 'A continuous state history with configurable interval outlines, row height, and fill opacity.',
    },
  },
};
