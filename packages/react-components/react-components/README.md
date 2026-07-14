# @iqvizyonui/react-components

**Converged Iqvizyon UI React components**

This is a suite package for converged components and related utilities. It is a result of a dedupe effort for `@iqvizyonui/react` and `@iqvizyonui/react-northstar`.

### Usage

Add @iqvizyonui/react-components to a project:

```sh
yarn add @iqvizyonui/react-components
```

To use a component, add a `IqvizyonProvider` with a theme close to the root of your application and then instantiate components inside the provider's subtree:

```js
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IqvizyonProvider, teamsLightTheme, Button } from '@iqvizyonui/react-components';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <IqvizyonProvider theme={teamsLightTheme}>
    <Button appearance="primary">I am a button.</Button>
  </IqvizyonProvider>,
);
```

### Docs

Docs are hosted at https://ibz-04.github.io/iqvui/react/.
