/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TreeItemState, TreeItemContextValues, TreeItemSlots } from './TreeItem.types';
import { TreeItemProvider } from '../../contexts';

/**
 * Render the final JSX of TreeItem
 */
export const renderTreeItem_unstable = (state: TreeItemState, contextValues: TreeItemContextValues): JSXElement => {
  assertSlots<TreeItemSlots>(state);

  return (
    <state.root>
      <TreeItemProvider value={contextValues.treeItem}>{state.root.children}</TreeItemProvider>
    </state.root>
  );
};
