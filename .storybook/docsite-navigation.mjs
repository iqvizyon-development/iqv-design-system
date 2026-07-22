import { GLOBALS_UPDATED, UPDATE_GLOBALS } from 'storybook/internal/core-events';
import { addons } from 'storybook/manager-api';

const DOCSITES = [
  { id: 'react', label: 'React', path: '/react/' },
  { id: 'charts', label: 'Charts', path: '/charts/' },
  { id: 'web-components', label: 'Web Components', path: '/web-components/' },
];

const SUPPORTED_LOCALES = new Set(['en', 'tr']);

const TURKISH_NAVIGATION_LABELS = new Map([
  ['Concepts', 'Kavramlar'],
  ['Introduction', 'Giriş'],
  ['Developer', 'Geliştirici'],
  ['Recipes', 'Tarifler'],
  ['Theme', 'Tema'],
  ['Border Radii', 'Kenar Yuvarlaklıkları'],
  ['Colors', 'Renkler'],
  ['Fonts', 'Yazı Tipleri'],
  ['Shadows', 'Gölgeler'],
  ['Spacing', 'Aralık'],
  ['Stroke Widths', 'Çizgi Kalınlıkları'],
  ['Typography', 'Tipografi'],
  ['Theme Designer', 'Tema Tasarımcısı'],
  ['Components', 'Bileşenler'],
  ['Compat Components', 'Uyumluluk Bileşenleri'],
  ['Preview Components', 'Önizleme Bileşenleri'],
  ['Motion', 'Hareket'],
  ['APIs', "API'ler"],
  ['Choreography (preview)', 'Koreografi (önizleme)'],
  ['Components (preview)', 'Bileşenler (önizleme)'],
  ['Migration', 'Geçiş'],
  ['Tokens', 'Belirteçler'],
  ['Using motion slots', 'Hareket yuvalarını kullanma'],
  ['Utilities', 'Yardımcılar'],
  ['Focus Management', 'Odak Yönetimi'],
  ['Positioning', 'Konumlandırma'],
  ['Packages', 'Paketler'],
]);

const sourceTextByNode = new WeakMap();

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

function createLanguageSelector(locale, onLocaleChange) {
  const field = document.createElement('label');
  field.className = 'iqv-docsite-language';

  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.classList.add('iqv-docsite-language__icon');
  icon.setAttribute('viewBox', '0 0 20 20');
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML =
    '<circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor"/><path d="M2.8 10h14.4M10 2.5c2 2.1 3.1 4.6 3.1 7.5S12 15.4 10 17.5M10 2.5C8 4.6 6.9 7.1 6.9 10S8 15.4 10 17.5" fill="none" stroke="currentColor"/>';
  field.appendChild(icon);

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

    onLocaleChange(select.value);
  });

  field.appendChild(select);
  return field;
}

function localizeNavigation(locale) {
  document.querySelectorAll('#storybook-explorer-menu a, #storybook-explorer-menu button').forEach(element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();

    while (textNode) {
      const visibleText = textNode.textContent?.trim();
      const sourceText = sourceTextByNode.get(textNode) ?? visibleText;
      if (sourceText && TURKISH_NAVIGATION_LABELS.has(sourceText)) {
        sourceTextByNode.set(textNode, sourceText);
        const localizedText = locale === 'tr' ? TURKISH_NAVIGATION_LABELS.get(sourceText) : sourceText;
        textNode.textContent = textNode.textContent.replace(visibleText, localizedText);
      }
      textNode = walker.nextNode();
    }
  });

  const searchInput = document.querySelector('#storybook-explorer-searchfield');
  if (searchInput instanceof HTMLInputElement) {
    searchInput.placeholder = locale === 'tr' ? 'Bileşen ara' : 'Find components';
    searchInput.setAttribute('aria-label', locale === 'tr' ? 'Bileşen ara' : 'Search for components');
  }
}

function updateDocsiteLinks(locale) {
  document.querySelectorAll('[data-iqv-docsite-path]').forEach(link => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const url = new URL(`${getDocsiteBaseUrl()}${link.dataset.iqvDocsitePath}`);
    setLocale(url, locale);
    link.href = url.href;
  });
}

export function configureDocsiteNavigation({ currentSite, theme }) {
  const sidebarBackground = theme.colorPaletteBlueBackground2;
  let activeLocale = getSelectedLocale();
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
      padding: ${theme.spacingVerticalXXS} ${theme.spacingHorizontalXS};
      border: ${theme.strokeWidthThin} solid ${theme.colorNeutralStroke2};
      border-radius: ${theme.borderRadiusCircular};
      background: ${theme.colorNeutralBackground1};
      font-weight: ${theme.fontWeightRegular};
    }

    .iqv-docsite-language:focus-within {
      border-color: ${theme.colorBrandStroke1};
    }

    .iqv-docsite-language__icon {
      width: ${theme.fontSizeBase500};
      height: ${theme.fontSizeBase500};
      color: ${theme.colorNeutralForeground2};
    }

    .iqv-docsite-language__select {
      padding: 0;
      border: 0;
      background: transparent;
      color: ${theme.colorNeutralForeground1};
      font: inherit;
      font-weight: ${theme.fontWeightSemibold};
      outline: none;
    }
  `;
  document.head.appendChild(style);

  const mount = () => {
    const header = document.querySelector('.sidebar-header');
    if (!header || document.querySelector('.iqv-docsite-nav')) {
      return Boolean(document.querySelector('.iqv-docsite-nav'));
    }

    const locale = activeLocale;
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
      link.dataset.iqvDocsitePath = site.path;
      link.textContent = site.label;
      nav.appendChild(link);
    });

    const handleLocaleChange = nextLocale => {
      activeLocale = nextLocale;
      selectLocale(nextLocale);
      localizeNavigation(nextLocale);
      updateDocsiteLinks(nextLocale);
      addons.getChannel().emit(UPDATE_GLOBALS, { globals: { locale: nextLocale } });
    };
    const languageSelector = createLanguageSelector(locale, handleLocaleChange);
    const selectLocale = nextLocale => {
      const select = languageSelector.querySelector('select');
      if (select) {
        select.value = nextLocale;
      }
    };

    nav.appendChild(languageSelector);
    header.insertAdjacentElement('afterend', nav);
    localizeNavigation(locale);

    const channel = addons.getChannel();
    channel.on(GLOBALS_UPDATED, payload => {
      const nextLocale = SUPPORTED_LOCALES.has(payload.globals?.locale) ? payload.globals.locale : 'en';
      activeLocale = nextLocale;
      selectLocale(nextLocale);
      localizeNavigation(nextLocale);
      updateDocsiteLinks(nextLocale);
    });

    const navigationObserver = new MutationObserver(() => localizeNavigation(activeLocale));
    const explorer = document.querySelector('#storybook-explorer-menu');
    if (explorer) {
      navigationObserver.observe(explorer, { childList: true, subtree: true });
    }
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
