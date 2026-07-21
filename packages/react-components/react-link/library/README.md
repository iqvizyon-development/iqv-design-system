# @iqvizyonui/react-link

**Link components for [Iqvizyon UI](https://iqvizyon-development.github.io/iqv-design-system/react/)**

Links reference data that a user can follow by clicking or tapping it.

## Usage

To import Link:

```js
import { Link } from '@iqvizyonui/react-components';
```

### Examples

```jsx
<Link>This is a link</Link>
<Link href="https://www.bing.com">This is a link</Link>
<Link href="https://www.bing.com" appearance="subtle">This is a link</Link>
<Link href="https://www.bing.com" disabled>This is a link</Link>
<Link href="https://www.bing.com" target="_blank">This is a link</Link>
<Link as="button" appearance="subtle">This is a link</Link>
```

See [Iqvizyon UI Storybook](https://iqvizyon-development.github.io/iqv-design-system/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-link` from the list.

### Specification

See [SPEC.md](./SPEC.md).
