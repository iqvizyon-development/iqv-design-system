import type { Meta } from '@storybook/react-webpack5';

import { IqvizyonProvider } from '@iqvizyonui/react-components';
import descriptionMd from './IqvizyonProviderDescription.md';
import bestPracticesMd from './IqvizyonProviderBestPractices.md';

export { Default } from './IqvizyonProviderDefault.stories';
export { Dir } from './IqvizyonProviderDir.stories';
export { ApplyStylesToPortals } from './IqvizyonProviderApplyStylesToPortals.stories';
export { Nested } from './IqvizyonProviderNested.stories';
export { Frame } from './IqvizyonProviderFrame.stories';

export default {
  title: 'Components/IqvizyonProvider',
  component: IqvizyonProvider,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
} as Meta;
