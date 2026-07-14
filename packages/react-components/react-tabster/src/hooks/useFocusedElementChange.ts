'use client';

import { type Types as TabsterTypes, disposeTabster } from 'tabster';
import * as React from 'react';
import { useIqvizyon_unstable as useIqvizyon } from '@iqvizyonui/react-shared-contexts';
import { useEventCallback } from '@iqvizyonui/react-utilities';

import { createTabsterWithConfig } from './useTabster';

/**
 * Subscribes to the tabster focused element. Calls the callback when the focused element changes.
 * @param callback - Callback to subscribe to the focused element.
 */
export function useFocusedElementChange(
  callback: TabsterTypes.SubscribableCallback<HTMLElement | undefined, TabsterTypes.FocusedElementDetail>,
): void {
  const { targetDocument } = useIqvizyon();
  const listener = useEventCallback(callback);

  React.useEffect(() => {
    const tabster = createTabsterWithConfig(targetDocument);

    if (tabster) {
      tabster.focusedElement.subscribe(listener);

      return () => {
        tabster.focusedElement.unsubscribe(listener);
        disposeTabster(tabster);
      };
    }
  }, [listener, targetDocument]);
}
