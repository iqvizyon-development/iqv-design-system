import '../packages/react-components/react-storybook-addon/src/styles.css';
import '../packages/react-components/react-storybook-addon-export-to-sandbox/src/styles.css';
import { withLinks } from '@storybook/addon-links';

/** @type {import('@storybook/react').Decorator[]} */
export const decorators = [withLinks];

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  viewMode: 'docs',
  controls: {
    disable: true,
    expanded: true,
  },
  docs: {
    source: {
      excludeDecorators: true,
      type: 'code',
    },
  },
};
