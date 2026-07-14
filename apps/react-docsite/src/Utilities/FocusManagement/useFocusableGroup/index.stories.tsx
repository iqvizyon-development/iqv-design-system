import { useFocusableGroup } from '@iqvizyonui/react-components';
import descriptionMd from './useFocusableGroupDescription.md';

export { Default } from './Default.stories';
export { Limited } from './Limited.stories';
export { LimitedTrapFocus } from './LimitedTrapFocus.stories';

export default {
  title: 'Utilities/Focus Management/useFocusableGroup',
  component: useFocusableGroup,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('\n'),
      },
    },
  },
};
