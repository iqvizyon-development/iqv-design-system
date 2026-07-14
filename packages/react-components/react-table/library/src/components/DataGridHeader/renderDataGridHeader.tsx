import type { JSXElement } from '@iqvizyonui/react-utilities';
import { renderTableHeader_unstable } from '../TableHeader/renderTableHeader';
import type { DataGridHeaderState } from './DataGridHeader.types';

/**
 * Render the final JSX of DataGridHeader
 */
export const renderDataGridHeader_unstable = (state: DataGridHeaderState): JSXElement => {
  return renderTableHeader_unstable(state);
};
