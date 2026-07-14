import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, Textarea } from '@iqvizyonui/react-components';

export const Placeholder = (): JSXElement => (
  <Field label="Textarea with placeholder">
    <Textarea placeholder="type here..." />
  </Field>
);
