import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, tokens } from '@iqvizyonui/react-components';
import { en as En, tr as Tr } from './LocaleSwitch.stories';

const useStyles = makeStyles({
  text: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightBold,
    lineHeight: tokens.lineHeightBase600,
  },
});

export const Composing = (): JSXElement => {
  const styles = useStyles();

  return (
    <span className={styles.text}>
      <En>Custom text using only tokens</En>
      <Tr>Yalnızca belirteçleri kullanan özel metin</Tr>
    </span>
  );
};
