import * as React from 'react';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';

type GlobalsUpdatedPayload = {
  globals?: {
    locale?: unknown;
  };
};

function normalizeLocale(locale: unknown): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en';
}

function getCurrentLocale(): 'en' | 'tr' {
  const [payload] = addons.getChannel().last(GLOBALS_UPDATED) ?? [];
  return normalizeLocale((payload as GlobalsUpdatedPayload | undefined)?.globals?.locale);
}

function useDocLocale(): 'en' | 'tr' {
  const [locale, setLocale] = React.useState(getCurrentLocale);

  React.useEffect(() => {
    const channel = addons.getChannel();
    const handleGlobalsUpdated = (payload: GlobalsUpdatedPayload) => {
      setLocale(normalizeLocale(payload.globals?.locale));
    };

    channel.on(GLOBALS_UPDATED, handleGlobalsUpdated);
    return () => channel.off(GLOBALS_UPDATED, handleGlobalsUpdated);
  }, []);

  return locale;
}

export function En(props: { children: React.ReactNode }): React.JSX.Element | null {
  return useDocLocale() === 'en' ? <>{props.children}</> : null;
}

export function Tr(props: { children: React.ReactNode }): React.JSX.Element | null {
  return useDocLocale() === 'tr' ? <>{props.children}</> : null;
}
