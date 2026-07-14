'use client';

import { mergeClasses } from '@griffel/react';
import { useCheckmarkStyles_unstable } from '../../selectable/index';
import { useMenuItemStyles_unstable } from '../MenuItem/useMenuItemStyles.styles';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { MenuItemSlots } from '../index';
import type { MenuItemCheckboxState } from './MenuItemCheckbox.types';

export const menuItemCheckboxClassNames: SlotClassNames<Omit<MenuItemSlots, 'submenuIndicator'>> = {
  root: 'iui-MenuItemCheckbox',
  icon: 'iui-MenuItemCheckbox__icon',
  checkmark: 'iui-MenuItemCheckbox__checkmark',
  content: 'iui-MenuItemCheckbox__content',
  secondaryContent: 'iui-MenuItemCheckbox__secondaryContent',
  subText: 'iui-MenuItemCheckbox__subText',
};

export const useMenuItemCheckboxStyles_unstable = (state: MenuItemCheckboxState): MenuItemCheckboxState => {
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(menuItemCheckboxClassNames.root, state.root.className);

  if (state.content) {
    // eslint-disable-next-line react-hooks/immutability
    state.content.className = mergeClasses(menuItemCheckboxClassNames.content, state.content.className);
  }

  if (state.secondaryContent) {
    // eslint-disable-next-line react-hooks/immutability
    state.secondaryContent.className = mergeClasses(
      menuItemCheckboxClassNames.secondaryContent,
      state.secondaryContent.className,
    );
  }

  if (state.icon) {
    // eslint-disable-next-line react-hooks/immutability
    state.icon.className = mergeClasses(menuItemCheckboxClassNames.icon, state.icon.className);
  }

  if (state.checkmark) {
    // eslint-disable-next-line react-hooks/immutability
    state.checkmark.className = mergeClasses(menuItemCheckboxClassNames.checkmark, state.checkmark.className);
  }

  if (state.subText) {
    // eslint-disable-next-line react-hooks/immutability
    state.subText.className = mergeClasses(menuItemCheckboxClassNames.subText, state.subText.className);
  }

  useMenuItemStyles_unstable(state);
  useCheckmarkStyles_unstable(state);

  return state;
};
