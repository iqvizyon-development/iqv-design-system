import type { Parameters } from '@storybook/react-webpack5' with { 'resolution-mode': 'import' };
import type { StoryContextForEnhancers } from 'storybook/internal/csf' with { 'resolution-mode': 'import' };

export const decorators = [];

export const parameters: Parameters = {
  docs: {
    source: {
      /**
       * Override source code shown within "Show Code" Docs tab.
       * @see https://github.com/storybookjs/storybook/blob/release-6-5/addons/docs/docs/recipes.md#customizing-source-snippets
       */
      transform: (source: string, storyContext: StoryContextForEnhancers) => {
        // This config renders story source generated via `fullSource` parameter that is being added by @iqvizyonui/babel-preset-storybook-full-source plugin, which is registered as part of this preset
        return storyContext.parameters.fullSource;
      },
    },
  },
};
