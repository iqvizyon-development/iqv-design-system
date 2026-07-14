export const themes = [
  { id: 'web-light', label: 'Web Light' },
  { id: 'web-dark', label: 'Web Dark' },
  { id: 'teams-light', label: 'IQV Light' },
  { id: 'teams-dark', label: 'IQV Dark' },
  { id: 'teams-light-v21', label: 'IQV Light V2.1' },
  { id: 'teams-dark-v21', label: 'IQV Dark V2.1' },
  { id: 'teams-high-contrast', label: 'IQV High Contrast' },
] as const;

export const defaultTheme = themes[0];

export type Theme = (typeof themes)[number];
export type ThemeIds = Theme['id'];
export type ThemeLabels = Theme['label'];
