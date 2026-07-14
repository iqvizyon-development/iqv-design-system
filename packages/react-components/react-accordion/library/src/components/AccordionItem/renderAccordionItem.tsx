/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { AccordionItemState, AccordionItemSlots, AccordionItemContextValues } from './AccordionItem.types';
import { AccordionItemProvider } from '../../contexts/accordionItem';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordionItem_unstable = (
  state: AccordionItemState,
  contextValues: AccordionItemContextValues,
): JSXElement => {
  assertSlots<AccordionItemSlots>(state);

  return (
    <state.root>
      <AccordionItemProvider value={contextValues.accordionItem}>{state.root.children}</AccordionItemProvider>
    </state.root>
  );
};
