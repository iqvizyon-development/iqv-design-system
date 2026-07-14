/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { AvatarContextProvider } from '@iqvizyonui/react-avatar';
import type { TableCellLayoutState, TableCellLayoutSlots, TableCellLayoutContextValues } from './TableCellLayout.types';

/**
 * Render the final JSX of TableCellLayout
 */
export const renderTableCellLayout_unstable = (
  state: TableCellLayoutState,
  contextValues: TableCellLayoutContextValues,
): JSXElement => {
  assertSlots<TableCellLayoutSlots>(state);

  return (
    <state.root>
      {state.media && (
        <AvatarContextProvider value={contextValues.avatar}>
          <state.media />
        </AvatarContextProvider>
      )}

      {state.content && (
        <state.content>
          {state.main && <state.main>{state.root.children}</state.main>}
          {state.description && <state.description />}
        </state.content>
      )}
    </state.root>
  );
};
