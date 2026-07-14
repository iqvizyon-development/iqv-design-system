import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-utilities';

const iframeStyle: React.CSSProperties = {
  width: '100%',
  border: 'none',
};

type IqvizyonStoryProps = {
  /** The unique identifier for the story */
  id: string;
  /** The height of the iframe */
  height?: string | number;
};

/**
 * Story component to render stories in an iframe.
 * Provides a similar experience to Storybook's v7 `Story` component.
 */
export const IqvizyonStory = ({ id, height }: IqvizyonStoryProps): JSXElement => {
  return (
    <div className="sb-story sb-unstyled">
      <iframe title={id} src={`iframe.html?id=${id}&mode=story`} style={iframeStyle} height={height} />
    </div>
  );
};
