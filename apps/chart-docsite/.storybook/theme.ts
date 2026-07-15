import { create } from 'storybook/theming';
import { webLightTheme } from '@iqvizyonui/react-theme';

import logo from '../public/IQV-SIYAH.png';

const theme = create({
  base: 'light',

  colorPrimary: 'rgba(255, 255, 255, .4)',
  colorSecondary: webLightTheme.colorBrandForeground1,

  appBg: webLightTheme.colorPaletteBlueBackground2,
  appContentBg: webLightTheme.colorNeutralBackground1,
  appBorderColor: webLightTheme.colorNeutralStroke1,
  appBorderRadius: 4,

  fontBase: webLightTheme.fontFamilyBase,
  fontCode: 'monospace',

  textColor: webLightTheme.colorNeutralForeground1,
  textInverseColor: webLightTheme.colorBrandForeground1,

  barSelectedColor: webLightTheme.colorBrandForeground1,

  inputBorderRadius: 4,

  brandTitle: 'Iqvizyon UI Charts Packages',
  brandUrl: 'https://github.com/iBz-04/iqvui/tree/master/packages/charts',
  brandImage: logo,
});

export default theme;
