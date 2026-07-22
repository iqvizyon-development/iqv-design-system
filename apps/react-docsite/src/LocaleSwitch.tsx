import * as React from 'react';
import { useGlobals } from 'storybook/preview-api';

function useDocLocale(): string {
  const [globals] = useGlobals();
  return (globals.locale as string) || 'en';
}

export function En(props: { children: React.ReactNode }): React.JSX.Element | null {
  return useDocLocale() === 'en' ? <>{props.children}</> : null;
}

export function Tr(props: { children: React.ReactNode }): React.JSX.Element | null {
  return useDocLocale() === 'tr' ? <>{props.children}</> : null;
}
