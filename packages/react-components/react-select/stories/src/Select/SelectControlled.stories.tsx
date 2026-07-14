import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Select, useId } from '@iqvizyonui/react-components';
import type { SelectProps } from '@iqvizyonui/react-components';

export const Controlled = (): JSXElement => {
  const selectId = useId();
  const [value, setValue] = React.useState('Red');

  const onChange: SelectProps['onChange'] = (event, data) => {
    setValue(data.value);
  };

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} onChange={onChange} value={value}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
      <button onClick={() => setValue('Blue')}>Select Blue</button>
    </>
  );
};

Controlled.parameters = {
  docs: {
    description: {
      story: 'The value of a Select can be controlled by updating the `selected` prop on `option` elements.',
    },
  },
};
