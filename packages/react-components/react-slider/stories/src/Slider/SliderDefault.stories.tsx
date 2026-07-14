import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { useId, Label, Slider } from '@iqvizyonui/react-components';

export const Default = (): JSXElement => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Basic Example</Label>
      <Slider defaultValue={20} id={id} />
    </>
  );
};

Default.parameters = {
  docs: {
    description: {
      story: 'A default slider',
    },
  },
};
