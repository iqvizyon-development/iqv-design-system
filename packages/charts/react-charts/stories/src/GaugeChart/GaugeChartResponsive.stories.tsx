import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { DataVizPalette, GaugeChart, ResponsiveContainer } from '@iqvizyonui/react-charts';

export const GaugeChartResponsive = (): JSXElement => {
  return (
    <ResponsiveContainer height={128}>
      <GaugeChart
        segments={[
          {
            size: 33,
            color: DataVizPalette.success,
            legend: 'Low Risk',
          },
          {
            size: 34,
            color: DataVizPalette.warning,
            legend: 'Medium Risk',
          },
          {
            size: 33,
            color: DataVizPalette.error,
            legend: 'High Risk',
          },
        ]}
        chartValue={75}
        variant="multiple-segments"
      />
    </ResponsiveContainer>
  );
};
GaugeChartResponsive.parameters = {
  docs: {
    description: {},
  },
};
