import { addons } from 'storybook/manager-api';
import { webLightTheme } from '@iqvizyonui/tokens';
import { configureDocsiteNavigation } from '../../../.storybook/docsite-navigation.mjs';
import webcomponentsTheme from './theme.mjs';

configureDocsiteNavigation({ currentSite: 'web-components', theme: webLightTheme });

addons.setConfig({
  previewTabs: {
    canvas: { hidden: true },
  },
  enableShortcuts: false,
  sidebar: {
    showRoots: true,
  },
  showPanel: false,
  theme: webcomponentsTheme,
});
