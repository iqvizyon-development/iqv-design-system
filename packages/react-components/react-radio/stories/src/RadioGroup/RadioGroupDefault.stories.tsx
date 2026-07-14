import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import type { RadioGroupProps } from '@iqvizyonui/react-components';
import { Field, Radio, RadioGroup } from '@iqvizyonui/react-components';

export const Default = (props: Partial<RadioGroupProps>): JSXElement => (
  <Field label="Favorite Fruit">
    <RadioGroup {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
