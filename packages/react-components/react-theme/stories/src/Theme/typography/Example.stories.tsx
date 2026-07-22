import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, typographyStyles } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  text: typographyStyles.title2,
});

export const Example = (): JSXElement => {
  const styles = useStyles();

  return <span className={styles.text}>Belirteçleri kullanan metin</span>;
};
