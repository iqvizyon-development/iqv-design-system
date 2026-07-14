'use client';

import { mergeClasses } from '@griffel/react';
import { useCheckmarkStyles_unstable } from '../../selectable/index';
import { useMenuItemStyles_unstable } from '../MenuItem/useMenuItemStyles.styles';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { MenuItemSlots } from '../index';
import type { MenuItemRadioState } from './MenuItemRadio.types';

export const menuItemRadioClassNames: SlotClassNames<Omit<MenuItemSlots, 'submenuIndicator'>> = {
  root: 'iui-MenuItemRadio',
  icon: 'iui-MenuItemRadio__icon',
  checkmark: 'iui-MenuItemRadio__checkmark',
  content: 'iui-MenuItemRadio__content',
  secondaryContent: 'iui-MenuItemRadio__secondaryContent',
  subText: 'iui-MenuItemRadio__subText',
};

export const useMenuItemRadioStyles_unstable = (state: MenuItemRadioState): void => {
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(menuItemRadioClassNames.root, state.root.className);

  if (state.content) {
    // eslint-disable-next-line react-hooks/immutability
    state.content.className = mergeClasses(menuItemRadioClassNames.content, state.content.className);
  }

  if (state.secondaryContent) {
    // eslint-disable-next-line react-hooks/immutability
    state.secondaryContent.className = mergeClasses(
      menuItemRadioClassNames.secondaryContent,
      state.secondaryContent.className,
    );
  }

  if (state.icon) {
    // eslint-disable-next-line react-hooks/immutability
    state.icon.className = mergeClasses(menuItemRadioClassNames.icon, state.icon.className);
  }

  if (state.checkmark) {
    // eslint-disable-next-line react-hooks/immutability
    state.checkmark.className = mergeClasses(menuItemRadioClassNames.checkmark, state.checkmark.className);
  }

  if (state.subText) {
    // eslint-disable-next-line react-hooks/immutability
    state.subText.className = mergeClasses(menuItemRadioClassNames.subText, state.subText.className);
  }

  useMenuItemStyles_unstable(state);
  useCheckmarkStyles_unstable(state);
};
