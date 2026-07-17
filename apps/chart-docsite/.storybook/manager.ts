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

  .iqv-docsite-nav {
    display: flex;
    flex-wrap: wrap;
    gap: ${webLightTheme.spacingVerticalXXS} ${webLightTheme.spacingHorizontalM};
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: ${webLightTheme.spacingVerticalXS} ${webLightTheme.spacingHorizontalM} ${webLightTheme.spacingVerticalS};
    border-bottom: ${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2};
    background: ${sidebarBg};
  }

  .iqv-docsite-nav__item {
    font-family: ${webLightTheme.fontFamilyBase};
    font-size: ${webLightTheme.fontSizeBase200};
    line-height: ${webLightTheme.lineHeightBase200};
    font-weight: ${webLightTheme.fontWeightRegular};
    color: ${webLightTheme.colorNeutralForeground2};
    text-decoration: none;
  }

  .iqv-docsite-nav__item:hover {
    color: ${webLightTheme.colorBrandForeground1};
    text-decoration: underline;
  }

  .iqv-docsite-nav__item--current {
    font-weight: ${webLightTheme.fontWeightSemibold};
    color: ${webLightTheme.colorNeutralForeground1};
  }
`;
document.head.appendChild(sidebarStyle);

const DOCSITES = [
  { id: 'react', label: 'React', path: '/react/' },
  { id: 'charts', label: 'Charts', path: '/charts/' },
  { id: 'web-components', label: 'Web Components', path: '/web-components/' },
] as const;

function getDocsiteBaseUrl() {
  const { pathname, origin } = window.location;
  const match = pathname.match(/^(.*?)\/(react|charts|web-components)(?:\/|$)/);
  if (match) {
    return `${origin}${match[1]}`;
  }
  return 'https://ibz-04.github.io/iqvui';
}

function injectDocsiteNav(currentSite: (typeof DOCSITES)[number]['id']) {
  const mount = () => {
    const header = document.querySelector('.sidebar-header');
    if (!header || document.querySelector('.iqv-docsite-nav')) {
      return Boolean(document.querySelector('.iqv-docsite-nav'));
    }

    const base = getDocsiteBaseUrl();
    const nav = document.createElement('nav');
    nav.className = 'iqv-docsite-nav';
    nav.setAttribute('aria-label', 'Iqvizyon UI documentation sites');

    DOCSITES.forEach(site => {
      if (site.id === currentSite) {
        const current = document.createElement('span');
        current.className = 'iqv-docsite-nav__item iqv-docsite-nav__item--current';
        current.textContent = site.label;
        current.setAttribute('aria-current', 'page');
        nav.appendChild(current);
        return;
      }

      const link = document.createElement('a');
      link.className = 'iqv-docsite-nav__item';
      link.href = `${base}${site.path}`;
      link.textContent = site.label;
      nav.appendChild(link);
    });

    header.insertAdjacentElement('afterend', nav);
    return true;
  };

  if (mount()) {
    return;
  }

  const observer = new MutationObserver(() => {
    if (mount()) {
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

injectDocsiteNav('charts');

addons.setConfig({
  enableShortcuts: false,
  theme: iqvizyonStorybookTheme,
  showPanel: false,
  showToolbar: false,
});
