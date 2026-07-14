import * as React from 'react';
import { DocsContainer, type DocsContextProps } from '@storybook/addon-docs/blocks';
import { webLightTheme } from '@iqvizyonui/react-theme';
import { IqvizyonProvider } from '@iqvizyonui/react-provider';

import { isDocsEnabled } from './utils';

interface FluentDocsContainerProps {
  context: DocsContextProps;
  children: React.ReactNode;
}

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const FluentDocsContainer: React.FC<FluentDocsContainerProps> = ({ children, context }) => {
  if (isDocsEnabled(context)) {
    return (
      <>
        {/** TODO add table of contents */}
        <IqvizyonProvider className="sb-unstyled" style={{ backgroundColor: 'transparent' }} theme={webLightTheme}>
          <DocsContainer context={context}>{children}</DocsContainer>
        </IqvizyonProvider>
      </>
    );
  }

  // If docs container is not enabled, fall back to Storybook's default DocsContainer
  return <DocsContainer context={context}>{children}</DocsContainer>;
};
