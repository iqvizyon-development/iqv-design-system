/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type {
  TreeItemPersonaLayoutState,
  TreeItemPersonaLayoutContextValues,
  TreeItemPersonaLayoutSlots,
} from './TreeItemPersonaLayout.types';
import { AvatarContextProvider } from '@iqvizyonui/react-avatar';
import { ButtonContextProvider } from '@iqvizyonui/react-button';

/**
 * Render the final JSX of TreeItemPersonaLayout
 */
export const renderTreeItemPersonaLayout_unstable = (
  state: TreeItemPersonaLayoutState,
  contextValues: TreeItemPersonaLayoutContextValues,
): JSXElement => {
  assertSlots<TreeItemPersonaLayoutSlots>(state);

  return (
    <state.root>
      {state.expandIcon && <state.expandIcon />}
      {state.selector && <state.selector />}
      <AvatarContextProvider value={contextValues.avatar}>
        <state.media />
      </AvatarContextProvider>
      <state.main />
      {state.description && <state.description />}
      <ButtonContextProvider value={state.buttonContextValue}>
        {state.actions && <state.actions />}
        {state.aside && <state.aside />}
      </ButtonContextProvider>
    </state.root>
  );
};
