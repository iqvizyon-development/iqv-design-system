import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, typographyStyles } from '@iqvizyonui/react-components';
import { en as En, tr as Tr } from './LocaleSwitch.stories';

const useStyles = makeStyles({
  text: typographyStyles.title2,
});

export const Example = (): JSXElement => {
  const styles = useStyles();

  return (
    <span className={styles.text}>
      <En>Text using tokens</En>
      <Tr>Belirteçleri kullanan metin</Tr>
    </span>
  );
};
