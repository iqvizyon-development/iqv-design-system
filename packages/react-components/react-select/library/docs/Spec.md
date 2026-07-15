# @iqvizyonui/react-select Spec

## Background

The Select component allows users to select one value from a predefined set of values. It does so by providing a styled wrapper around the HTML `<select>` element. This means it inherits the dropdown UI and keyboard functionality from the platform.

Select is a more lightweight, accessible, and less feature-rich alternative to Combobox. It has better mobile support, and better cross-platform screen reader support. Unlike Combobox, it does not provide filtering, multiple selection, or virtualization. Select is recommended over Combobox when the following are true:

- The control is a basic single-select that matches the functionality of a `<select>`
- Native-feeling cross platform UX (particularly on mobile) is a primary concern
- Performance, accessibility, and bundle size are primary concerns

Combobox is recommended if any of the following are needed:

- Filtering or freeform text input
- Virtualization
- Control over styling the dropdown and options
- Multiple selection

## Prior Art

The [Open UI research on Select](https://open-ui.org/components/select.research) combines both the ideas of the proposed Combobox and Select. There is also an [Open UI draft describing the select element](https://open-ui.org/components/select).

## Sample Code

Default/standard Select:

```tsx
<label htmlFor="selectID">Choose a color</label>
<Select id="selectID">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
</Select>
```

Select with grouped options:

```tsx
<label htmlFor="selectID">Choose an animal</label>
<Select id="selectID">
  <optgroup label="Land">
    <option>Cat</option>
    <option>Dog</option>
    <option>Horse</option>
  </optgroup>
  <optgroup label="Water">
    <option>Dolphin</option>
    <option>Seal</option>
    <option>Shark</option>
  </optgroup>
</Select>
```

Select with appearance and size set:

```tsx
<label htmlFor="selectID">Choose a color</label>
<Select id="selectID" appearance="filledDarker" size="small">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
</Select>
```

Disabled Select with second option selected:

```tsx
<label htmlFor="selectID">Choose a color</label>
<Select id="selectID" disabled>
  <option>Red</option>
  <option selected>Green</option>
  <option>Blue</option>
</Select>
```

## Variants

### Size

- Small
- Medium (default)
- Large

### Appearance

- Filled darker
- Filled lighter
- Outline (default)
- Transparent

### Unsupported Select variants

#### Multiple Selection

The Select component does not support multi-select, and does not support the native `multiselect` attribute. Multiple selection is instead provided through the Combobox component. This is because the native `<select multiple>` has poor accessibility and general UX, and we do not recommend using it. Additionally, because the options are not styleable, there is little benefit to using a wrapped `<Select multiple>` over using the native element directly.

#### Size attribute

For similar reasons to `multiple`, the native `size` attribute is not supported out of the box. It also has very limited styling support, and therefore also has little benefit over the native `<select size="N">`. The Listbox (TODO: confirm name) component is an alternative to using the `size` attribute on a `<select>`.

## API

From [Select.types.tsx](https://github.com/iBz-04/iqvui/blob/master/packages/react-select/src/components/Select/Select.types.ts)

### Slots

In this component, `select` is the primary slot. Since `select` is primary, `root` is a separate explicit slot to customize the wrapper.

```ts
export type SelectSlots = {
  /** Root of the component, renders as a `<span>`. */
  root: IntrinsicSlotProps<'span'>;
  /** The actual `<select>` element */
  select: IntrinsicSlotProps<'select'>;
  /** the icon, typically a down arrow */
  icon: IntrinsicSlotProps<'span'>;
};
```

### Children

Children of the `Select` component are rendered as children of the internal `<select>` element. The only children that are supported in practice are the `<optgroup>` and `<option>` elements.

## Structure

- _**Public**_

```tsx
<label htmlFor="selectID">Choose a color</label>
<Select id="selectID" className="my-select-class">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
</Select>
```

- _**DOM**_

```html
<label for="selectID">Choose a color</label>
<span class="my-select-class">
  <select id="selectID">
    <option>Red</option>
    <option>Green</option>
    <option>Blue</option>
  </select>
  <svg><!-- icon --></svg>
</span>
```

## Behaviors and Accessibility

This component makes use of the native `<select>` element, and inherits the native semantics and keyboard interactivity.
