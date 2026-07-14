import * as React from 'react';
import {
  IqvizyonProvider,
  makeStyles,
  mergeClasses,
  Text,
  tokens,
  webDarkTheme,
  Button,
} from '@iqvizyonui/react-components';
import iqvLogo from '../../assets/iqv-logo.svg';

export interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '40px',
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: tokens.spacingHorizontalL,
    gap: tokens.spacingHorizontalS,
  },
  logoImage: {
    display: 'block',
    width: '20px',
    height: '20px',
  },
  text: {
    width: '300px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    paddingRight: tokens.spacingHorizontalL,
  },
});

export const Header = (props: HeaderProps) => {
  const styles = useStyles();

  const handleClick = () => {
    const url = 'https://github.com/iBz-04/iqvui/discussions';
    window.open(url, '_blank');
  };

  return (
    <IqvizyonProvider theme={webDarkTheme} className={mergeClasses(styles.root, props.className)}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src={iqvLogo} alt="Iqvizyon" width={20} height={20} />
          <Text className={styles.text}>Theme Designer</Text>
        </div>
        <div className={styles.link}>
          <Button size="small" appearance="outline" onClick={handleClick}>
            Give Feedback
          </Button>
        </div>
      </div>
    </IqvizyonProvider>
  );
};
