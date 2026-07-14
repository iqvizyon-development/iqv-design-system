import { useGlobals as useStorybookGlobals } from 'storybook/manager-api';
import type { Args as StorybookArgs, StoryContext as StorybookContext, Parameters } from '@storybook/react-webpack5';

import type { DIR_ID, STRICT_MODE_ID, THEME_ID, THEMES } from './constants';
import type { Theme, ThemeIds } from './theme';

export interface IqvizyonStoryContext extends StorybookContext {
  globals: IqvizyonGlobals;
  parameters: IqvizyonParameters;
}

/**
 * Extends the storybook globals object to include fluent specific properties
 */
export interface IqvizyonGlobals extends StorybookArgs {
  [DIR_ID]?: 'ltr' | 'rtl';
  [THEME_ID]?: ThemeIds;
  [THEMES]?: Theme[];
  [STRICT_MODE_ID]?: boolean;
}

/**
 * Extends the storybook parameters object to include fluent specific properties
 */
export interface IqvizyonParameters extends Parameters {
  dir?: 'ltr' | 'rtl';
  iqvizyonTheme?: ThemeIds;
  iqvizyonThemes?: Theme[];
  mode?: 'default' | 'vr-test';
  reactStorybookAddon?: {
    disabledDecorators?: ['AriaLive' | 'IqvizyonProvider' | 'ReactStrictMode'];
    docs?: IqvizyonDocsConfig;
  };
}

/**
 * Configuration for docs components
 */
type IqvizyonDocsConfig =
  | boolean
  | {
      tableOfContents?: boolean;
      dirSwitcher?: boolean;
      themePicker?: boolean;
      copyAsMarkdown?: boolean;
      argTable?:
        | boolean
        | {
            slotsApi?: boolean;
            nativePropsApi?: boolean;
          };
    };

export function useGlobals(): [IqvizyonGlobals, (newGlobals: IqvizyonGlobals) => void, IqvizyonGlobals, IqvizyonGlobals] {
  return useStorybookGlobals();
}

export function parameters(options?: IqvizyonParameters): IqvizyonParameters {
  return { dir: 'ltr', iqvizyonTheme: 'web-light', mode: 'default', ...options };
}
export function getParametersConfig(context: IqvizyonStoryContext): IqvizyonParameters['reactStorybookAddon'] {
  return context?.parameters?.reactStorybookAddon;
}
