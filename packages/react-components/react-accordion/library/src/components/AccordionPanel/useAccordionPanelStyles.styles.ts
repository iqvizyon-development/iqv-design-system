'use client';

import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';

import type { AccordionPanelSlots, AccordionPanelState } from './AccordionPanel.types';

export const accordionPanelClassNames: SlotClassNames<Omit<AccordionPanelSlots, 'collapseMotion'>> = {
  root: 'iui-AccordionPanel',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    margin: `0 ${tokens.spacingHorizontalM}`,
  },
});

/** Applies style classnames to slots */
export const useAccordionPanelStyles_unstable = (state: AccordionPanelState): AccordionPanelState => {
  const styles = useStyles();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(accordionPanelClassNames.root, styles.root, state.root.className);

  return state;
};
