import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from '@iqvizyonui/react-components';
import { ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons';
import { resolveAsset } from '../resolveAsset';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    maxWidth: '720px',
    width: '100%',
  },
});

export const Default = (): JSXElement => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={<img src={resolveAsset('avatar_elvia.svg')} alt="Elvia Atkins avatar picture" />}
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview>
        <img src={resolveAsset('doc_template.png')} alt="Preview of a document: About Us - Overview" />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};
