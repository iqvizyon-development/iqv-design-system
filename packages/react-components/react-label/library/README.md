# @iqvizyonui/react-label

**Label components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

Labels provide a name or title to a component or group of components, e.g., text fields, checkboxes, radio buttons, and dropdown menus.

## Usage

To import `Label`:

```js
import { Label } from '@iqvizyonui/react-components';
```

### Examples

```tsx
import * as React from 'react';
import { Label } from '@iqvizyonui/react-components';
import { useId } from '@iqvizyonui/react-utilities';

export const labelExample = () => {
  const inputId = useId('firstNameLabel-');

  return (
    <>
      <Label htmlfor={inputId} required strong>
        First Name
      </Label>
      <input id={inputId} />
    </>
  );
};
```

See [Iqvizyon UI Storybook](https://ibz-04.github.io/iqvui/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-label` from the list.

### Specification

See [Spec.md](./Spec.md).
