import type { Preview } from '@storybook/react-webpack5';
import React from 'react';

import * as rootPreview from '../../../.storybook/preview';

const preview: Preview & { parameters: import('@iqvizyonui/react-storybook-addon').IqvizyonParameters } = {
  ...rootPreview,
  decorators: [
    (Story: any, context: any) => {
      const locale = context.globals.locale || 'en';
      if (typeof document !== 'undefined') {
        document.documentElement.lang = locale;
        document.querySelectorAll('.docs-story').forEach(el => el.setAttribute('lang', locale));
      }
      return <Story />;
    },
    ...(rootPreview.decorators || []),
  ],
  globalTypes: {
    locale: {
      name: 'Language',
      description: 'Global language/locale for components',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'tr', title: 'Türkçe' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    ...rootPreview.parameters,
    docs: {
      ...rootPreview.parameters.docs,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Packages'],
      },
    },
    reactStorybookAddon: { docs: true },
  },
};

export const tags = ['autodocs'];

export default preview;
