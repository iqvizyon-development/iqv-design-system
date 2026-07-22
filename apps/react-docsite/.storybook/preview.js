import * as rootPreview from '../../../.storybook/preview';

export const decorators = [
  (Story, context) => {
    const locale = context.globals.locale || 'en';
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.querySelectorAll('.docs-story').forEach(el => el.setAttribute('lang', locale));
    }
    return Story();
  },
  ...rootPreview.decorators,
];

export const globalTypes = {
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
};

/** @type {import("@iqvizyonui/react-storybook-addon").IqvizyonParameters & typeof rootPreview.parameters} */
export const parameters = {
  ...rootPreview.parameters,
  docs: {
    ...rootPreview.parameters.docs,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      /**
       * @see https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
       */
      order: [
        'Concepts',
        [
          'Introduction',
          'Developer',
          [
            'Quick Start',
            'Styling Components',
            'Positioning Components',
            'Server-Side Rendering',
            ['Basic setup', 'Next.js setup', 'Limitations with Portals'],
          ],
          'Recipes',
        ],
        'Theme',
        ['Border Radii', 'Colors', 'Fonts', 'Shadows', 'Spacing', 'Stroke Widths', 'Typography', 'Theme Designer'],
        'Components',
        'Compat Components',
        'Preview Components',
        'Motion',
        'Utilities',
      ],
    },
  },
  reactStorybookAddon: {
    docs: true,
  },
};

export const tags = ['autodocs'];
