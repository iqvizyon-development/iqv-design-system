/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { AccordionPanelState, AccordionPanelSlots } from './AccordionPanel.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordionPanel_unstable = (state: AccordionPanelState): JSXElement => {
  assertSlots<AccordionPanelSlots>(state);
  return state.collapseMotion ? (
    <state.collapseMotion>
      <state.root />
    </state.collapseMotion>
  ) : (
    <state.root />
  );
};
