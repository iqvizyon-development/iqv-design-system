import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, ProgressBar } from '@iqvizyonui/react-components';

export const Indeterminate = (): JSXElement => {
  return (
    <Field validationMessage="Indeterminate ProgressBar" validationState="none">
      <ProgressBar />
    </Field>
  );
};

Indeterminate.parameters = {
  docs: {
    description: {
      story: `ProgressBar is indeterminate when 'value' is undefined.
      Indeterminate ProgressBar is best used to show that an operation is being executed.`,
    },
  },
};
