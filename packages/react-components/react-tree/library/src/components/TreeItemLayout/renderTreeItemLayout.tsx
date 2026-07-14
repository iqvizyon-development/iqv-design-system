/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TreeItemLayoutState, TreeItemLayoutSlots } from './TreeItemLayout.types';
import { ButtonContextProvider } from '@iqvizyonui/react-button';

/**
 * Render the final JSX of TreeItemLayout
 */
export const renderTreeItemLayout_unstable = (state: TreeItemLayoutState): JSXElement => {
  assertSlots<TreeItemLayoutSlots>(state);

  return (
    <state.root>
      {state.expandIcon && <state.expandIcon />}
      {state.selector && <state.selector />}
      {state.iconBefore && <state.iconBefore />}
      <state.main>{state.root.children}</state.main>
      {state.iconAfter && <state.iconAfter />}
      <ButtonContextProvider value={state.buttonContextValue}>
        {state.actions && <state.actions />}
        {state.aside && <state.aside />}
      </ButtonContextProvider>
    </state.root>
  );
};
