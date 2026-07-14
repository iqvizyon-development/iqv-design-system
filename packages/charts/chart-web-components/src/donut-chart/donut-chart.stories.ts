import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../helpers.stories.js';
import { renderComponent } from '../helpers.stories.js';
import { DonutChart as IqvizyonDonutChart } from './donut-chart.js';
import type { ChartDataPoint, ChartProps } from './donut-chart.options.js';

const points: ChartDataPoint[] = [
  {
    legend: 'first',
    data: 20000,
  },
  {
    legend: 'second',
    data: 39000,
  },
];

const data: ChartProps = {
  chartTitle: 'Donut chart basic example',
  chartData: points,
};

const storyTemplate = html<StoryArgs<IqvizyonDonutChart>>`
  <iqv-donut-chart data="${JSON.stringify(data)}" value-inside-donut="39,000" inner-radius="55">
  </iqv-donut-chart>
`;

export default {
  title: 'Components/DonutChart',
} as Meta<IqvizyonDonutChart>;

export const RTL: Story<IqvizyonDonutChart> = renderComponent(html<StoryArgs<IqvizyonDonutChart>>`
  <div dir="rtl">
    <iqv-donut-chart data="${JSON.stringify(data)}" value-inside-donut="39,000" inner-radius="55">
    </iqv-donut-chart>
  </div>
`);

export const Basic: Story<IqvizyonDonutChart> = renderComponent(storyTemplate).bind({});
