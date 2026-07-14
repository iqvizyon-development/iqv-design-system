import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { DismissRegular } from '@fluentui/react-icons';
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  Button,
  Link,
} from '@iqvizyonui/react-components';

export const Default = (): JSXElement => (
  <MessageBar>
    <MessageBarBody>
      <MessageBarTitle>Descriptive title</MessageBarTitle>
      Message providing information to the user with actionable insights. <Link>Link</Link>
    </MessageBarBody>
    <MessageBarActions
      containerAction={<Button aria-label="dismiss" appearance="transparent" icon={<DismissRegular />} />}
    >
      <Button>Action</Button>
      <Button>Action</Button>
    </MessageBarActions>
  </MessageBar>
);
