import type { JSXElement } from '@iqvizyonui/react-utilities';

export type PresenceGroupChild = {
  element: JSXElement;

  appear: boolean;
  visible: boolean;
  unmountOnExit: boolean;
};

export type PresenceGroupChildMapping = Record<string, PresenceGroupChild>;
