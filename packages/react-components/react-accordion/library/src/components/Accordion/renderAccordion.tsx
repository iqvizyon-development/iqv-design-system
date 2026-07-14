/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { AccordionBaseState, AccordionSlots, AccordionContextValues } from './Accordion.types';
import { AccordionProvider } from '../../contexts/accordion';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordion_unstable = (
  state: AccordionBaseState,
  contextValues: AccordionContextValues,
): JSXElement => {
  assertSlots<AccordionSlots>(state);

  return (
    <state.root>
      <AccordionProvider value={contextValues.accordion}>{state.root.children}</AccordionProvider>
    </state.root>
  );
};
