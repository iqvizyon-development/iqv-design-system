import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { mergeClasses } from '@griffel/react';
import type { MenuGroupSlots, MenuGroupState } from './MenuGroup.types';

export const menuGroupClassNames: SlotClassNames<MenuGroupSlots> = {
  root: 'iui-MenuGroup',
};

export const useMenuGroupStyles_unstable = (state: MenuGroupState): MenuGroupState => {
  state.root.className = mergeClasses(menuGroupClassNames.root, state.root.className);

  return state;
};
