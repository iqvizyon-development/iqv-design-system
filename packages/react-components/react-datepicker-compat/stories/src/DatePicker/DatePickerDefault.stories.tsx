import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { DatePicker } from '@iqvizyonui/react-datepicker-compat';
import { Field, makeStyles } from '@iqvizyonui/react-components';
import type { DatePickerProps } from '@iqvizyonui/react-datepicker-compat';

const useStyles = makeStyles({
  control: {
    maxWidth: '300px',
  },
});

export const Default = (props: Partial<DatePickerProps>): JSXElement => {
  const styles = useStyles();

  return (
    <Field label="Select a date">
      <DatePicker className={styles.control} placeholder="Select a date..." {...props} />
    </Field>
  );
};
