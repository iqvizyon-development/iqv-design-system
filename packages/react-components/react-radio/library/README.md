# @iqvizyonui/react-radio

**React Radio components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

A Radio allows a user to select a single value from two or more options. All Radios with the same `name` are considered to be part of the same group. However, a `RadioGroup` is recommended to add a group label, formatting, and other functionality.

### Usage

Import `Radio` and `RadioGroup`:

```js
// From @iqvizyonui/react-components
import { Radio, RadioGroup } from '@iqvizyonui/react-components';

// Directly from @iqvizyonui/react-radio
import { Radio, RadioGroup } from '@iqvizyonui/react-radio';
```

#### Examples

```jsx
<RadioGroup defaultValue="B">
  <Radio value="A" label="Option A" />
  <Radio value="B" label="Option B" />
  <Radio value="C" label="Option C" />
  <Radio value="D" label="Option D" />
</RadioGroup>

<RadioGroup value={value} onChange={(_, data) => setValue(data.value)}>
  <Radio value="A" label="Option A" />
  <Radio value="B" label="Option B" />
  <Radio value="C" label="Option C" />
  <Radio value="D" label="Option D" />
</RadioGroup>
```

See [Iqvizyon UI Storybook](https://iqvizyon-development.github.io/iqv-design-system/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-radio` from the list.

### Specification
