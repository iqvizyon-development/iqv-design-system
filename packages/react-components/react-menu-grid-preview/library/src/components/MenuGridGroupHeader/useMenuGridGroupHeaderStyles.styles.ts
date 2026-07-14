'use client';

import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { MenuGridGroupHeaderSlots, MenuGridGroupHeaderState } from './MenuGridGroupHeader.types';
import { tokens } from '@iqvizyonui/react-theme';

export const menuGridGroupHeaderClassNames: SlotClassNames<MenuGridGroupHeaderSlots> = {
  root: 'iui-MenuGridGroupHeader',
};

const useStyles = makeStyles({
  root: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    paddingLeft: '8px',
    paddingRight: '8px',
    fontWeight: tokens.fontWeightSemibold,
    height: '32px',
    display: 'flex',
    alignItems: 'center',
  },
});

export const useMenuGridGroupHeaderStyles_unstable = (state: MenuGridGroupHeaderState): MenuGridGroupHeaderState => {
  const styles = useStyles();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(menuGridGroupHeaderClassNames.root, styles.root, state.root.className);

  return state;
};
