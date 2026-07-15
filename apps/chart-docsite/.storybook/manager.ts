import { addons } from 'storybook/manager-api';
import { webLightTheme } from '@iqvizyonui/react-theme';

import iqvizyonStorybookTheme from './theme';

const sidebarBg = webLightTheme.colorPaletteBlueBackground2;

document.documentElement.style.setProperty('--colorPaletteBlueBackground2', sidebarBg);

const sidebarStyle = document.createElement('style');
sidebarStyle.textContent = `
  .sidebar-container,
  .sidebar-container > div,
  .sidebar-header,
  #storybook-explorer-menu {
    background: ${sidebarBg} !important;
  }
`;
document.head.appendChild(sidebarStyle);

addons.setConfig({
  enableShortcuts: false,
  theme: iqvizyonStorybookTheme,
  showPanel: false,
  showToolbar: false,
});
