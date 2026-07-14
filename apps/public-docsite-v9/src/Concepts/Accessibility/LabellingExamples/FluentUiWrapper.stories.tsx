import * as React from 'react';

import { teamsLightTheme, IqvizyonProvider } from '@iqvizyonui/react-components';

export const FluentWapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <IqvizyonProvider theme={teamsLightTheme}>{children}</IqvizyonProvider>;
};
