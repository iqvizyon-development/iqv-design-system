'use client';

import type * as React from 'react';
import { useMenuTrigger_unstable } from './useMenuTrigger';
import { renderMenuTrigger_unstable } from './renderMenuTrigger';
import type { MenuTriggerProps } from './MenuTrigger.types';
import type { IqvizyonTriggerComponent } from '@iqvizyonui/react-utilities';

/**
 * Wraps a trigger element as an only child
 * and adds the necessary event handling to open a popup menu
 */
export const MenuTrigger: React.FC<MenuTriggerProps> = props => {
  const state = useMenuTrigger_unstable(props);

  return renderMenuTrigger_unstable(state);
};

MenuTrigger.displayName = 'MenuTrigger';
// type casting here is required to ensure internal type IqvizyonTriggerComponent is not leaked
(MenuTrigger as IqvizyonTriggerComponent).isIqvizyonTriggerComponent = true;
