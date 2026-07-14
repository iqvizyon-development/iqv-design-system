import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { RatingDisplay } from '@iqvizyonui/react-components';
import { makeStyles } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
});

export const Color = (): JSXElement => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <RatingDisplay value={3} />

      <RatingDisplay color="brand" value={3} />

      <RatingDisplay color="marigold" value={3} />
    </div>
  );
};

Color.parameters = {
  docs: {
    description: {
      story: "A RatingDisplay's `color` can be `neutral` (default), `brand`, or `marigold`.",
    },
  },
};
