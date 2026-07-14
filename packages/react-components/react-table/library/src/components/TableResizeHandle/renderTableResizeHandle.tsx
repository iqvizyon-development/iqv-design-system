/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TableResizeHandleState, TableResizeHandleSlots } from './TableResizeHandle.types';

/**
 * Render the final JSX of TableResizeHandle
 */
export const renderTableResizeHandle_unstable = (state: TableResizeHandleState): JSXElement => {
  assertSlots<TableResizeHandleSlots>(state);
  return <state.root />;
};
