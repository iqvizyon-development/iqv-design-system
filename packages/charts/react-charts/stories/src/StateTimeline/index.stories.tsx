import { StateTimeline } from '@iqvizyonui/react-charts';
import descriptionMd from './StateTimelineDescription.md';
import bestPracticesMd from './StateTimelineBestPractices.md';

export { StateTimelineDefault } from './StateTimelineDefault.stories';
export { StateTimelineMultipleRows } from './StateTimelineMultipleRows.stories';

export default {
  title: 'Charts/StateTimeline',
  component: StateTimeline,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
