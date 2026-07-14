/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TabListBaseState, TabListSlots, TabListContextValues } from './TabList.types';
import { TabListProvider } from './TabListContext';

/**
 * Render the final JSX of TabList
 */
export const renderTabList_unstable = (state: TabListBaseState, contextValues: TabListContextValues): JSXElement => {
  assertSlots<TabListSlots>(state);

  return (
    <state.root>
      <TabListProvider value={contextValues.tabList}>{state.root.children}</TabListProvider>
    </state.root>
  );
};
