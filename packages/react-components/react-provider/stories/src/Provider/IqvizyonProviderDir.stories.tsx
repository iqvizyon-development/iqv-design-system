import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, tokens, IqvizyonProvider } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  example: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '300px',
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: '18px',
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
});

export const Dir = (): JSXElement => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.example}>
        <IqvizyonProvider>
          <div className={styles.text}>Text left to right</div>
        </IqvizyonProvider>
        <IqvizyonProvider dir="rtl" lang="ar">
          <div className={styles.text}>نص من اليمين إلى اليسار</div>
        </IqvizyonProvider>
      </div>
    </>
  );
};

Dir.parameters = {
  docs: {
    description: {
      story: 'An Iqvizyon provider can render text left-to-right (LTR) or right-to-left (RTL).',
    },
  },
};
