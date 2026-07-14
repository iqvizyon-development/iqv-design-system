/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { EmptySwatchState, EmptySwatchSlots } from './EmptySwatch.types';

/**
 * Render the final JSX of EmptySwatch
 */
export const renderEmptySwatch_unstable = (state: EmptySwatchState): JSXElement => {
  assertSlots<EmptySwatchSlots>(state);

  return <state.root />;
};
