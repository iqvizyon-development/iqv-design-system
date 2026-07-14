import * as React from 'react';
import type { JSXElement, InfoLabelProps } from '@iqvizyonui/react-components';

import { InfoLabel, Link } from '@iqvizyonui/react-components';

export const Default = (props: Partial<InfoLabelProps>): JSXElement => (
  <InfoLabel
    info={
      <>
        This is example information for an InfoLabel. <Link href="https://ibz-04.github.io/iqvui/react/">Learn more</Link>
      </>
    }
    {...props}
  >
    Example label
  </InfoLabel>
);
