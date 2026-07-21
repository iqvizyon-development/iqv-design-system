# @iqvizyonui/react-theme-sass

**React Theme Sass for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

SASS variables referencing react-theme design tokens injected to DOM by react-provider.

## Usage

1. Instantiate a `IqvizyonProvider` to inject a Iqvizyon theme into a DOM:

```jsx
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IqvizyonProvider, teamsLightTheme } from '@iqvizyonui/react-components';
import App from './App';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <IqvizyonProvider theme={teamsLightTheme}>
    <App />
  </IqvizyonProvider>,
);
```

2. In SCSS styles you can import SCSS variables from `@iqvizyonui/react-theme-sass` and use them in the styles:

```scss
@import '@iqvizyonui/react-theme-sass';

.brandedElement {
  color: $colorBrandForeground1;
  background: $colorBrandBackground;
  border-radius: $borderRadiusLarge;
}
```

> ⚠ Note: This package does not export any Javascript code.️
