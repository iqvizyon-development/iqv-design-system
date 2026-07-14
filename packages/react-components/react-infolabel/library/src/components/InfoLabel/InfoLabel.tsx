'use client';

import * as React from 'react';

import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import type { InfoLabelProps } from './InfoLabel.types';
import { renderInfoLabel_unstable } from './renderInfoLabel';
import { useInfoLabel_unstable } from './useInfoLabel';
import { useInfoLabelStyles_unstable } from './useInfoLabelStyles.styles';

/**
 * InfoLabel component
 */
export const InfoLabel: ForwardRefComponent<InfoLabelProps> = React.forwardRef((props, ref) => {
  const state = useInfoLabel_unstable(props, ref);

  useInfoLabelStyles_unstable(state);
  useCustomStyleHook_unstable('useInfoLabelStyles_unstable')(state);

  return renderInfoLabel_unstable(state);
});

InfoLabel.displayName = 'InfoLabel';
