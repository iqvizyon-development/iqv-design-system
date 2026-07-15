# @iqvizyonui/react-portal-compat

Compat layer for [React Portals](https://reactjs.org/docs/portals.html) that bridges portal context between nested `@iqvizyonui/react-components` trees.

With `PortalCompatProvider`, components from `@iqvizyonui/react-components` render correctly inside portals created outside the main provider subtree.

### Installation

```sh
yarn add @iqvizyonui/react-portal-compat
```

### Usage

`PortalCompatProvider` should be an inner child of `IqvizyonProvider`.

```jsx
import { IqvizyonProvider } from '@iqvizyonui/react-components';
import { PortalCompatProvider } from '@iqvizyonui/react-portal-compat';

function App() {
  return (
    <IqvizyonProvider>
      <PortalCompatProvider>{/* your components */}</PortalCompatProvider>
    </IqvizyonProvider>
  );
}
```
