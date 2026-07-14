'use client';

import * as React from 'react';

import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';

import { renderIqvizyonProvider_unstable } from './renderIqvizyonProvider';
import { useIqvizyonProvider_unstable } from './useIqvizyonProvider';
import { useIqvizyonProviderStyles_unstable } from './useIqvizyonProviderStyles.styles';
import { useIqvizyonProviderContextValues_unstable } from './useIqvizyonProviderContextValues';
import type { IqvizyonProviderProps } from './IqvizyonProvider.types';

export const IqvizyonProvider: ForwardRefComponent<IqvizyonProviderProps> = React.forwardRef((props, ref) => {
  const state = useIqvizyonProvider_unstable(props, ref);
  useIqvizyonProviderStyles_unstable(state);

  const contextValues = useIqvizyonProviderContextValues_unstable(state);

  return renderIqvizyonProvider_unstable(state, contextValues);
});

IqvizyonProvider.displayName = 'IqvizyonProvider';
