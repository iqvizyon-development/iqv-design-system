import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { CardHeader } from '@iqvizyonui/react-components';
import { makeStyles, Button, Body1, Caption1 } from '@iqvizyonui/react-components';
import { MoreHorizontal20Regular } from '@fluentui/react-icons';
import { resolveAsset } from '../resolveAsset';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    gap: '16px',
  },
  header: {
    width: '300px',
  },
});


export const Default = (): JSXElement => {
  const styles = useStyles();

  const iqvLogo = resolveAsset('iqv-logo.svg');

  return (
    <div className={styles.container}>
      <CardHeader
        className={styles.header}
        image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
        action={<Button appearance="transparent" icon={<MoreHorizontal20Regular />} aria-label="More options" />}
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
        action={<Button appearance="transparent" icon={<MoreHorizontal20Regular />} aria-label="More options" />}
      />

      <CardHeader
        className={styles.header}
        image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        action={<Button appearance="transparent" icon={<MoreHorizontal20Regular />} aria-label="More options" />}
      />

      <CardHeader
        className={styles.header}
        image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        action={<Button appearance="transparent" icon={<MoreHorizontal20Regular />} aria-label="More options" />}
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
      />

      <CardHeader
        className={styles.header}
        image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
      />
    </div>
  );
};
