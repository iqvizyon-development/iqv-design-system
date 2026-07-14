import * as React from 'react';
import { Field, Textarea } from '@iqvizyonui/react-components';
import type { JSXElement, TextareaProps } from '@iqvizyonui/react-components';

export const Default = (props: Partial<TextareaProps>): JSXElement => (
  <Field label="Default Textarea">
    <Textarea {...props} />
  </Field>
);
