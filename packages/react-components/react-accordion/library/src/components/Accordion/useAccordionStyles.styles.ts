import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { mergeClasses } from '@griffel/react';
import type { AccordionSlots, AccordionState } from './Accordion.types';

export const accordionClassNames: SlotClassNames<AccordionSlots> = {
  root: 'iui-Accordion',
};

export const useAccordionStyles_unstable = (state: AccordionState): AccordionState => {
  state.root.className = mergeClasses(accordionClassNames.root, state.root.className);

  return state;
};
