'use client';

import * as React from 'react';
import { useIqvizyon_unstable } from '@iqvizyonui/react-shared-contexts';
import { ChevronRight12Regular } from '@fluentui/react-icons';
import { durations, curves } from '@iqvizyonui/react-motion';
import { useTreeItemContext_unstable } from '../contexts/treeItemContext';

export const TreeItemChevron = React.memo(() => {
  const open = useTreeItemContext_unstable(ctx => ctx.open);

  const { dir } = useIqvizyon_unstable();

  const expandIconRotation = open ? 90 : dir !== 'rtl' ? 0 : 180;
  return (
    <ChevronRight12Regular
      style={{
        ...expandIconInlineStyles[expandIconRotation],
        transition: `transform ${durations.durationNormal}ms ${curves.curveEasyEaseMax}`,
      }}
    />
  );
});
TreeItemChevron.displayName = 'TreeItemChevron';

const expandIconInlineStyles = {
  90: { transform: `rotate(90deg)` },
  0: { transform: `rotate(0deg)` },
  180: { transform: `rotate(180deg)` },
} as const;
