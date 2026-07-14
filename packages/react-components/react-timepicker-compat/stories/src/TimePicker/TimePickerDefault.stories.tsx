import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, makeStyles } from '@iqvizyonui/react-components';
import type { TimePickerProps } from '@iqvizyonui/react-timepicker-compat';
import { TimePicker } from '@iqvizyonui/react-timepicker-compat';

const useStyles = makeStyles({
  root: {
    maxWidth: '300px',
  },
});

export const Default = (props: Partial<TimePickerProps>): JSXElement => {
  const styles = useStyles();
  return (
    <Field label="Coffee time" className={styles.root}>
      <TimePicker {...props} />
    </Field>
  );
};
