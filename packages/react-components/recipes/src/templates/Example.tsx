import * as React from 'react';
import { IqvizyonProvider } from '@iqvizyonui/react-provider';
import { webLightTheme } from '@iqvizyonui/react-theme';
import { mergeClasses } from '@griffel/react';
import { useExampleStyles } from './Example.styles';

export const TemplateExample: React.FC<{ children?: React.ReactNode; centered?: boolean }> = ({
  children,
  centered,
}) => {
  const exampleStyles = useExampleStyles();

  const innerContainerClassName = mergeClasses(exampleStyles.innerContainer, centered && exampleStyles.centered);

  return (
    <IqvizyonProvider theme={webLightTheme}>
      <div className={exampleStyles.root}>
        <div className={innerContainerClassName}>{children}</div>
      </div>
    </IqvizyonProvider>
  );
};
