import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import * as ReactDOM from 'react-dom';
import {
  createDOMRenderer,
  makeStyles,
  tokens,
  Button,
  IqvizyonProvider,
  RendererProvider,
} from '@iqvizyonui/react-components';

const useExampleStyles = makeStyles({
  button: {
    marginTop: '5px',
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: '20px',
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
});

const useProviderStyles = makeStyles({
  provider: {
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
});

type FrameRendererProps = {
  children: (externalDocument: Document, renderer: ReturnType<typeof createDOMRenderer>) => React.ReactElement;
};

const FrameRenderer: React.FunctionComponent<FrameRendererProps> = ({ children }) => {
  const [frameRef, setFrameRef] = React.useState<HTMLIFrameElement | null>(null);

  const contentDocument = frameRef ? (frameRef.contentDocument as Document) : undefined;
  const renderer = React.useMemo(() => createDOMRenderer(contentDocument), [contentDocument]);

  return (
    <>
      <iframe
        ref={setFrameRef}
        style={{ height: 100, width: 500, border: '3px dashed salmon', padding: 10 }}
        title="An example of Provider in iframe"
      />
      {contentDocument && ReactDOM.createPortal(children(contentDocument, renderer), contentDocument.body)}
    </>
  );
};

const Example: React.FC<{ children?: React.ReactNode }> = props => {
  const styles = useExampleStyles();

  return (
    <>
      <div className={styles.text}>{props.children}</div>
      <Button className={styles.button}>A button</Button>
    </>
  );
};

export const Frame = (): JSXElement => {
  const styles = useProviderStyles();

  return (
    <>
      <IqvizyonProvider className={styles.provider}>
        <Example>Content rendered outside iframe</Example>
      </IqvizyonProvider>

      <FrameRenderer>
        {(externalDocument, renderer) => (
          <RendererProvider renderer={renderer} targetDocument={externalDocument}>
            <IqvizyonProvider className={styles.provider} targetDocument={externalDocument}>
              <Example>
                Content rendered <b>within</b> iframe
              </Example>
            </IqvizyonProvider>
          </RendererProvider>
        )}
      </FrameRenderer>
    </>
  );
};

Frame.parameters = {
  docs: {
    description: {
      story: [
        'A IqvizyonProvider does not cross an iframe boundary.',
        'To render into iframes pass a proper `Document` instance to `targetDocument` prop on',
        'IqvizyonProvider & RendererProvider.',
      ].join(' '),
    },
  },
};
