/* eslint-disable @typescript-eslint/no-deprecated */
/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import type * as React from 'react';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { InfoLabelSlots, InfoLabelState } from './InfoLabel.types';

/**
 * Render the final JSX of InfoLabel
 *
 * @deprecated use {@link @iqvizyonui/react-components#InfoLabel} from `\@iqvizyonui/react-components` or `\@iqvizyonui/react-infolabel` instead
 */
export const renderInfoLabel_unstable = (state: InfoLabelState): React.ReactElement => {
  assertSlots<InfoLabelSlots>(state);

  return (
    <state.root>
      <state.label />
      {state.infoButton && <state.infoButton />}
    </state.root>
  );
};
