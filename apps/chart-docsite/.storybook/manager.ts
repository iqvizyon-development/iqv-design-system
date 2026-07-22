import { addons } from 'storybook/manager-api';
import { webLightTheme } from '@iqvizyonui/react-theme';
import { configureDocsiteNavigation } from '../../../.storybook/docsite-navigation.mjs';

import iqvizyonStorybookTheme from './theme';

configureDocsiteNavigation({ currentSite: 'charts', theme: webLightTheme });

addons.setConfig({
  enableShortcuts: false,
  theme: iqvizyonStorybookTheme,
  showPanel: false,
  showToolbar: false,
});
