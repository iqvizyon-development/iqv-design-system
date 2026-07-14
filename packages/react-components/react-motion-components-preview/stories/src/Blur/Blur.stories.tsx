import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { makeStyles, tokens, type PresenceComponentProps } from '@iqvizyonui/react-components';
import { Blur, type BlurParams } from '@iqvizyonui/react-motion-components-preview';

const useClasses = makeStyles({
  wrapper: {
    padding: tokens.spacingVerticalXL,
  },
});

const LoremIpsum = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => (
  <div ref={ref} {...props}>
    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '.repeat(
      10,
    )}
  </div>
));

export const DefaultBlur = (props: PresenceComponentProps & BlurParams): JSXElement => {
  const classes = useClasses();
  return (
    <div className={classes.wrapper}>
      <Blur {...props}>
        <LoremIpsum />
      </Blur>
    </div>
  );
};
