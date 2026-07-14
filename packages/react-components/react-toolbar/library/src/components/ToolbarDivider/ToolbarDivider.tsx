'use client';

import * as React from 'react';
import { useToolbarDividerStyles_unstable } from './useToolbarDividerStyles.styles';
import type { ToolbarDividerProps } from './ToolbarDivider.types';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { renderDivider_unstable } from '@iqvizyonui/react-divider';
import { useToolbarDivider_unstable } from './useToolbarDivider';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * ToolbarDivider component
 */
export const ToolbarDivider: ForwardRefComponent<ToolbarDividerProps> = React.forwardRef((props, ref) => {
  const state = useToolbarDivider_unstable(props, ref);

  useToolbarDividerStyles_unstable(state);

  useCustomStyleHook_unstable('useToolbarDividerStyles_unstable')(state);

  return renderDivider_unstable(state);
});

ToolbarDivider.displayName = 'ToolbarDivider';
