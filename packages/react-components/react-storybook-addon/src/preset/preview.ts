import type { Preview } from '@storybook/react-webpack5';

import { withIqvizyonProvider } from '../decorators/withIqvizyonProvider';
import { withReactStrictMode } from '../decorators/withReactStrictMode';
import { withAriaLive } from '../decorators/withAriaLive';
import { IqvizyonDocsContainer, IqvizyonDocsPage } from '../docs';

import { DIR_ID, STRICT_MODE_ID, THEME_ID } from '../constants';

export const decorators = [withIqvizyonProvider, withAriaLive, withReactStrictMode] as Preview['decorators'];

export const initialGlobals = { [THEME_ID]: undefined, [DIR_ID]: undefined, [STRICT_MODE_ID]: undefined }; // allow theme to be set by URL query param

const preview: Preview = {
  decorators,
  initialGlobals,
  parameters: {
    docs: {
      container: IqvizyonDocsContainer,
      page: IqvizyonDocsPage,
    },
  },
};

export default preview;
