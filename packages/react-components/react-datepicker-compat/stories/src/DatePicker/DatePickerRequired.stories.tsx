import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { DatePicker } from '@iqvizyonui/react-datepicker-compat';
import { Field, makeStyles } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  control: {
    maxWidth: '300px',
  },
});

export const Required = (): JSXElement => {
  const styles = useStyles();

  return (
    <Field label="Date required" required>
      <DatePicker className={styles.control} placeholder="Select a date..." />
    </Field>
  );
};

Required.parameters = {
  docs: {
    description: {
      story: 'DatePicker supports required validation. The validation will happen when the DatePicker loses focus.',
    },
  },
};
