'use client';

import * as React from 'react';
import { useFocusFinders } from '@iqvizyonui/react-tabster';
import { useIqvizyon_unstable } from '@iqvizyonui/react-shared-contexts';
import type { DialogSurfaceElement } from '../DialogSurface';
import type { DialogModalType } from '../Dialog';

/**
 * Focus first element on content when dialog is opened,
 */
export function useFocusFirstElement(
  open: boolean,
  modalType: DialogModalType,
): React.RefObject<DialogSurfaceElement | null> {
  const { findFirstFocusable } = useFocusFinders();
  const { targetDocument } = useIqvizyon_unstable();
  const dialogRef = React.useRef<DialogSurfaceElement | null>(null);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    const element = dialogRef.current && findFirstFocusable(dialogRef.current);
    if (element) {
      element.focus();
    } else {
      dialogRef.current?.focus(); // https://github.com/iqvizyon-development/iqv-design-system/issues/25150
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(/** #__DE-INDENT__ */ `
          @iqvizyonui/react-dialog [useFocusFirstElement]:
          A Dialog should have at least one focusable element inside DialogSurface.
          Please add at least a close button either on \`DialogTitle\` action slot or inside \`DialogActions\`
        `);
      }
    }
  }, [findFirstFocusable, open, modalType, targetDocument]);

  return dialogRef;
}
