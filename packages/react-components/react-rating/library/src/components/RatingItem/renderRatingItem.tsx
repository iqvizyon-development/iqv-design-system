/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { RatingItemBaseState, RatingItemSlots } from './RatingItem.types';

/**
 * Render the final JSX of RatingItem
 */
export const renderRatingItem_unstable = (state: RatingItemBaseState): JSXElement => {
  assertSlots<RatingItemSlots>(state);

  return (
    <state.root>
      {state.halfValueInput && <state.halfValueInput />}
      {state.fullValueInput && <state.fullValueInput />}
      {state.unselectedIcon && <state.unselectedIcon />}
      {state.selectedIcon && <state.selectedIcon />}
    </state.root>
  );
};
