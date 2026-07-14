import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import type { ChartProps } from '@iqvizyonui/react-charts';
import { HorizontalBarChart, DataVizPalette, getColorFromToken } from '@iqvizyonui/react-charts';

export const HorizontalBarBenchmark = (): JSXElement => {
  const hideRatio: boolean[] = [true, false];
  const data: ChartProps[] = [
    {
      chartTitle: 'one',
      chartData: [
        {
          legend: 'one',
          data: 50,
          horizontalBarChartdata: { x: 10, total: 100 },
          color: getColorFromToken(DataVizPalette.color25),
        },
      ],
    },
    {
      chartTitle: 'two',
      chartData: [
        {
          legend: 'two',
          data: 30,
          horizontalBarChartdata: { x: 30, total: 200 },
          color: getColorFromToken(DataVizPalette.color26),
        },
      ],
    },
    {
      chartTitle: 'three',
      chartData: [
        {
          legend: 'three',
          data: 5,
          horizontalBarChartdata: { x: 15, total: 50 },
          color: getColorFromToken(DataVizPalette.color27),
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ maxWidth: 600 }}>
        <HorizontalBarChart data={data} hideRatio={hideRatio} chartDataMode="fraction" />
      </div>
    </>
  );
};

HorizontalBarBenchmark.parameters = {
  docs: {
    description: {},
  },
};
