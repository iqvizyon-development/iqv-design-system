/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type {
  AccordionHeaderBaseState,
  AccordionHeaderSlots,
  AccordionHeaderContextValues,
} from './AccordionHeader.types';
import { AccordionHeaderProvider } from '../../contexts/accordionHeader';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordionHeader_unstable = (
  state: AccordionHeaderBaseState,
  contextValues: AccordionHeaderContextValues,
): JSXElement => {
  assertSlots<AccordionHeaderSlots>(state);

  return (
    <AccordionHeaderProvider value={contextValues.accordionHeader}>
      <state.root>
        <state.button>
          {state.expandIconPosition === 'start' && state.expandIcon && <state.expandIcon />}
          {state.icon && <state.icon />}
          {state.root.children}
          {state.expandIconPosition === 'end' && state.expandIcon && <state.expandIcon />}
        </state.button>
      </state.root>
    </AccordionHeaderProvider>
  );
};
