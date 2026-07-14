/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CardHeaderSlots, CardHeaderBaseState } from './CardHeader.types';

/**
 * Render the final JSX of CardHeader.
 */
export const renderCardHeader_unstable = (state: CardHeaderBaseState): JSXElement => {
  assertSlots<CardHeaderSlots>(state);

  return (
    <state.root>
      {state.image && <state.image />}
      {state.header && <state.header />}
      {state.description && <state.description />}
      {state.action && <state.action />}
    </state.root>
  );
};
