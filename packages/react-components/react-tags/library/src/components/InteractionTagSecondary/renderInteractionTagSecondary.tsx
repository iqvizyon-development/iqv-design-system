/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { InteractionTagSecondaryBaseState, InteractionTagSecondarySlots } from './InteractionTagSecondary.types';

/**
 * Render the final JSX of InteractionTagSecondary
 */
export const renderInteractionTagSecondary_unstable = (state: InteractionTagSecondaryBaseState): JSXElement => {
  assertSlots<InteractionTagSecondarySlots>(state);

  return <state.root />;
};
