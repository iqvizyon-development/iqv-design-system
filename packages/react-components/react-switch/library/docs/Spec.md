# @iqvizyonui/react-switch Spec

**GitHub Epic issue** - [Switch Convergence #19409](https://github.com/iqvizyon-development/iqv-design-system/issues/19409)

## Background

The `Switch` component introduces a quick way of switching between on/off states by clicking/tapping the thumb.

## Prior Art

### Open UI

The Open UI [Switch Research](https://open-ui.org/components/switch) page shows that the component is used in UI platforms across the web, with the `Switch` moniker being the most prominently used across major component libraries.

## Sample Code

```tsx
<Switch checked />
<Switch checked disabled/>
<Switch checked onChange={onChange}/>
```

https://github.com/iqvizyon-development/iqv-design-system/blob/master/packages/react-checkbox/src/components/Checkbox/Checkbox.types.ts

## API

### Switch Props

See API at [Switch.types.ts](./src/components/Switch/Switch.types.ts).

## Structure

### Slots

- `root` - The outer `<div>` wrapping the `indicator`, `input` and `label` to provide the correct layout styling.
- `indicator` - The track and the thumb sliding over it indicating the on and off status of the Switch.
- `input` - The visually hidden `<input type="checkbox">` that handles the `Switch`'s functionality. This is the **primary** slot: it receives all of the native props passed to the `Switch` component. It has opacity 0 and overlaps the entire `root` slot, for hit testing.
- `label` - (optional) The `<label>` describing this `Switch`.

### Public

```tsx
<Switch checked={true} />
```

### Internal

```tsx
<slots.root {...slotProps.root}>
  <slots.input {...slotProps.input} />
  {labelPosition !== 'after' && slots.label && <slots.label {...slotProps.label} />}
  <slots.indicator {...slotProps.indicator} />
  {labelPosition === 'after' && slots.label && <slots.label {...slotProps.label} />}
</slots.root>
```

### DOM

_With label before the track thumb indicator:_

```tsx
<div class="iui-Switch">
  <input class="iui-Switch__input" id="switch-1" role="switch" type="checkbox" />
  <label class="iui-Switch__label" for="switch-1" />
  <div aria-hidden="true" class="iui-Switch__indicator">
    <CircleFilled />
  </div>
</div>
```

_With label after the track thumb indicator:_

```tsx
<div class="iui-Switch">
  <input class="iui-Switch__input" id="switch-1" role="switch" type="checkbox" />
  <div aria-hidden="true" class="iui-Switch__indicator">
    <CircleFilled />
  </div>
  <label class="iui-Switch__label" for="switch-1" />
</div>
```

## Behaviors

### States

The following section describes the different states in which a `Switch` can be throughout the course of interaction with it.

#### Enabled state

An enabled `Switch` communicates interaction by having styling that invites the user to click/tap on it to toggle between on/off states.

#### Disabled state

A disabled `Switch` is non-interactive, ignoring all events and never updating its value. It does not allow focus and changes its styling to indicates this lack of interaction.

#### Hovered state

A hovered `Switch` changes styling to communicate that the user has placed a cursor above it.

#### Pressed state

A pressed `Switch` changes styling to communicate that the user is currently pressing it.

#### Unchecked state

An unchecked `Switch` has the thumb on the left (right in RTL) and styling to indicate that it is off.

#### Checked state

A checked `Switch` has the thumb on the right (left in RTL) and styling to indicate that it is on.

### Interaction

### Keyboard interaction

The following is a set of keys that interact with the `Switch` component:

| Key     | Description                     |
| ------- | ------------------------------- |
| `Space` | Switches between on/off states. |

### Cursor interaction

- `click`: Triggers a toggle between on and off values. The thumb animates from left to right [off > on] and right to left [on > off] to reflect this change (the directions are reversed in RTL).

### Touch interaction

The same behavior as above is traslated for touch events.

## Accessibility

### Relevant documents

- [WAI-ARIA 1.1 Spec](https://www.w3.org/TR/wai-aria-1.1/#switch)
- [WAI-ARIA 1.2 Spec](https://www.w3.org/TR/wai-aria-1.2/#switch)
- [WAI-ARIA 1.2 Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#switch)

### Expected behavior

- Switch uses a standard HTML `<input type="checkbox">` with `role="switch"` set and does not require any additional handling for aria on the input element.
- The track and thumb indicator has `aria-hidden="true"` as it is a purely visual representation of the state of the underlying input.
