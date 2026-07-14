import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { mergeClasses } from '@griffel/react';
import type { AccordionItemSlots, AccordionItemState } from './AccordionItem.types';

export const accordionItemClassNames: SlotClassNames<AccordionItemSlots> = {
  root: 'iui-AccordionItem',
};

export const useAccordionItemStyles_unstable = (state: AccordionItemState): AccordionItemState => {
  state.root.className = mergeClasses(accordionItemClassNames.root, state.root.className);

  return state;
};
