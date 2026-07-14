# @iqvizyonui/react-motion-components-preview

**Pre-built Motion Components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

> ⚠️ **Preview Package**: These components are in beta and APIs may change before stable release.

Ready-to-use presence components for common UI animation patterns, built on top of `@iqvizyonui/react-motion`.

## Components

| Component    | Description                                                |
| ------------ | ---------------------------------------------------------- |
| **Fade**     | Opacity transitions for tooltips, notifications, overlays  |
| **Scale**    | Size animations for popovers, menus, emphasis              |
| **Collapse** | Height/width expansion for accordions, expandable sections |
| **Slide**    | Directional movement for drawers, panels, carousels        |
| **Blur**     | Focus/defocus effects for backgrounds, depth               |
| **Rotate**   | 3D rotation for card flips, reveals                        |
| **Stagger**  | Choreography for sequential list animations                |

Each component (except Blur and Rotate) comes with **Snappy** (150ms) and **Relaxed** (250ms) timing variants.

## Installation

```bash
npm install @iqvizyonui/react-motion-components-preview
# or
yarn add @iqvizyonui/react-motion-components-preview
```

## Quick Start

```tsx
import { Fade, Scale, Slide, Collapse } from '@iqvizyonui/react-motion-components-preview';

// Simple fade
function Tooltip({ visible, children }) {
  return (
    <Fade visible={visible}>
      {children}
    </Fade>
  );
}

// Slide from the right
function Drawer({ open, children }) {
  return (
    <Slide visible={open} outX="20px">
      {children}
    </Slide>
  );
}

// Use timing variants
import { FadeSnappy, ScaleRelaxed } from '@iqvizyonui/react-motion-components-preview';

<FadeSnappy visible={show}>Quick feedback</FadeSnappy>
<ScaleRelaxed visible={show}>Smooth entrance</ScaleRelaxed>
```

### The `.In` and `.Out` Pattern

Every presence component includes one-way sub-components:

```tsx
// One-way enter animation (plays on mount)
<Fade.In>
  <div>Fades in once</div>
</Fade.In>

// One-way exit animation (plays on mount)
<Fade.Out>
  <div>Fades out once</div>
</Fade.Out>
```

## Documentation

📚 **[Full documentation](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-introduction--docs)**

- [Introduction](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-introduction--docs) — Overview of all components
- [Fade](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-fade--docs)
- [Scale](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-scale--docs)
- [Collapse](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-collapse--docs)
- [Slide](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-slide--docs)
- [Blur](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-blur--docs)
- [Rotate](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-rotate--docs)
- [Stagger](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-choreography-preview-stagger--docs)
- [Motion Atoms](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-components-preview-atoms--docs) — Building blocks for custom components

## Related

- **[@iqvizyonui/react-motion](https://www.npmjs.com/package/@iqvizyonui/react-motion)** — Core motion APIs for creating custom animations
