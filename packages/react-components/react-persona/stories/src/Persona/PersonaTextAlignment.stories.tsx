import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, Persona } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
  },
});

export const TextAlignment = (): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Persona
        textAlignment="start"
        name="Kevin Sturgis"
        presence={{ status: 'available' }}
        secondaryText="Available"
        tertiaryText="Software Engineer"
        quaternaryText="Iqvizyon"
      />
      <Persona
        textAlignment="center"
        name="Kevin Sturgis"
        presence={{ status: 'available' }}
        secondaryText="Available"
        tertiaryText="Software Engineer"
        quaternaryText="Iqvizyon"
      />
    </div>
  );
};

TextAlignment.parameters = {
  docs: {
    description: {
      story: 'A Persona supports two text alignments, `start` being the default position.',
    },
  },
};
