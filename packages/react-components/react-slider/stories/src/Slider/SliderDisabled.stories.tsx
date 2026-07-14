import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { useId, Label, Slider } from '@iqvizyonui/react-components';

export const Disabled = (): JSXElement => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Disabled Example</Label>
      <Slider defaultValue={30} disabled id={id} />
    </>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'A disabled slider will not change or fire events on click or keyboard press.',
    },
  },
};
