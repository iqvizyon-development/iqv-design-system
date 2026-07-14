import * as React from 'react';
import { AnnounceProvider } from '@iqvizyonui/react-shared-contexts';

import type { AriaLiveAnnouncerContextValues, AriaLiveAnnouncerState } from './AriaLiveAnnouncer.types';
import type { JSXElement } from '@iqvizyonui/react-utilities';

export const renderAriaLiveAnnouncer_unstable = (
  state: AriaLiveAnnouncerState,
  contextValues: AriaLiveAnnouncerContextValues,
): JSXElement => {
  return <AnnounceProvider value={contextValues.announce}>{state.children}</AnnounceProvider>;
};
