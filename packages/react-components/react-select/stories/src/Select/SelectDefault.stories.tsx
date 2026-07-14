import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Select, useId } from '@iqvizyonui/react-components';
import type { SelectProps } from '@iqvizyonui/react-components';

export const Default = (props: SelectProps): JSXElement => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} {...props}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
