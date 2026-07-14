/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { ToolbarGroupState, ToolbarGroupSlots } from './ToolbarGroup.types';

/**
 * Render the final JSX of ToolbarGroup
 */
export const renderToolbarGroup_unstable = (state: ToolbarGroupState): JSXElement => {
  assertSlots<ToolbarGroupSlots>(state);

  return <state.root>{state.root.children}</state.root>;
};
