# @iqvizyonui/react-drawer

**React Drawer components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

These are not production-ready components and **should never be used in product**. This space is useful for testing new components whose APIs might change before final release.

The Drawer gives users a quick entry point to configuration and information. It should be used when retaining context is beneficial to users. An overlay is optional depending on whether or not interacting with the background content is beneficial to the user’s context/scenario. An overlay makes the Drawer blocking and signifies that the users full attention is required when making configurations.

## Usage

To import React Drawer components:

```tsx
import {
  Drawer,
  OverlayDrawer,
  InlineDrawer,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerHeaderNavigation,
  DrawerBody
} from "@iqvizyonui/react-components';
```

Simple example of Drawer Usage:

```tsx
import { DrawerBody, DrawerHeader, DrawerHeaderTitle, Drawer } from '@iqvizyonui/react-components';
import { Button } from '@iqvizyonui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

export const App = () => (
  <Drawer type="inline" open>
    <DrawerHeader>
      <DrawerHeaderTitle
        action={
          <Button
            appearance="subtle"
            aria-label="Close drawer"
            icon={<Dismiss24Regular />}
            onClick={() => setIsOpen(false)}
          />
        }
      >
        Title goes here
      </DrawerHeaderTitle>
    </DrawerHeader>

    <DrawerBody>
      <p>Content goes here</p>
    </DrawerBody>
  </Drawer>
);
```

## Specification

## API

For information about the components, please refer to the [API documentation](https://iqvizyon-development.github.io/iqv-design-system/react/?path=/docs/components-drawer--default).
