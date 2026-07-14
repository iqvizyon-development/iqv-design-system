'use client';

import type { AvatarContextValue } from '@iqvizyonui/react-avatar';
import * as React from 'react';
import type { TreeItemPersonaLayoutState, TreeItemPersonaLayoutContextValues } from './TreeItemPersonaLayout.types';

export function useTreeItemPersonaLayoutContextValues_unstable(
  state: TreeItemPersonaLayoutState,
): TreeItemPersonaLayoutContextValues {
  const { avatarSize } = state;

  const avatar = React.useMemo<AvatarContextValue>(() => ({ size: avatarSize }), [avatarSize]);

  return { avatar };
}
