'use client';

import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { MenuGridItemSlots, MenuGridItemState } from './MenuGridItem.types';

export const menuGridItemClassNames: SlotClassNames<MenuGridItemSlots> = {
  root: 'iui-MenuGridItem',
  icon: 'iui-MenuGridItem__icon',
  content: 'iui-MenuGridItem__content',
  subText: 'iui-MenuGridItem__subText',
  firstSubAction: 'iui-MenuGridItem__firstSubAction',
  secondSubAction: 'iui-MenuGridItem__secondSubAction',
};

const useStyles = makeStyles({
  content: {
    flexGrow: 1,
    height: '100%', // ensures content stay centered vertically when menu item's height is overridden
    minWidth: 0,
  },
  icon: {
    height: '100%',
  },
  firstSubAction: {
    height: '100%',
  },
  secondSubAction: {
    height: '100%',
  },
});

export const useMenuGridItemStyles_unstable = (state: MenuGridItemState): MenuGridItemState => {
  const styles = useStyles();

  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(menuGridItemClassNames.root, state.root.className);

  if (state.icon) {
    // eslint-disable-next-line react-hooks/immutability
    state.icon.className = mergeClasses(menuGridItemClassNames.icon, styles.icon, state.icon.className);
  }

  if (state.content) {
    // eslint-disable-next-line react-hooks/immutability
    state.content.className = mergeClasses(menuGridItemClassNames.content, styles.content, state.content.className);
  }

  if (state.subText) {
    // eslint-disable-next-line react-hooks/immutability
    state.subText.className = mergeClasses(menuGridItemClassNames.subText, state.subText.className);
  }

  if (state.firstSubAction) {
    // eslint-disable-next-line react-hooks/immutability
    state.firstSubAction.className = mergeClasses(
      menuGridItemClassNames.firstSubAction,
      styles.firstSubAction,
      state.firstSubAction.className,
    );
  }
  if (state.secondSubAction) {
    // eslint-disable-next-line react-hooks/immutability
    state.secondSubAction.className = mergeClasses(
      menuGridItemClassNames.secondSubAction,
      styles.secondSubAction,
      state.secondSubAction.className,
    );
  }

  return state;
};
