import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, typographyStyles, Text } from '@iqvizyonui/react-components';

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
        Başlık 2 belirteçlerini kullanma
      </Text>

      <Text as="p" block className={styles.paragraph}>
        Gövde 1 belirteçlerini ve özelleştirilmiş stilleri kullanan bir paragrafım
      </Text>
    </div>
  );
};
