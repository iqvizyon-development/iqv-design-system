import { Sparkline } from '@iqvizyonui/react-charts';

import bestPracticesMd from './SparklineBestPractices.md';
import descriptionMd from './SparklineDescription.md';

export { SparklineBasic } from './SparklineDefault.stories';
export { SparklineDimensions } from './SparklineDimensions.stories';

export default {
  title: 'Charts/Sparkline',
  component: Sparkline,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
