/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CardPreviewSlots, CardPreviewBaseState } from './CardPreview.types';

/**
 * Render the final JSX of CardPreview.
 */
export const renderCardPreview_unstable = (state: CardPreviewBaseState): JSXElement => {
  assertSlots<CardPreviewSlots>(state);

  return (
    <state.root>
      {state.root.children}
      {state.logo && <state.logo />}
    </state.root>
  );
};
