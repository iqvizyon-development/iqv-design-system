'use client';

import { makeStyles, mergeClasses } from '@griffel/core';
import { useRenderer_unstable } from '@griffel/react';
import { tokens, typographyStyles } from '@iqvizyonui/react-theme';
import type { IqvizyonProviderSlots, IqvizyonProviderState } from './IqvizyonProvider.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';

export const iqvizyonProviderClassNames: SlotClassNames<IqvizyonProviderSlots> = {
  root: 'iui-IqvizyonProvider',
};

const useStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: 'left',
    ...typographyStyles.body1,
  },
});

/** Applies style classnames to slots */
export const useIqvizyonProviderStyles_unstable = (state: IqvizyonProviderState): IqvizyonProviderState => {
  const renderer = useRenderer_unstable();
  const styles = useStyles({ dir: state.dir, renderer });

  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(
    iqvizyonProviderClassNames.root,
    state.themeClassName,
    styles.root,
    state.root.className,
  );

  return state;
};
