# @iqvizyonui/react-switch

**Switch components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

The `Switch` control enables users to trigger an option on or off through interacting with the component.

## Usage

To import Switch:

```js
import { Switch } from '@iqvizyonui/react-components';
```

### Examples

```jsx
<Switch />
<Switch defaultChecked required />
<Switch checked onChange={onChange} />
<Switch disabled />
<Switch label="Enable dark mode" labelPosition="after" />
```

See [Iqvizyon UI Storybook](https://iqvizyon-development.github.io/iqv-design-system/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-switch` from the list.

### Specification

See [SPEC.md](./Spec.md).
