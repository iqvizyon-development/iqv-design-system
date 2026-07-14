# @iqvizyonui/react-portal-compat

Compat layer for [React Portals](https://reactjs.org/docs/portals.html) between `@iqvizyonui/react-components` & `@iqvizyonui/react` or `@iqvizyonui/react-northstar`.

With `PortalCompatProvider` components from `@iqvizyonui/react-components` can be rendered properly in Portals created by `@iqvizyonui/react` or `@iqvizyonui/react-northstar`.

### Installation

```sh
yarn add @iqvizyonui/react-portal-compat
```

### Usage

`PortalCompatProvider` should be an inner child of `IqvizyonProvider`, no additional configuration is required for `@iqvizyonui/react` or `@iqvizyonui/react-northstar`.

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
