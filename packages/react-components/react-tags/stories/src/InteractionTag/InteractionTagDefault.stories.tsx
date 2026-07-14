import * as React from 'react';
import type { JSXElement, InteractionTagProps } from '@iqvizyonui/react-components';
import { InteractionTag, InteractionTagPrimary } from '@iqvizyonui/react-components';

export const Default = (props: Partial<InteractionTagProps>): JSXElement => (
  <InteractionTag {...props}>
    <InteractionTagPrimary>Primary text</InteractionTagPrimary>
  </InteractionTag>
);
