import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, makeStyles } from '@iqvizyonui/react-components';
import { TimePicker } from '@iqvizyonui/react-timepicker-compat';

const useStyles = makeStyles({
  root: {
    maxWidth: '300px',
  },
});

export const Clearable = (): JSXElement => {
  const styles = useStyles();

  return (
    <Field label="Coffee time" className={styles.root}>
      <TimePicker clearable />
    </Field>
  );
};

Clearable.parameters = {
  docs: {
    description: {
      story: 'A TimePicker can be clearable and let users remove their selection.',
    },
  },
};
