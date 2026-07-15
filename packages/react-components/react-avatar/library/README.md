# @iqvizyonui/react-avatar

**React Avatar components for [Iqvizyon UI](https://ibz-04.github.io/iqvui/react/)**

The Avatar component represents a person or entity. It displays the person's image, initials, or an icon, and can be either circular or square.

## Usage

To import Avatar:

```js
import { Avatar } from '@iqvizyonui/react-components';
```

### Examples

```jsx
<Avatar name="Miguel Garcia" />
<Avatar size={72} name="Mona Kane" image="./MonaKane.jpg" />
<Avatar shape="square" icon={<IDBadgeIcon />} />
```

Displaying a badge:

```jsx
<Avatar name="Allan Munger" badge={<PresenceBadge status="busy">} />
```

With active state indication:

```jsx
<Avatar name="Daisy Phillips" active={true} activeAppearance="ring-shadow" />
<Avatar name="Robin Counts" active={false} activeAppearance="ring-shadow" />
```

See [Iqvizyon UI Storybook](https://ibz-04.github.io/iqvui/react/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-avatar` from the list.

### Specification

See [SPEC.md](./SPEC.md).
