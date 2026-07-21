/*
  IconDirectionContextValue is being imported as a leaf node import in order to prevent extra icons froms being
  downloaded when trying to use the IqvizyonProvider.
  This issue has more context: https://github.com/iqvizyon-development/iqv-design-system/issues/30909
*/
import type { IconDirectionContextValue } from '@fluentui/react-icons/lib/providers';
import type {
  OverridesContextValue_unstable as OverridesContextValue,
  ProviderContextValue_unstable as ProviderContextValue,
  TooltipVisibilityContextValue_unstable as TooltipVisibilityContextValue,
  ThemeClassNameContextValue_unstable as ThemeClassNameContextValue,
  ThemeContextValue_unstable as ThemeContextValue,
  CustomStyleHooksContextValue_unstable as CustomStyleHooksContextValue,
} from '@iqvizyonui/react-shared-contexts';
import type { PartialTheme } from '@iqvizyonui/react-theme';
import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';

export type IqvizyonProviderSlots = {
  root: Slot<'div'>;
};

// exported for callers to avoid referencing react-shared-context
// and applying Partial<> when passing custom style hooks.
export type IqvizyonProviderCustomStyleHooks = CustomStyleHooksContextValue;

export type IqvizyonProviderProps = Omit<ComponentProps<IqvizyonProviderSlots>, 'dir'> & {
  /**
   * Passes styles applied to a component down to portals if enabled.
   * @default true
   */
  applyStylesToPortals?: boolean;

  /** Sets the hooks for custom styling components. */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  customStyleHooks_unstable?: IqvizyonProviderCustomStyleHooks;

  /** Sets the direction of text & generated styles. */
  dir?: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  targetDocument?: Document;

  /** Sets the theme used in a scope. */
  theme?: PartialTheme;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  overrides_unstable?: OverridesContextValue;
};

export type IqvizyonProviderState = ComponentState<IqvizyonProviderSlots> &
  Pick<IqvizyonProviderProps, 'targetDocument'> &
  Required<
    Pick<IqvizyonProviderProps, 'applyStylesToPortals' | 'customStyleHooks_unstable' | 'dir' | 'overrides_unstable'>
  > & {
    theme: ThemeContextValue;
    themeClassName: string;
    /**
     * Props used to render SSR theme variables style element
     */
    serverStyleProps: {
      /**
       * CSS rule containing CSS variables
       */
      cssRule: string;
      /**
       * Additional attributes applied to the style element
       */
      attributes: Record<string, string>;
    };
  };

export type IqvizyonProviderContextValues = Pick<
  IqvizyonProviderState,
  'customStyleHooks_unstable' | 'theme' | 'overrides_unstable'
> & {
  provider: ProviderContextValue;
  themeClassName: ThemeClassNameContextValue;
  textDirection: 'ltr' | 'rtl';
  iconDirection: IconDirectionContextValue;
  tooltip: TooltipVisibilityContextValue;
};
