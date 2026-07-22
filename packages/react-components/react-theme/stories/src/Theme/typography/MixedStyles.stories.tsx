import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, typographyStyles, Text } from '@iqvizyonui/react-components';
import { en as En, tr as Tr } from './LocaleSwitch.stories';

const useStyles = makeStyles({
  title: typographyStyles.title2,

  paragraph: {
    ...typographyStyles.body1,
    letterSpacing: '0.0675em',
    fontStyle: 'italic',
  },
});

export const MixedStyles = (): JSXElement => {
  const styles = useStyles();

  return (
    <div>
      <Text as="h1" block className={styles.title}>
        <En>Using Title 2 tokens</En>
        <Tr>Başlık 2 belirteçlerini kullanma</Tr>
      </Text>

      <Text as="p" block className={styles.paragraph}>
        <En>I'm a paragraph using Body 1 tokens and customized styles</En>
        <Tr>Gövde 1 belirteçlerini ve özelleştirilmiş stilleri kullanan bir paragrafım</Tr>
      </Text>
    </div>
  );
};
