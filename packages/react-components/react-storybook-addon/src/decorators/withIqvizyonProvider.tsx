import * as React from 'react';

import { IqvizyonProvider } from '@iqvizyonui/react-provider';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { Theme } from '@iqvizyonui/react-theme';
import {
  teamsDarkTheme,
  teamsDarkV21Theme,
  teamsHighContrastTheme,
  teamsLightTheme,
  teamsLightV21Theme,
  webDarkTheme,
  webLightTheme,
} from '@iqvizyonui/react-theme';
import type { ThemeIds } from '../theme';
import { defaultTheme } from '../theme';
import { DIR_ID, THEME_ID } from '../constants';
import type { IqvizyonStoryContext } from '../hooks';
import { isDecoratorDisabled } from '../utils/isDecoratorDisabled';

const themes: Record<ThemeIds, Theme> = {
  'web-light': webLightTheme,
  'web-dark': webDarkTheme,
  'teams-light': teamsLightTheme,
  'teams-dark': teamsDarkTheme,
  'teams-high-contrast': teamsHighContrastTheme,
  'teams-light-v21': teamsLightV21Theme,
  'teams-dark-v21': teamsDarkV21Theme,
} as const;

const findTheme = (themeId?: ThemeIds) => {
  return themeId ? themes[themeId] : null;
};

export const withIqvizyonProvider = (StoryFn: () => JSXElement, context: IqvizyonStoryContext): JSXElement => {
  const { globals, parameters } = context;
  const { mode } = parameters;

  if (isDecoratorDisabled(context, 'IqvizyonProvider')) {
    return StoryFn();
  }

  const isVrTest = mode === 'vr-test';
  const dir = parameters.dir ?? globals[DIR_ID] ?? 'ltr';
  const globalTheme = findTheme(globals[THEME_ID]);
  const paramTheme = findTheme(parameters.iqvizyonTheme);
  const theme = paramTheme ?? globalTheme ?? themes[defaultTheme.id];

  return (
    <IqvizyonProvider theme={theme} dir={dir}>
      {isVrTest ? StoryFn() : <IqvizyonExampleContainer theme={theme}>{StoryFn()}</IqvizyonExampleContainer>}
    </IqvizyonProvider>
  );
};

const IqvizyonExampleContainer: React.FC<{ children: React.ReactNode; theme: Theme }> = props => {
  const { theme } = props;

  const backgroundColor = theme.colorNeutralBackground2;
  return <div style={{ padding: '48px 24px', backgroundColor }}>{props.children}</div>;
};
