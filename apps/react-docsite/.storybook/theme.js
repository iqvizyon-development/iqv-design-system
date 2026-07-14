import { create } from 'storybook/theming';
import { webLightTheme } from '@iqvizyonui/react-theme';

import logo from '../public/IQV-SIYAH.png';

/**
 * Theming and branding the storybook to fluent. Taken from https://storybook.js.org/docs/react/configure/theming
 */
const theme = create({
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: 'rgba(255, 255, 255, .4)',
  colorSecondary: '#0078d4',

  // UI
  appBg: webLightTheme.colorPaletteBlueBackground2,
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0', // use msft gray
  appBorderRadius: 4,

  // Fonts
  fontBase:
    '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;',
  fontCode: 'monospace',

  // Text colors
  textColor: '#11100f',
  textInverseColor: '#0078d4', // use msft primary blue default

  // Toolbar default and active colors
  barSelectedColor: '#0078d4', // use msft primary blue default

  // Form colors
  inputBorderRadius: 4,

  // Use the fluent branding for the upper left image
  brandTitle: 'Iqvizyon UI React Components',
  brandUrl: 'https://github.com/iBz-04/iqvui',
  brandImage: logo,
});

export default theme;
