const DOCSITES = [
  { id: 'react', label: 'React', path: '/react/' },
  { id: 'charts', label: 'Charts', path: '/charts/' },
  { id: 'web-components', label: 'Web Components', path: '/web-components/' },
];

const SUPPORTED_LOCALES = new Set(['en', 'tr']);

function getGlobals(searchParams) {
  const globals = new Map();
  const value = searchParams.get('globals');

  if (!value) {
    return globals;
  }

  value.split(';').forEach(entry => {
    const separatorIndex = entry.indexOf(':');
    if (separatorIndex > 0) {
      globals.set(entry.slice(0, separatorIndex), entry.slice(separatorIndex + 1));
    }
  });

  return globals;
}

function getSelectedLocale(searchParams = new URLSearchParams(window.location.search)) {
  const locale = getGlobals(searchParams).get('locale');
  return locale && SUPPORTED_LOCALES.has(locale) ? locale : 'en';
}

function setLocale(url, locale) {
  const globals = getGlobals(url.searchParams);
  globals.set('locale', locale);
  url.searchParams.set('globals', Array.from(globals, ([name, value]) => `${name}:${value}`).join(';'));
}

function getDocsiteBaseUrl() {
  const { pathname, origin } = window.location;
  const match = pathname.match(/^(.*?)\/(react|charts|web-components)(?:\/|$)/);
  return match ? `${origin}${match[1]}` : 'https://iqvizyon-development.github.io/iqv-design-system';
}

function createLanguageSelector(locale) {
  const field = document.createElement('label');
  field.className = 'iqv-docsite-language';

  const label = document.createElement('span');
  label.textContent = locale === 'tr' ? 'Dil' : 'Language';
  field.appendChild(label);

  const select = document.createElement('select');
  select.className = 'iqv-docsite-language__select';
  select.setAttribute('aria-label', 'Documentation language');

  [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Türkçe' },
  ].forEach(item => {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.label;
    option.selected = item.value === locale;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    if (!SUPPORTED_LOCALES.has(select.value)) {
      return;
    }

    const url = new URL(window.location.href);
    setLocale(url, select.value);
    window.location.assign(url);
  });

  field.appendChild(select);
  return field;
}

export function configureDocsiteNavigation({ currentSite, theme }) {
  const sidebarBackground = theme.colorPaletteBlueBackground2;
  document.documentElement.style.setProperty('--colorPaletteBlueBackground2', sidebarBackground);

  const style = document.createElement('style');
  style.textContent = `
    .sidebar-container,
    .sidebar-container > div,
    .sidebar-header,
    #storybook-explorer-menu {
      background: ${sidebarBackground} !important;
    }

    .iqv-docsite-nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: ${theme.spacingVerticalXXS} ${theme.spacingHorizontalM};
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: ${theme.spacingVerticalXS} ${theme.spacingHorizontalM} ${theme.spacingVerticalS};
      border-bottom: ${theme.strokeWidthThin} solid ${theme.colorNeutralStroke2};
      background: ${sidebarBackground};
    }

    .iqv-docsite-nav__item,
    .iqv-docsite-language {
      font-family: ${theme.fontFamilyBase};
      font-size: ${theme.fontSizeBase200};
      line-height: ${theme.lineHeightBase200};
      color: ${theme.colorNeutralForeground2};
    }

    .iqv-docsite-nav__item {
      font-weight: ${theme.fontWeightRegular};
      text-decoration: none;
    }

    .iqv-docsite-nav__item:hover {
      color: ${theme.colorBrandForeground1};
      text-decoration: underline;
    }

    .iqv-docsite-nav__item--current {
      font-weight: ${theme.fontWeightSemibold};
      color: ${theme.colorNeutralForeground1};
    }

    .iqv-docsite-language {
      display: inline-flex;
      align-items: center;
      gap: ${theme.spacingHorizontalXS};
      margin-left: auto;
      font-weight: ${theme.fontWeightRegular};
    }

    .iqv-docsite-language__select {
      padding: ${theme.spacingVerticalXXS} ${theme.spacingHorizontalXS};
      border: ${theme.strokeWidthThin} solid ${theme.colorNeutralStroke1};
      border-radius: ${theme.borderRadiusMedium};
      background: ${theme.colorNeutralBackground1};
      color: ${theme.colorNeutralForeground1};
      font: inherit;
    }
  `;
  document.head.appendChild(style);

  const mount = () => {
    const header = document.querySelector('.sidebar-header');
    if (!header || document.querySelector('.iqv-docsite-nav')) {
      return Boolean(document.querySelector('.iqv-docsite-nav'));
    }

    const locale = getSelectedLocale();
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

      const url = new URL(`${base}${site.path}`);
      setLocale(url, locale);

      const link = document.createElement('a');
      link.className = 'iqv-docsite-nav__item';
      link.href = url.href;
      link.textContent = site.label;
      nav.appendChild(link);
    });

    nav.appendChild(createLanguageSelector(locale));
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
