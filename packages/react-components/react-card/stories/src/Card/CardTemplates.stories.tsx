import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import {
  makeStyles,
  tokens,
  Button,
  Text,
  Caption1,
  Badge,
  Checkbox,
  Body1,
  mergeClasses,
} from '@iqvizyonui/react-components';
import {
  AlertUrgent16Filled,
  Attach16Regular,
  CheckmarkCircle16Regular,
  CircleHalfFill16Regular,
  Comment16Regular,
  MoreHorizontal20Regular,
} from '@fluentui/react-icons';
import { Card, CardHeader, CardPreview } from '@iqvizyonui/react-components';
import { resolveAsset } from '../resolveAsset';

const useStyles = makeStyles({
  container: {
    gap: '16px',
    display: 'flex',
    flexWrap: 'wrap',
  },

  card: {
    maxWidth: '280px',
    width: '100%',
    height: 'fit-content',
  },

  flex: {
    gap: '4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  labels: { gap: '6px' },

  footer: { gap: '12px' },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  taskCheckbox: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  grid: {
    gap: '16px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});


const iqvLogo = resolveAsset('iqv-logo.svg');

export const Templates = (): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <header className={mergeClasses(styles.flex, styles.labels)}>
          <Badge color="severe" shape="rounded" appearance="tint">
            Red
          </Badge>

          <Badge color="success" shape="rounded" appearance="tint">
            Green
          </Badge>

          <Badge color="brand" shape="rounded" appearance="tint">
            Blue
          </Badge>
        </header>

        <div className={styles.taskCheckbox}>
          <Checkbox id="task-1" />

          <label htmlFor="task-1">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block className={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar
              plum.
            </Caption1>
          </label>
        </div>

        <div className={styles.taskCheckbox}>
          <Checkbox id="task-2" />

          <label htmlFor="task-2">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block className={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar
              plum.
            </Caption1>
          </label>
        </div>

        <footer className={mergeClasses(styles.flex, styles.footer)}>
          <AlertUrgent16Filled primaryFill="#C4314B" />
          <CircleHalfFill16Regular primaryFill="#0078DB" />

          <div className={styles.flex}>
            <Attach16Regular />
            <Body1>4</Body1>
          </div>

          <div className={styles.flex}>
            <CheckmarkCircle16Regular />
            <Body1>2/12</Body1>
          </div>

          <Comment16Regular />
        </footer>
      </Card>

      <Card className={styles.card}>
        <CardPreview>
          <img src={resolveAsset('intelligence.png')} alt="Intelligence - Design to Amplify" />
        </CardPreview>
      </Card>

      <div className={styles.grid} role="list">
        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
            header={<Text weight="semibold">Team Offsite 2020</Text>}
            description={<Caption1 className={styles.caption}>Files &gt; Presentations</Caption1>}
            action={<Button appearance="transparent" aria-label="More actions" icon={<MoreHorizontal20Regular />} />}
          />
        </Card>

        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
            header={<Text weight="semibold">Team Budget</Text>}
            description={<Caption1 className={styles.caption}>Files &gt; Spreadsheets</Caption1>}
            action={<Button appearance="transparent" aria-label="More actions" icon={<MoreHorizontal20Regular />} />}
          />
        </Card>

        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{ as: 'img', src: iqvLogo, alt: 'Iqvizyon logo' }}
            header={<Text weight="semibold">Secret Project Briefing</Text>}
            description={<Caption1 className={styles.caption}>Files &gt; Documents</Caption1>}
            action={<Button appearance="transparent" aria-label="More actions" icon={<MoreHorizontal20Regular />} />}
          />
        </Card>
      </div>
    </div>
  );
};

Templates.parameters = {
  docs: {
    description: {
      story: 'Cards can be composed with other components to build rich elements for a page.',
    },
  },
};
