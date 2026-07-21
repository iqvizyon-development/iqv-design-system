# @iqvizyonui/react-badge

**Badge components for [Iqvizyon UI](https://iqvizyon-development.github.io/iqv-design-system/react/)**

A badge is an additional visual descriptor for UI elements. It can be used to denote numerical value, status or general information.

## Usage

To import Badge:

```js
import { Badge, CounterBadge, PresenceBadge } from '@iqvizyonui/react-components';
```

### Examples

```jsx
<Badge>999+</Badge>
<Badge appearance="filled">999+</Badge>
<Badge shape="rounded" />
<Badge size="medium" icon={<PasteIcon />} />
<CounterBadge count={5} appearance="ghost" />
<CounterBadge count={0} dot />
<CounterBadge count={5} size="extra-large" />
<PresenceBadge status="available" />
<PresenceBadge status="away" />
<PresenceBadge outOfOffice status="do-not-disturb" />
```

See [Iqvizyon UI Storybook](https://iqvizyon-development.github.io/iqv-design-system/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-badge` from the list.

### Specification

See [SPEC.md](./SPEC.md).
