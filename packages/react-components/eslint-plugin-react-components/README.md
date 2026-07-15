# @iqvizyonui/eslint-plugin-react-components

**ESLint Plugin for [Iqvizyon UI React Components](https://ibz-04.github.io/iqvui/react/)**

[![npm version](https://badge.fury.io/js/%40iqvizyonui%2Feslint-plugin-react-components.svg)](https://badge.fury.io/js/%40iqvizyonui%2Feslint-plugin-react-components)
[![Downloads](https://img.shields.io/npm/dm/@iqvizyonui/eslint-plugin-react-components.svg)](https://www.npmjs.com/package/@iqvizyonui/eslint-plugin-react-components)

## Overview

This ESLint plugin enforces best practices and coding standards for Iqvizyon UI React Components. It helps developers:

- Maintain consistency across Iqvizyon UI React components
- Catch common mistakes and anti-patterns early
- Ensure accessibility standards are met
- Follow Iqvizyon design system guidelines

## Installation

Install the plugin using your preferred package manager:

```bash
# npm
npm install --save-dev @iqvizyonui/eslint-plugin-react-components

# yarn
yarn add --dev @iqvizyonui/eslint-plugin-react-components

# pnpm
pnpm add --save-dev @iqvizyonui/eslint-plugin-react-components
```

## Usage

### Flat Config (ESLint 9+, recommended)

Add the plugin to your `eslint.config.js`:

```js
const iqvizyonReactComponents = require('@iqvizyonui/eslint-plugin-react-components');

module.exports = [
  iqvizyonReactComponents.configs.recommended,
  // Your other configs...
];
```

Or configure individual rules manually:

```js
const iqvizyonReactComponents = require('@iqvizyonui/eslint-plugin-react-components');

module.exports = [
  {
    plugins: {
      '@iqvizyonui/react-components': iqvizyonReactComponents,
    },
    rules: {
      '@iqvizyonui/react-components/prefer-react-components': 'warn',
    },
  },
];
```

### Legacy Config (ESLint 8 and below)

Add the plugin to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['@iqvizyonui/react-components'],
  extends: ['plugin:@iqvizyonui/react-components/recommended'],
};
```

Or configure individual rules manually:

```js
module.exports = {
  plugins: ['@iqvizyonui/react-components'],
  rules: {
    '@iqvizyonui/react-components/prefer-react-components': 'warn',
  },
};
```

## Available Rules

### prefer-react-components

Prefer `@iqvizyonui/react-components` over the legacy `@iqvizyonui/react` package.

#### Examples

**✅ Do**

```js
import { Button } from '@iqvizyonui/react-components';

const Component = () => <Button>...</Button>;
```

**❌ Don't**

```js
import { DefaultButton } from '@iqvizyonui/react';

const Component = () => <DefaultButton>...</DefaultButton>;
```

### enforce-use-client

Ensures that source files using client-only React features begin with the top-level `'use client'` directive, and flags files that include the directive unnecessarily.

The rule looks for any of the following client-only features:

- React client hooks and APIs (e.g. `useState`, `useEffect`, `useRef`, `forwardRef`, `memo`)
- Custom hooks (functions whose name starts with `use` and are not in the safe set: `use`, `useId`)
- JSX event handler props (properties starting with `on` followed by a capital letter, like `onClick`)
- Direct references to browser globals (`window`, `document`, `navigator`, `localStorage`, `sessionStorage`, `history`, `location`)
- SSR-unsafe functions that internally use browser APIs (e.g. `canUseDOM()`, `makeStyles()`, `makeResetStyles()`, `makeStaticStyles()`)

If at least one feature is present, the directive must be the very first statement in the file. If no features are found, any existing `'use client'` directive will be reported as unnecessary and auto-fixed.

#### ❌ Don't (missing directive)

```ts
import * as React from 'react';

export function MyComponent() {
  const [value, setValue] = React.useState('');
  return <button onClick={() => setValue('clicked')}>{value}</button>;
}
```

#### ✅ Do (directive present)

```ts
'use client';
import * as React from 'react';

export function MyComponent() {
  const [value, setValue] = React.useState('');
  return <button onClick={() => setValue('clicked')}>{value}</button>;
}
```

#### ❌ Don't (unnecessary directive)

```ts
'use client';
// Pure utilities – no client-only APIs
export function add(a: number, b: number) {
  return a + b;
}
```

#### ✅ Do (directive removed)

```ts
// Pure utilities – no client-only APIs
export function add(a: number, b: number) {
  return a + b;
}
```

#### ❌ Don't (SSR-unsafe function at module scope)

```ts
import * as React from 'react';
import { canUseDOM } from '../ssr/index';

// canUseDOM() accesses browser APIs internally
export const useIsomorphicLayoutEffect = canUseDOM() ? React.useLayoutEffect : React.useEffect;
```

#### ✅ Do (directive added for SSR-unsafe function)

```ts
'use client';
import * as React from 'react';
import { canUseDOM } from '../ssr/index';

export const useIsomorphicLayoutEffect = canUseDOM() ? React.useLayoutEffect : React.useEffect;
```

#### ❌ Don't (Griffel styling function at module scope)

```ts
import { makeStyles } from '@griffel/react';

export const useStyles = makeStyles({
  root: { backgroundColor: 'red' },
});
```

#### ✅ Do (directive added for Griffel function)

```ts
'use client';
import { makeStyles } from '@griffel/react';

export const useStyles = makeStyles({
  root: { backgroundColor: 'red' },
});
```

No options – enable to enforce consistent usage of the directive.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
