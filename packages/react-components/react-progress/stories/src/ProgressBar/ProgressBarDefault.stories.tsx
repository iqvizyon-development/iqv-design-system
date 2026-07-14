import * as React from 'react';
import type { JSXElement, ProgressBarProps } from '@iqvizyonui/react-components';
import { Field, ProgressBar } from '@iqvizyonui/react-components';

export const Default = (props: Partial<ProgressBarProps>): JSXElement => {
  return (
    <Field validationMessage="Default ProgressBar" validationState="none">
      <ProgressBar {...props} value={0.5} />
    </Field>
  );
};
