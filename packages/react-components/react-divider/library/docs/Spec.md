# Divider Spec

## Background

A `Divider` is used to visually segment content into groups.

## Prior Art

[Github Epic Convergence Issue #16254](https://github.com/iBz-04/iqvui/issues/16254)

[Github Convergence Issue #15759](https://github.com/iBz-04/iqvui/issues/15759)

[Open UI Component Matrix](https://open-ui.org/analysis/component-matrix)

[Ant Design Divider](https://ant.design/components/divider/)

[Fast Divider](https://explore.fast.design/components/fast-divider)

[Semantic UI Divider](https://semantic-ui.com/elements/divider.html)

## Sample Code

Basic Examples:

```tsx
<Divider />
<Divider vertical />
<Divider>This is a divider with content</Divider>
```

## Variants

### Layout

The `Divider` component has two layout variants:

- The default `Divider` is separates contents by rendering a horizontal line.
- A `Divider` with the `vertical` prop set to true separates contents by rendering a vertical line.

### Inset

A `Divider` with the `inset` prop adds padding to the beginning and end of the component.

### Appearance

The `Divider` component has four appearance variants:

- The default `Divider` is styled with the neutral foreground color from the theme.
- appearance="brand": The `Divider` is styled with the brand color from the theme.
- appearance="strong": The `Divider` is styled with a strong color that emphasizes the visual separation.
- appearance="subtle": The `Divider` is styled with a subtle color to de-emphasize the visual separation.

## API

See API at [Divider.types.tsx](./src/components/Divider/Divider.types.ts).

## HTML Structure

```html
<div>
  <!-- ::before to handle the divider line independent of the divider having content or not -->
  <div>Content</div>
  <!-- ::after to handle the divider line that goes after the content if it has been provided. -->
</div>
```

## Behaviors

This component has no state.

This component has no mouse, touch or keyboard interactions.

Content, if provided, will self-determine its behaviors.

## Accessibility

- The `Divider` component should be assigned a `role="separator"` by default.
- The `Divider` component should be named by its content.
- The `Divider` component should have no other accessibility concerns otherwise. The descendant content in the divider must handle any required accessibility behaviors itself when appropriate.
