'use client';

import * as React from 'react';
import { useIqvizyon_unstable as useIqvizyon } from '@iqvizyonui/react-shared-contexts';

const { useRef, useEffect } = React;

/**
 * @deprecated migrated to \@fluentui\-contrib/react\-virtualizer for stable release.
 */
export const useMutationObserver = (
  target: Element | Document | undefined,
  callback: MutationCallback,
  options?: MutationObserverInit,
): {
  observer: React.MutableRefObject<MutationObserver | undefined>;
} => {
  // TODO: exclude types from this lint rule: https://github.com/iBz-04/iqvui/issues/31286

  const observer = useRef<MutationObserver | undefined>(undefined);
  const { targetDocument } = useIqvizyon();
  const win = targetDocument?.defaultView;

  useEffect(() => {
    if (!win) {
      return;
    }
    // Create an observer instance linked to the callback function
    // eslint-disable-next-line react-hooks/immutability -- deprecated package, not worth refactoring
    observer.current = new win.MutationObserver(callback);
  }, [callback, win]);

  useEffect(() => {
    if (target) {
      // Start observing the target node for configured mutations
      observer.current?.observe(target, options);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [target, options]);

  return { observer };
};
