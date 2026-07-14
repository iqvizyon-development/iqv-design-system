'use client';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TeachingPopoverFooterSlots, TeachingPopoverFooterState } from './TeachingPopoverFooter.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens } from '@iqvizyonui/react-theme';

export const teachingPopoverFooterClassNames: SlotClassNames<TeachingPopoverFooterSlots> = {
  root: 'iui-TeachingPopoverFooter',
  primary: 'iui-TeachingPopoverFooter__primary',
  secondary: 'iui-TeachingPopoverFooter__secondary',
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: '8px',
    paddingTop: '12px',
  },
  rootVertical: {
    flexDirection: 'column',
  },
  rootHorizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonRootVertical: {
    width: 'auto',
    borderRadius: '4px',
  },
  buttonRootHorizontal: {
    minWidth: '96px',
    borderRadius: '4px',
  },
  brandSecondary: {
    ...shorthands.borderColor(tokens.colorNeutralForegroundOnBrand),
  },
  brandPrimary: {
    color: tokens.colorBrandForeground1,
    backgroundColor: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      color: tokens.colorCompoundBrandForeground1Hover,
      backgroundColor: tokens.colorNeutralForegroundOnBrand,
    },
    ':hover:active': {
      color: tokens.colorCompoundBrandForeground1Pressed,
      backgroundColor: tokens.colorNeutralForegroundOnBrand,
    },
  },
});

/** Applies style classnames to slots */
export const useTeachingPopoverFooterStyles_unstable = (
  state: TeachingPopoverFooterState,
): TeachingPopoverFooterState => {
  const styles = useStyles();
  const { appearance, footerLayout } = state;

  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(
    teachingPopoverFooterClassNames.root,
    styles.root,
    footerLayout === 'horizontal' ? styles.rootHorizontal : styles.rootVertical,
    state.root.className,
  );
  if (state.secondary) {
    // eslint-disable-next-line react-hooks/immutability
    state.secondary.className = mergeClasses(
      teachingPopoverFooterClassNames.secondary,
      footerLayout === 'horizontal' ? styles.buttonRootHorizontal : styles.buttonRootVertical,
      appearance === 'brand' ? styles.brandSecondary : undefined,
      state.secondary.className,
    );
  }
  // eslint-disable-next-line react-hooks/immutability
  state.primary.className = mergeClasses(
    teachingPopoverFooterClassNames.primary,
    footerLayout === 'horizontal' ? styles.buttonRootHorizontal : styles.buttonRootVertical,
    appearance === 'brand' ? styles.brandPrimary : undefined,
    state.primary.className,
  );

  return state;
};
