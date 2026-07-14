import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, Textarea } from '@iqvizyonui/react-components';

export const Disabled = (): JSXElement => (
  <Field label="Disabled Textarea">
    <Textarea disabled />
  </Field>
);
