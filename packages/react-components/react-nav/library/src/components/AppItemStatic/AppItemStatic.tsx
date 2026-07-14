'use client';

import * as React from 'react';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

import { useAppItemStatic_unstable } from './useAppItemStatic';
import { renderAppItemStatic_unstable } from './renderAppItemStatic';
import { useAppItemStaticStyles_unstable } from './useAppItemStaticStyles.styles';
import type { AppItemStaticProps } from './AppItemStatic.types';

/**
 * AppItemStatic component - Static application item in the navigation menu.
 */
export const AppItemStatic: ForwardRefComponent<AppItemStaticProps> = React.forwardRef((props, ref) => {
  const state = useAppItemStatic_unstable(props, ref);

  useAppItemStaticStyles_unstable(state);
  useCustomStyleHook_unstable('useAppItemStaticStyles_unstable')(state);

  return renderAppItemStatic_unstable(state);
});

AppItemStatic.displayName = 'AppItemStatic';
