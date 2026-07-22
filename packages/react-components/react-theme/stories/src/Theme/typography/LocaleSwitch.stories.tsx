'use client';

import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
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

const LocaleContent = (props: { children: React.ReactNode; locale: 'en' | 'tr' }): JSXElement | null =>
  useDocLocale() === props.locale ? <>{props.children}</> : null;

export function en(props: { children: React.ReactNode }): JSXElement | null {
  return <LocaleContent locale="en">{props.children}</LocaleContent>;
}

export function tr(props: { children: React.ReactNode }): JSXElement | null {
  return <LocaleContent locale="tr">{props.children}</LocaleContent>;
}
