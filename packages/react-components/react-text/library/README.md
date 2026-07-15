# @iqvizyonui/react-text

**React Text components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

The Text component exists to ensure consistency in your application's content by setting fixed sizes and other styles.
This package also exports wrappers which ensure your text follows the Iqvizyon design standards of typography.

## Usage

To use the Text components in your application, you can start by installing the main package of Iqvizyon UI components:

<!-- TODO: Validate if IqvizyonProvider works without theme. If not, which theme should we refer to -->

```sh
npm install @iqvizyonui/react-components
```

```jsx
import { IqvizyonProvider, Text } from '@iqvizyonui/react-components';

const App = () => (
  <IqvizyonProvider>
    <Text>Iqvizyon UI Text!</Text>
  </IqvizyonProvider>
);
```

Or by installing only the `@iqvizyonui/react-text` package. Keep in mind you'll need to install the IqvizyonProvider package as well:

```sh
npm install @iqvizyonui/react-text
npm install @iqvizyonui/react-provider
```

```jsx
import { IqvizyonProvider } from '@iqvizyonui/react-provider';
import { Text } from '@iqvizyonui/react-text';

const App = () => (
  <IqvizyonProvider>
    <Text>Iqvizyon UI Text!</Text>
  </IqvizyonProvider>
);
```

## Typography wrappers

![List of typography variants by sorted descending by size](./docs/assets/typography-examples.gif 'Typography wrapper list')

Wrappers offer an easy way to use text according to the Iqvizyon Design System while also providing semantic code readability.

Below is an example of the Display wrapper vs using the Text component:

```tsx
import { Text, Display } from '@iqvizyonui/react-text';

const Example = () => (
  <>
    <Text size={1000} weight="semibold">
      This text is styled like a Display variant.
    </Text>
    <Display>This text is also styled like a Display variant.</Display>
  </>
);
```

As you can see, using the `Display` wrapper is a lot easier to read and provides a clearer visual of the page's layout.

## Semantic elements

By default, Text and all the typography wrappers render a `<span>` element. You should use the `as` property to ensure your page has proper semantic elements such as heading or paragraph elements.

```html
<div>
  <Subtitle1 as="h1">Subtitle1</Subtitle1>
  <Subtitle2 as="h2">Subtitle2</Subtitle2>
  <Text as="p">This is simple example</Text>
</div>
```

This will result in the following DOM structure:

```html
<div>
  <h1>Subtitle1</h1>
  <h2>Subtitle2</h2>
  <p>This is simple example</p>
</div>
```

## API

For more information about the components, please refer to the [API documentation](https://ibz-04.github.io/iqvui/react/).
