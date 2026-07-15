# @iqvizyonui/react-input Spec

**Epic issue** - [Input Convergence](https://github.com/iBz-04/iqvui/issues/18131)

## Background

`Input` in its most basic form is a text input field abstracting `<input type="text" />`.

It can also be used to render other text-based input types, such as `password` or `email`, but **is not intended for non-text input types** such as `checkbox` (those are handled in separate components).

In some libraries, the equivalent component also abstracts a `textarea` (multi-line text input) and may have features such as a label and start/end slots built in.

## Prior Art

### In other frameworks

| Framework                        | `<input type="text">`                                                                     | `<textarea>`                                                                                     | Notes                                                                                           |
| -------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Ant Design                       | [`Input`](https://ant.design/components/input/)                                           | `Input.TextArea`                                                                                 | No label. Has both inner and outer prefix/suffix.                                               |
| AtlasKit                         | [`Textfield`](https://atlassian.design/components/textfield)                              | [`Textarea`](https://atlassian.design/components/textarea)                                       | No label                                                                                        |
| Carbon                           | [`TextInput`](https://www.carbondesignsystem.com/components/text-input/usage/)            | `TextArea`                                                                                       | Has label prop                                                                                  |
| Evergreen                        | [`TextInput`](https://evergreen.segment.com/components/text-input)                        | [`Textarea`](https://evergreen.segment.com/components/textarea)                                  | `TextInputField` and `TextareaField` wrappers provide label etc                                 |
| Lightning                        | [`input`](https://www.lightningdesignsystem.com/components/input/)                        | [`textarea`](https://www.lightningdesignsystem.com/components/textarea/)                         | Not a React library                                                                             |
| Material UI React                | [`Input`](https://material-ui.com/components/text-fields/)                                | built in to `TextField`                                                                          | `TextField` is a rollup of functionality: label, appearances, start/end slots, lots of variants |

## Sample Code

See [Structure section](#structure) for the output HTML.

```tsx
<Label htmlFor="input1">Label</Label> // note that the label is not built in
<Input
  className="rootClass"
  input={{ className: 'inputClass' }}
  id="input1"
  value="something"
  onChange={(ev, data) => console.log(data.value)}
  contentBefore={<SearchIcon />}
  contentAfter={<ClearIcon />}
/>
```

## Variants

### Visual variants

Visual variants are as follows:

- `outline` (default): the field has a full outline, with a slightly darker underline on the bottom
- `underline`: the field has an underline on the bottom only
- `filledDarker`: the field has a gray background and no underline/outline
- `filledLighter`: the field has a white background and no underline/outline (for use on top of gray/colored backgrounds)

See the design spec for details on each of these. (Note that the actual colors used will follow the theme; white/gray are just examples from the default theme.)

### Behavior variants

In the future we may implement behavior variants, such as a password field with reveal button, but that will be spec'd if/when we need it. See [Spec-variants.md](./Spec-variants.md) for more details.

## API

In this component, `input` is the primary slot. See notes under [Structure](#structure).

### Main props

All native HTML `<input>` props are supported. Since the `input` slot is primary (more on that later), top-level native props except `className` and `style` will go to the input.

The top-level `ref` prop also points to the `<input>`. This can be used for things like getting the current value or manipulating focus or selection (instead of explicitly exposing an imperative API).

For the full current props, see the types file:
https://github.com/iBz-04/iqvui/blob/master/packages/react-input/src/components/Input/Input.types.ts

```ts
// Simplified version of the props (including only summaries of custom props)
type SimplifiedInputProps = {
  /** Toggle inline display instead of block */
  inline?: boolean;

  /** Controls the colors and borders of the field (default `outline`) */
  appearance?: 'outline' | 'underline' | 'filledDarker' | 'filledLighter';

  /** Size of the input (default `medium`) */
  size?: 'small' | 'medium' | 'large';

  /** Default value (uncontrolled) */
  defaultValue?: string;

  /** Controlled value */
  value?: string;

  /** Called when the user changes the value */
  onChange?: (ev: React.FormEvent<HTMLInputElement>, data: { value: string }) => void;

  /** Allowed values for the native `type` prop */
  type?: 'text' | '...'; // this is an enumeration of all text-like values
};
```

Notes on native prop conflicts/overrides:

- `size` [overlaps with a native prop](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) which sets the width of the field in "number of characters." This isn't ideal, but we're going with it since the native prop isn't very useful in practice, and it was hard to find another reasonable/consistent name for the visual size prop. It's also consistent with the approach used by most other libraries which have a prop for setting the visual size. (If anyone needs the native functionality, we could add an `htmlSize` prop in the future.)
- `value` and `defaultValue` are defined in `InputHTMLAttributes` (from `@types/react`) as `string | ReadonlyArray<string> | number` since the same props interface is used for all input element types. To reflect actual usage, we override the types to only accept strings.
- `onChange` is overridden per the [RFC on event handler arguments](https://github.com/iBz-04/iqvui/blob/master/rfcs/convergence/event-handlers-arguments.md).
- `type` is defined in `@types/react` as `string`, but for `Input`, I'm restricting it to a list of only the text-like values [listed on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types). Making this explicit should help avoid people thinking that Input can handle all the same behaviors as a native `<input>`.

### Slots

Note that the field **does not** include a label, required indicator, description, or error message.

An overview of the slots is as follows. For the current slot types and full docs, see the types file:
https://github.com/iBz-04/iqvui/blob/master/packages/react-input/src/components/Input/Input.types.ts

- `root` (`span`): Wrapper which visually appears to be the input (needed to position `contentBefore` and `contentAfter` relative to the actual `input`)
- `input` (`input`, primary slot): The actual text input element
- `contentBefore` (`span`): Element before the input text, within the input border (most often used for icons)
- `contentAfter` (`span`): Element after the input text, within the input border (most often used for icons)

## Structure

In this component, `input` is the primary slot. Per the [native element props/primary slot RFC](https://github.com/iBz-04/iqvui/blob/master/rfcs/convergence/native-element-props.md), this means that most top-level props will go to `input`, but the top-level `className` and `style` will go to the actual root element.

```tsx
// Out of top-level native props, only `className` and `style` go here
<slots.root {...slotProps.root}>
  <slots.contentBefore {...slotProps.contentBefore} />
  {/* Primary slot. Top-level native props except `className` and `style` go here. */}
  <slots.input {...slotProps.input} />
  <slots.contentAfter {...slotProps.contentAfter} />
</slots.root>
```

Notes on the HTML rendering:

- Using `span` rather than `div` prevents nesting errors if the Input is rendered inline within a `<p>`.
- The root is visually styled as the input (with borders etc) and the `contentBefore`, `contentAfter`, and actual `input` elements are positioned inside it.

This example usage:

```tsx
<Input
  className="rootClass"
  style={{ background: 'red' }}
  input={{ className: 'inputClass', style: { background: 'blue' } }}
  id="input1"
  value="something"
  onChange={(ev, data) => console.log(data.value)}
  contentBefore={<SearchIcon />}
  contentAfter={<ClearIcon />}
/>
```

Gives this HTML:

```html
<span className="rootClass" style="background: red">
  <span><!-- contentBefore here --></span>
  <!-- input: type="text" is applied automatically -->
  <input
    type="text"
    className="inputClass"
    style="background: blue"
    id="input1"
    value="something"
    onChange="(function)"
  />
  <span><!-- contentAfter here --></span>
</span>
```

## Behaviors

Most of the behavior is inherited from the native `<input>` element, and all we add is styling.

The component has the following interactive states:

- Rest
- Hover: change stroke color
- Pressed: apply focus border style as animation
- Focused: currently indicated by a thick brand color stroke on the bottom border only (regardless of whether focus was by keyboard or mouse)

Keyboard, cursor, touch, and screen reader interaction will be handled automatically by the internal `<input>`.

## Accessibility

- Most interaction and screen reader behavior will be handled automatically by the internal `<input type="text">`.
- The `<input>` is visible and shows the placeholder or value text.
- The component doesn't provide a built-in label, so it's important for the user to pass in appropriate attributes such as `id` (associated with a label using `htmlFor`), `aria-label`, or `aria-labelledby`.
- No features in the initial implementation require manipulation of focus, tab order, or key handling.
- Visual states for focus and hover will be applied to `root` rather than the `<input>` itself (which is rendered without a border and only used to show the text), because the `contentBefore` and `contentAfter` slots need to visually appear to be within the input.
