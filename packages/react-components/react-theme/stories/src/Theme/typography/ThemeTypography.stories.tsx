import * as React from 'react';
import type { JSXElement, Theme } from '@iqvizyonui/react-components';
import { makeStyles, Subtitle2Stronger, Text, typographyStyles, webLightTheme } from '@iqvizyonui/react-components';
import type { TypographyStyles } from '@iqvizyonui/react-components';

type TypographyTokens = [token: keyof TypographyStyles, tokenName: string, entries: [string, string][]][];

const typographyStyleNames: Record<keyof TypographyStyles, string> = {
  caption2: 'Açıklama 2',
  caption2Strong: 'Açıklama 2 Kalın',
  caption1: 'Açıklama 1',
  caption1Strong: 'Açıklama 1 Kalın',
  caption1Stronger: 'Açıklama 1 Daha Kalın',
  body1: 'Gövde 1',
  body1Strong: 'Gövde 1 Kalın',
  body1Stronger: 'Gövde 1 Daha Kalın',
  body2: 'Gövde 2',
  subtitle2: 'Alt Başlık 2',
  subtitle2Stronger: 'Alt Başlık 2 Daha Kalın',
  subtitle1: 'Alt Başlık 1',
  title3: 'Başlık 3',
  title2: 'Başlık 2',
  title1: 'Başlık 1',
  largeTitle: 'Büyük Başlık',
  display: 'Ekran',
};

const useStyles = makeStyles({
  container: {
    rowGap: '24px',
    columnGap: '48px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto 1fr',
    alignItems: 'start',
  },
  value: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    maxWidth: '10.5em',
  },

  ...typographyStyles,
});

// FIXME: hardcoded theme
const theme = webLightTheme;

const tokenOrder: (keyof TypographyStyles)[] = [
  'caption2',
  'caption2Strong',
  'caption1',
  'caption1Strong',
  'caption1Stronger',
  'body1',
  'body1Strong',
  'body1Stronger',
  'body2',
  'subtitle2',
  'subtitle2Stronger',
  'subtitle1',
  'title3',
  'title2',
  'title1',
  'largeTitle',
  'display',
];

const tokens: TypographyTokens = tokenOrder.map(token => [
  token,
  typographyStyleNames[token],
  Object.entries(typographyStyles[token]).map(([k, v]) => [k, v.replace(/var\(--(.+)\)/, '$1')]),
]);

export const Typography = (): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Subtitle2Stronger>Ad</Subtitle2Stronger>
      <Subtitle2Stronger>Belirteçler</Subtitle2Stronger>
      <Subtitle2Stronger>Varsayılan Değerler</Subtitle2Stronger>
      <Subtitle2Stronger>Örnek</Subtitle2Stronger>

      {tokens.map(([token, tokenName, entries]) => (
        <React.Fragment key={token}>
          <Text>{token}</Text>

          <div>
            {entries.map(([key, value]) => (
              <div key={`${token}-${key}`}>{value}</div>
            ))}
          </div>

          <div>
            {entries.map(([key, value]) => (
              <div key={`${token}-${key}`} className={styles.value}>
                {key}: {theme[value as keyof Theme]}
              </div>
            ))}
          </div>

          <Text className={styles[token]}>{tokenName}</Text>
        </React.Fragment>
      ))}
    </div>
  );
};
