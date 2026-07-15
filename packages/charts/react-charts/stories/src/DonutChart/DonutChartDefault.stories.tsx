import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import type { ChartProps } from '@iqvizyonui/react-charts';
import { DonutChart, getColorFromToken, DataVizPalette } from '@iqvizyonui/react-charts';

export const DonutChartBasic = (): JSXElement => {
  const points = [
    { legend: 'first', data: 20000, color: getColorFromToken(DataVizPalette.color1), xAxisCalloutData: '2020/04/30' },
    {
      legend: 'second',
      data: 35000,
      color: getColorFromToken(DataVizPalette.color2),
      xAxisCalloutData: '2020/04/20',
    },
  ];

  const data: ChartProps = {
    chartTitle: 'Donut chart basic example',
    chartData: points,
  };
  return (
    <DonutChart
      culture={typeof window !== 'undefined' ? window.navigator.language : 'en-us'}
      data={data}
      innerRadius={55}
      href={'https://iqvizyon.com/'}
      legendsOverflowText={'overflow Items'}
      hideLegend={false}
      height={220}
      valueInsideDonut={35000}
    />
  );
};

DonutChartBasic.parameters = {
  docs: {
    description: {},
  },
};
