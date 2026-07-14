# @iqvizyonui/react-motion

**React Motion components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

A lightweight, performant animation library for React that brings Iqvizyon UI experiences to life using the Web Animations API (WAAPI).

## Features

- ⚡ **Performance** — Animations run on the compositor thread for smooth 60fps motion
- 📦 **Lightweight** — ~3KB gzipped, leverages native browser capabilities
- 🎯 **Simple by default** — Common UI animations with minimal code
- 🔧 **Powerful on demand** — Full customization with keyframes, timing, and callbacks

## Installation

```bash
npm install @iqvizyonui/react-motion
# or
yarn add @iqvizyonui/react-motion
```

## Quick Start

```tsx
import { createPresenceComponent, motionTokens } from '@iqvizyonui/react-motion';

// Create a custom fade presence component
const Fade = createPresenceComponent({
  enter: {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    duration: motionTokens.durationNormal,
  },
  exit: {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    duration: motionTokens.durationFast,
  },
});

// Use it in your app
function App() {
  const [visible, setVisible] = useState(true);

  return (
    <Fade visible={visible}>
      <div>Animated content</div>
    </Fade>
  );
}
```

## Documentation

📚 **[Full documentation](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-introduction--docs)**

- [Introduction](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-introduction--docs) — Overview and key concepts
- [createPresenceComponent](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-apis-createpresencecomponent--docs) — Two-way enter/exit animations
- [createMotionComponent](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-apis-createmotioncomponent--docs) — One-way animations
- [Motion Tokens](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-tokens--docs) — Duration and easing values
- [Migration Guide](https://ibz-04.github.io/iqvui/react/?path=/docs/motion-migration--docs) — Coming from Framer Motion, GSAP, etc.

## Pre-built Components

For ready-to-use motion components (Fade, Scale, Slide, Collapse, etc.), see **[@iqvizyonui/react-motion-components-preview](https://www.npmjs.com/package/@iqvizyonui/react-motion-components-preview)**.
