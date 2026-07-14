'use client';

import { useRenderer_unstable } from '@griffel/react';
import { useFocusVisible } from '@iqvizyonui/react-tabster';
import {
  ThemeContext_unstable as ThemeContext,
  useIqvizyon_unstable as useIqvizyon,
  useOverrides_unstable as useOverrides,
  CustomStyleHooksContext_unstable as CustomStyleHooksContext,
} from '@iqvizyonui/react-shared-contexts';
import type {
  CustomStyleHooksContextValue_unstable as CustomStyleHooksContextValue,
  ThemeContextValue_unstable as ThemeContextValue,
} from '@iqvizyonui/react-shared-contexts';
import { getIntrinsicElementProps, useMergedRefs, slot } from '@iqvizyonui/react-utilities';
import * as React from 'react';

import { useIqvizyonProviderThemeStyleTag } from './useIqvizyonProviderThemeStyleTag';
import type { IqvizyonProviderProps, IqvizyonProviderState } from './IqvizyonProvider.types';

// Meomizing empty objects to avoid unnecessary rerenders.
const DEFAULT_STYLE_HOOKS = {};
const DEFAULT_RENDERER_ATTRIBUTES = {};

/**
 * Create the state required to render IqvizyonProvider.
 *
 * The returned state can be modified with hooks such as useIqvizyonProviderStyles_unstable,
 * before being passed to renderIqvizyonProvider_unstable.
 *
 * @param props - props from this instance of IqvizyonProvider
 * @param ref - reference to root HTMLElement of IqvizyonProvider
 */
export const useIqvizyonProvider_unstable = (
  props: IqvizyonProviderProps,
  ref: React.Ref<HTMLElement>,
): IqvizyonProviderState => {
  const parentContext = useIqvizyon();
  const parentTheme = useTheme();
  const parentOverrides = useOverrides();
  const parentCustomStyleHooks: CustomStyleHooksContextValue =
    React.useContext(CustomStyleHooksContext) || DEFAULT_STYLE_HOOKS;

  /**
   * TODO: add merge functions to "dir" merge,
   * nesting providers with the same "dir" should not add additional attributes to DOM
   * see https://github.com/iBz-04/iqvui/blob/0dc74a19f3aa5a058224c20505016fbdb84db172/packages/fluentui/react-northstar/src/utils/mergeProviderContexts.ts#L89-L93
   */
  const {
    applyStylesToPortals = true,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable,
    dir = parentContext.dir,
    targetDocument = parentContext.targetDocument,
    theme,
    overrides_unstable: overrides = {},
  } = props;

  const mergedTheme = shallowMerge(parentTheme, theme);
  const mergedOverrides = shallowMerge(parentOverrides, overrides);

  const mergedCustomStyleHooks = shallowMerge(
    parentCustomStyleHooks,
    customStyleHooks_unstable,
  ) as CustomStyleHooksContextValue;

  const renderer = useRenderer_unstable();
  const { styleTagId, rule } = useIqvizyonProviderThemeStyleTag({
    theme: mergedTheme,
    targetDocument,
    rendererAttributes: renderer.styleElementAttributes ?? DEFAULT_RENDERER_ATTRIBUTES,
  });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (mergedTheme === undefined) {
        // eslint-disable-next-line no-console
        console.warn(
          [
            '@iqvizyonui/react-provider: IqvizyonProvider does not have your "theme" defined.',
            "Make sure that your top-level IqvizyonProvider has set a `theme` prop or you're setting the theme in your child IqvizyonProvider.",
          ].join(' '),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  return {
    applyStylesToPortals,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable: mergedCustomStyleHooks,
    dir,
    targetDocument,
    theme: mergedTheme,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable: mergedOverrides,
    themeClassName: styleTagId,

    components: {
      root: 'div',
    },

    root: slot.always(
      getIntrinsicElementProps('div', {
        ...props,
        dir,
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref: useMergedRefs(ref, useFocusVisible<HTMLDivElement>({ targetDocument })) as React.Ref<HTMLDivElement>,
      }),
      { elementType: 'div' },
    ),

    serverStyleProps: {
      cssRule: rule,
      attributes: {
        ...renderer.styleElementAttributes,
        id: styleTagId,
      },
    },
  };
};

function shallowMerge<T>(a: T, b: T): T {
  // Merge impacts perf: we should like to avoid it if it's possible
  if (a && b) {
    return { ...a, ...b };
  }

  if (a) {
    return a;
  }

  return b;
}

function useTheme(): ThemeContextValue {
  return React.useContext(ThemeContext);
}
