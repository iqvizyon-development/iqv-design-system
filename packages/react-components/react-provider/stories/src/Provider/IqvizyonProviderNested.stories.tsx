import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, tokens, webLightTheme, IqvizyonProvider } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: `5px solid ${tokens.colorBrandStroke1}`,
    borderRadius: '5px',
    margin: '5px',
  },
  text: {
    padding: '5px',
    fontSize: '18px',
  },
});

export const Nested = (): JSXElement => {
  const styles = useStyles();
  return (
    <IqvizyonProvider theme={webLightTheme}>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>

        <IqvizyonProvider
          theme={{
            colorBrandStroke1: '#780510',
            colorBrandBackground2: '#fa8072',
            colorBrandForeground2: '#780510',
          }}
        >
          <div className={styles.example}>
            <div className={styles.text}>Nested IqvizyonProvider with partial theme</div>
          </div>
        </IqvizyonProvider>
      </div>
    </IqvizyonProvider>
  );
};

Nested.parameters = {
  docs: {
    description: {
      story: 'An Iqvizyon provider can be nested to override some or all of a tokens.',
    },
  },
};
