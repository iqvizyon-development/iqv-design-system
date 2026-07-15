# @iqvizyonui/react-label Spec

## Background

Labels provide a name or title to a component or group of components, e.g., text fields, checkboxes, radio buttons, and dropdown menus.

## Prior Art

- [open-ui PR](https://github.com/openui/open-ui/pull/348)
- [Label Convergence Epic issue](https://github.com/iBz-04/iqvui/issues/18247)

## Sample Code

The Label component should be simple as shown below. It will just need the text to be rendered. For the required label, it has the option of being a shorthand slot that will allow to customize the label's required text.

```tsx
<Label>Label</Label>

<Label disabled>Label</Label>

<Label required>Label</Label>

<Label required="**">
  Label
</Label>
```

## Variants

- A Label can be rendered with an asterisk or custom text when is set as `required`.

## API

See API at [Label.types.ts](./src/components/Label/Label.types.ts).

## Structure

### Public

```tsx
<Label required>I'm a Label</Label>
```

### DOM

```tsx
<label {/*Label*/} class="...">
  I'm a Label
  <span {/*required*/} class="...">*</span>
</label>
```

### Internal

```tsx
<slots.root {...slotProps.root}>
  {state.children}
  <slots.required {...slotProps.required} />
</slots.root>
```

## Behaviors

### Component States

Label does not have state attributes.

### Interaction

_Keyboard, Cursor, Touch, and Screen Readers_

- None

## Accessibility

- Label will use the native `label` element to render.
- Label cannot receive focus.
- Label will have no focusable elements.
- When a Label is disabled, the required contrast ratio won't be met. This is acceptable behavior due to the nature of the styling. This state should be used sparingly and make it clear that there's no interaction with the control associated with it.
