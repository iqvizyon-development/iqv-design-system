# @iqvizyonui/react-slider

**Slider components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

Slider allows users to quickly select a value (or range) by dragging a thumb across a rail. It is often used when setting values with a relaxed precision such as audio volume and screen brightness.

## Usage

To import Slider:

```js
import { Slider } from '@iqvizyonui/react-components';
```

### Examples

```jsx
<Slider />
<Slider defaultValue={3} />
<Slider value={sliderValue} onChange={sliderOnChange} />
<Slider min={0} max={10} />
<Slider vertical />
<Slider disabled />
<Slider step={10} />
<Slider size="small" />
```

See [Iqvizyon UI Storybook](https://ibz-04.github.io/iqvui/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-slider` from the list.

### Specification

See [SPEC.md](./Spec.md).
