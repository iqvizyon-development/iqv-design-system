/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CardFooterSlots, CardFooterBaseState } from './CardFooter.types';

/**
 * Render the final JSX of CardFooter.
 */
export const renderCardFooter_unstable = (state: CardFooterBaseState): JSXElement => {
  assertSlots<CardFooterSlots>(state);

  return (
    <state.root>
      {state.root.children}
      {state.action && <state.action />}
    </state.root>
  );
};
