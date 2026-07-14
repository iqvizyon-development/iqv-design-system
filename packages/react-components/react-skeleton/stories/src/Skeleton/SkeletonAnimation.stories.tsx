import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Field, Skeleton, SkeletonItem, makeStyles, tokens } from '@iqvizyonui/react-components';
import type { SkeletonProps } from '@iqvizyonui/react-components';

const useStyles = makeStyles({
  invertedWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    paddingTop: '50px',
    paddingBottom: '50px',
  },
});

export const Animation = (props: Partial<SkeletonProps>): JSXElement => {
  const styles = useStyles();
  return (
    <div className={styles.invertedWrapper}>
      <Field validationMessage="Wave animation" validationState="none">
        <Skeleton {...props} aria-label="Loading Content">
          <SkeletonItem />
        </Skeleton>
      </Field>
      <Field validationMessage="Pulse animation" validationState="none">
        <Skeleton {...props} animation="pulse" aria-label="Loading Content">
          <SkeletonItem />
        </Skeleton>
      </Field>
    </div>
  );
};

Animation.parameters = {
  docs: {
    description: {
      story: `You can specify the animation style of the Skeleton.
      The default is 'wave' with the alternative being 'pulse'`,
    },
  },
};
