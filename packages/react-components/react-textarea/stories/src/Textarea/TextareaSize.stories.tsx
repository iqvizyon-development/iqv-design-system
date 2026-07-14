import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, makeStyles, Textarea, tokens } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  base: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalMNudge,
  },
});

export const Size = (): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <Field size="small" label="Small Textarea">
        <Textarea />
      </Field>

      <Field size="medium" label="Medium Textarea">
        <Textarea />
      </Field>

      <Field size="large" label="Large Textarea">
        <Textarea />
      </Field>
    </div>
  );
};
