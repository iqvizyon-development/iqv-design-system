/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

'use client';

import { canUseDOM, assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { TextDirectionProvider } from '@griffel/react';
import type { CustomStyleHooksContextValue_unstable as CustomStyleHooksContextValue } from '@iqvizyonui/react-shared-contexts';
import {
  OverridesProvider_unstable as OverridesProvider,
  Provider_unstable as Provider,
  TooltipVisibilityProvider_unstable as TooltipVisibilityProvider,
  ThemeProvider_unstable as ThemeProvider,
  ThemeClassNameProvider_unstable as ThemeClassNameProvider,
  CustomStyleHooksProvider_unstable as CustomStyleHooksProvider,
} from '@iqvizyonui/react-shared-contexts';
import type { IqvizyonProviderContextValues, IqvizyonProviderState, IqvizyonProviderSlots } from './IqvizyonProvider.types';
import { IconDirectionContextProvider } from '@fluentui/react-icons/lib/providers';

/**
 * Render the final JSX of IqvizyonProvider
 */
export const renderIqvizyonProvider_unstable = (
  state: IqvizyonProviderState,
  contextValues: IqvizyonProviderContextValues,
): JSXElement => {
  assertSlots<IqvizyonProviderSlots>(state);

  // Typescript (vscode) incorrectly references the IqvizyonProviderProps.customStyleHooks_unstable
  // instead of IqvizyonProviderContextValues.customStyleHooks_unstable and thinks it is
  // Partial<CustomStyleHooksContextValue>, so it needs to be cast to Required<CustomStyleHooksContextValue>

  return (
    <Provider value={contextValues.provider}>
      <ThemeProvider value={contextValues.theme}>
        <ThemeClassNameProvider value={contextValues.themeClassName}>
          <CustomStyleHooksProvider
            value={contextValues.customStyleHooks_unstable as Required<CustomStyleHooksContextValue>}
          >
            <TooltipVisibilityProvider value={contextValues.tooltip}>
              <TextDirectionProvider dir={contextValues.textDirection}>
                <IconDirectionContextProvider value={contextValues.iconDirection}>
                  <OverridesProvider value={contextValues.overrides_unstable}>
                    <state.root>
                      {canUseDOM() ? null : (
                        <style
                          // Using dangerous HTML because react can escape characters
                          // which can lead to invalid CSS.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: state.serverStyleProps.cssRule }}
                          {...state.serverStyleProps.attributes}
                        />
                      )}

                      {state.root.children}
                    </state.root>
                  </OverridesProvider>
                </IconDirectionContextProvider>
              </TextDirectionProvider>
            </TooltipVisibilityProvider>
          </CustomStyleHooksProvider>
        </ThemeClassNameProvider>
      </ThemeProvider>
    </Provider>
  );
};
