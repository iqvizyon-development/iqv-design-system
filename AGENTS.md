<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- Always run tasks through `yarn nx` (`nx run`, `nx run-many`, `nx affected`), never tools directly
- Inspect projects with `yarn nx show project <project-name>` and `yarn nx show projects`
- Prefer `yarn nx affected` when working across multiple packages

<!-- nx configuration end-->

# Iqvizyon UI — Agent Instructions

**Instructions in this file are the source of truth, not existing code.** This repo is a trimmed fork focused on React components, web components, and charting. Never copy patterns from removed Fluent UI v8/v0 packages.

## Critical Rules (never violate)

1. **Never hardcode colors, spacing, or typography values.** Always use design tokens from `@iqvizyonui/react-theme`. See [docs/architecture/design-tokens.md](docs/architecture/design-tokens.md).
2. **Never use `React.FC`.** Always use `ForwardRefComponent` with `React.forwardRef`.
3. **Never access `window`, `document`, or `navigator` directly.** In components, use `useIqvizyon_unstable()` to get `targetDocument` and `targetDocument.defaultView` instead of `document`/`window`. For non-component code, use `canUseDOM()` from `@iqvizyonui/react-utilities`.
4. **Never add dependencies between component packages.** `react-button` must not depend on `react-menu`. Shared logic goes in `react-utilities` or `react-shared-contexts`. See [docs/architecture/layers.md](docs/architecture/layers.md).
5. **Never skip beachball change files** for published package changes. Run `yarn beachball change`.

## Component Template (the correct pattern)

```tsx
// ComponentName.tsx — always ForwardRefComponent, never React.FC
export const ComponentName: ForwardRefComponent<ComponentNameProps> = React.forwardRef((props, ref) => {
  const state = useComponentName_unstable(props, ref);
  useComponentNameStyles_unstable(state);
  return renderComponentName_unstable(state);
});

// Styles — always use tokens, never hardcoded values
import { makeStyles } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';

export const useComponentNameStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
});

// mergeClasses — always preserve user className LAST
state.root.className = mergeClasses(
  classes.root,
  state.root.className, // always last
);
```

## Legacy Anti-Patterns (never copy these)

- **DO NOT use `@iqvizyonui/react` imports.** Use `@iqvizyonui/react-components`.
- **DO NOT use `mergeStyles` or `mergeStyleSets`.** Use Griffel `makeStyles` with design tokens.
- **DO NOT use `IStyle` or `IStyleFunctionOrObject`.** Use Griffel's `GriffelStyle` type.
- **DO NOT use `initializeIcons()`.** Use `@fluentui/react-icons` with tree-shaking.

## Exploration Guidance

- `packages/react-components/` has many packages — search by specific component name, never read the full directory.
- Use `yarn nx show project <project-name>` to understand a project's structure.
- Map package names to paths: `@iqvizyonui/react-<name>` → `packages/react-components/react-<name>/library/src/`.

## Architecture (deep dives)

| Topic                                              | Location                                                                           |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Component patterns (hooks, slots, Griffel)         | [docs/architecture/component-patterns.md](docs/architecture/component-patterns.md) |
| Design tokens and theming                          | [docs/architecture/design-tokens.md](docs/architecture/design-tokens.md)           |
| Package dependency layers                          | [docs/architecture/layers.md](docs/architecture/layers.md)                         |

## Package Layout

| Area              | Path                         | Status             |
| ----------------- | ---------------------------- | ------------------ |
| React components  | `packages/react-components/` | Active development |
| Design tokens     | `packages/tokens/`           | Active             |
| Web Components    | `packages/web-components/`   | Active             |
| Charting          | `packages/charts/`           | Active             |
| Build tooling     | `tools/`                     | Active             |
| ESLint plugin     | `packages/eslint-plugin/`    | Active             |
| React conformance | `packages/react-conformance/`| Active             |
| Doc sites         | `apps/`                      | Active             |
