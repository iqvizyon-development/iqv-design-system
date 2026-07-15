# @iqvizyonui/react-checkbox Spec

## Background

Checkboxes give people a way to select one or more items from a group, or switch between
two mutually exclusive options (checked or unchecked).

## Prior Art

- Open UI research:
  - Concepts: https://open-ui.org/components/checkbox.research.concepts
  - Findings: https://open-ui.org/components/checkbox.research.findings
  - Proposal: https://open-ui.org/components/checkbox
- Github Epic: https://github.com/iBz-04/iqvui/issues/18454

## Sample Code

```tsx
<Checkbox label="Example Checkbox" />

<Checkbox label={<>Example Checkbox with <a href="https://www.microsoft.com">link</a></>} />

<Checkbox label="Circular Checkbox" circular size="large" />

<Checkbox label="Controlled Checkbox" onChange={onChangeFunction} />

<Checkbox label="Mixed Checkbox" checked="mixed" />

<Checkbox label={{ children: 'Custom Label', style: { color: 'red' }, required: true }} />
```

## Variants

- A Checkbox has two size variants: `medium (default)` and `large`.
- A Checkbox has four appearance variants: `disabled`, `unchecked`, `checked`, and `mixed`.
- A Checkbox has a `circular` variant.

## API

### Checkbox Props

See [Checkbox.types.ts](../src/components/Checkbox/Checkbox.types.ts)

## Structure

### Slots

- `root`: Outermost `<span>` that contains the rest of the slots
- `input`: The HTML `<input type="checkbox">`. This is the **primary** slot: it receives all of the native props passed to the
  Checkbox component. It has opacity 0 and overlaps the entire `root` slot, for hit testing.
- `indicator`: A `<span>` that is the visual representation of the check "box". Its child is the checkmark icon.
- `label`: (optional) The `<label>` describing this checkbox.

### **Public**

```jsx
<Checkbox label="Example Checkbox" />
```

### **Internal**

```tsx
<slots.root {...slotProps.root}>
  <slots.input {...slotProps.input} />
  {state.labelPosition === 'before' && slots.label && <slots.label {...slotProps.label} />}
  <slots.indicator {...slotProps.indicator} />
  {state.labelPosition === 'after' && slots.label && <slots.label {...slotProps.label} />}
</slots.root>
```

### **DOM**

```html
<span class="iui-Checkbox">
  <input type="checkbox" id="checkbox-1" class="iui-Checkbox__input" />
  <span aria-hidden="true" class="iui-Checkbox__indicator">
    <CheckmarkRegular />
  </span>
  <label for="checkbox-1" className="iui-Checkbox__label">Example Checkbox</label>
</span>
```

## Behaviors

- Checkbox inherits all of its mouse and keyboard behaviors from the native `<input type="checkbox">`. It has no special handling of clicks or keypresses for toggling beyond the native control.
- In case of a label having a link or information button, items inside the label may be focused.

## Accessibility

- Aria design pattern: [Checkbox](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox).
- Checkbox uses a standard HTML `<input type="checkbox">` and does not require any additional aria attributes on the input element.
- The checkmark indicator has `aria-hidden="true"`, as it is purely a visual representation of the state of the underlying input.
