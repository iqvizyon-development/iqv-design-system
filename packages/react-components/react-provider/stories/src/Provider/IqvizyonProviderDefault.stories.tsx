import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import {
  makeStyles,
  teamsDarkTheme,
  teamsLightTheme,
  tokens,
  webLightTheme,
  Button,
  IqvizyonProvider,
} from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  button: {
    marginTop: '5px',
  },
  provider: {
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: '20px',
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
});

export const Default = (): JSXElement => {
  const styles = useStyles();
  return (
    <>
      <div>
        <IqvizyonProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
          <Button className={styles.button}>Web Light Theme</Button>
        </IqvizyonProvider>
      </div>
      <div>
        <IqvizyonProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
          <Button className={styles.button}>Teams Light Theme</Button>
        </IqvizyonProvider>
      </div>
      <div>
        <IqvizyonProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
          <Button className={styles.button}>Teams Dark Theme</Button>
        </IqvizyonProvider>
      </div>
    </>
  );
};
