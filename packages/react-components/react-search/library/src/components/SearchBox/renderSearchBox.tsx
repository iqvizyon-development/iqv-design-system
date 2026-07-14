/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { SearchBoxBaseState, SearchBoxSlots } from './SearchBox.types';

/**
 * Render the final JSX of SearchBox
 */
export const renderSearchBox_unstable = (state: SearchBoxBaseState): JSXElement => {
  assertSlots<SearchBoxSlots>(state);

  return (
    <state.root>
      {state.contentBefore && <state.contentBefore />}
      <state.input />
      {state.contentAfter && (
        <state.contentAfter>
          {state.contentAfter.children}
          {state.dismiss && <state.dismiss />}
        </state.contentAfter>
      )}
    </state.root>
  );
};
