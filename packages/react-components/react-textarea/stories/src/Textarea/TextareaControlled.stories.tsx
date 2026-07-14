import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, Textarea } from '@iqvizyonui/react-components';
import type { TextareaProps } from '@iqvizyonui/react-components';

export const Controlled = (): JSXElement => {
  const [value, setValue] = React.useState('initial value');

  const onChange: TextareaProps['onChange'] = (ev, data) => {
    if (data.value.length <= 50) {
      setValue(data.value);
    }
  };

  return (
    <Field label="Controlled Textarea limiting the value to 50 characters">
      <Textarea value={value} onChange={onChange} />
    </Field>
  );
};
