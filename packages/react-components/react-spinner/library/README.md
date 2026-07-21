# @iqvizyonui/react-spinner

**Spinner components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

The Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. Spinners are typically indeterminate progress indicators that is used when it is unknown how long a task will take to complete. They can be various sizes, located inline with content or centered. They generally appear while an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.

## Usage

To import Spinner:

```js
import { Spinner } from '@iqvizyonui/react-components';
```

### Examples

```js
<Spinner label="Loading..." />
<Spinner label="Loading..." appearance="inverted" />
<Spinner label="Loading..." size="large" />
```

See [Iqvizyon UI Storybook](https://iqvizyon-development.github.io/iqv-design-system/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-spinner` from the list.

#### Rendering Spinner without the animated circle

You can directly override the Spinner slot to render a Spinner without the animated circle, as shown below

```js
<Spinner spinner={null} appearance="primary" label="Primary Spinner" />
<Spinner spinner={{style:{visibility: 'hidden'}}} appearance="inverted" label="Inverted Spinner" />
```

### Specification

See [SPEC.md](./SPEC.md).
