import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, useId, Input, Label } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
    maxWidth: '300px',
  },
});

export const Placeholder = (): JSXElement => {
  const inputId = useId('input-with-placeholder');
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Input with a placeholder</Label>
      <Input placeholder="This is a placeholder" id={inputId} />
    </div>
  );
};

Placeholder.parameters = {
  docs: {
    description: {
      story:
        'An input can have placeholder text. If using the placeholder as a label (which is not ' +
        'recommended for usability), be sure to provide an `aria-label` for screen reader users.',
    },
  },
};
