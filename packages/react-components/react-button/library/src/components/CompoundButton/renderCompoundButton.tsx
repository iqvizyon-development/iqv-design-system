/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { CompoundButtonSlots, CompoundButtonState } from './CompoundButton.types';

/**
 * Renders a CompoundButton component by passing the state defined props to the appropriate slots.
 */
export const renderCompoundButton_unstable = (state: CompoundButtonState): JSXElement => {
  assertSlots<CompoundButtonSlots>(state);
  const { iconOnly, iconPosition } = state;

  return (
    <state.root>
      {iconPosition !== 'after' && state.icon && <state.icon />}
      {!iconOnly && (
        <state.contentContainer>
          {state.root.children}
          {state.secondaryContent && <state.secondaryContent />}
        </state.contentContainer>
      )}

      {iconPosition === 'after' && state.icon && <state.icon />}
    </state.root>
  );
};
