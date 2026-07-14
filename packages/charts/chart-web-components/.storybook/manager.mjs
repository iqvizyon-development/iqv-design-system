import { addons } from 'storybook/manager-api';
import { webLightTheme } from '@iqvizyonui/tokens';
import webcomponentsTheme from './theme.mjs';

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
  previewTabs: {
    canvas: { hidden: true },
  },
  enableShortcuts: false,
  sidebar: {
    showRoots: true,
  },
  showPanel: false,
  theme: webcomponentsTheme, // override the default Storybook theme with a custom fluent theme
});
