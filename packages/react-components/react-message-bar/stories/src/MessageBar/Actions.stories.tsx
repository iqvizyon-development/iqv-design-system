import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { DismissRegular } from '@fluentui/react-icons';
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  Button,
  Link,
} from '@iqvizyonui/react-components';

export const Actions = (): JSXElement => (
  <MessageBar>
    <MessageBarBody>
      <MessageBarTitle>Descriptive title</MessageBarTitle>
      Message providing information to the user with actionable insights. <Link>Link</Link>
    </MessageBarBody>
    <MessageBarActions
      containerAction={<Button appearance="transparent" aria-label="Dismiss" icon={<DismissRegular />} />}
    >
      <Button>Action</Button>
      <Button>Action</Button>
    </MessageBarActions>
  </MessageBar>
);

Actions.parameters = {
  docs: {
    description: {
      story: ['The `MessageBar` can have different actions.'].join('\n'),
    },
  },
};
