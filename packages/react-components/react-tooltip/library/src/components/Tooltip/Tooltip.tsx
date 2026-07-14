'use client';

import type * as React from 'react';
import { useTooltip_unstable } from './useTooltip';
import { renderTooltip_unstable } from './renderTooltip';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';
import { useTooltipStyles_unstable } from './useTooltipStyles.styles';
import type { TooltipProps } from './Tooltip.types';
import type { IqvizyonTriggerComponent } from '@iqvizyonui/react-utilities';

/**
 * A tooltip provides light weight contextual information on top of its target element.
 */
export const Tooltip: React.FC<TooltipProps> = props => {
  const state = useTooltip_unstable(props);

  useTooltipStyles_unstable(state);

  useCustomStyleHook_unstable('useTooltipStyles_unstable')(state);

  return renderTooltip_unstable(state);
};

Tooltip.displayName = 'Tooltip';
// type casting here is required to ensure internal type IqvizyonTriggerComponent is not leaked
(Tooltip as IqvizyonTriggerComponent).isIqvizyonTriggerComponent = true;
