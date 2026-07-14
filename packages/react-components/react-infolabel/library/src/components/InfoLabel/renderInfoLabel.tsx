/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { InfoLabelSlots, InfoLabelState } from './InfoLabel.types';

/**
 * Render the final JSX of InfoLabel
 */
export const renderInfoLabel_unstable = (state: InfoLabelState): JSXElement => {
  assertSlots<InfoLabelSlots>(state);

  return (
    <state.root>
      <state.label />
      {state.infoButton && <state.infoButton />}
    </state.root>
  );
};
