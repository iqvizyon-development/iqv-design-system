# @iqvizyonui/react-popover Spec

## Background

`Popovers` contain content that is opened after interacting with visible content. The content does not belong to the flow of visible information and is rendered out of DOM order. The content can display complementary information to existing content, or serve as a lightweight Dialog with interactable content.

## Prior Art

- [Open UI research](https://github.com/openui/open-ui/pull/205)
- [Github epic issue #17920](https://github.com/iBz-04/iqvui/issues/17920)

## Sample Code

```tsx
<Popover>
  <PopoverTrigger>
    <button>Opens popover</button>
  </PopoverTrigger>

  <PopoverSurface>
    <h1>Popover</h2>
    <div>Some section</div>
    <div>Some section</div>
  </PopoverSurface>
</Popover>
```

## Variants

- Anchor content to a different target than the trigger
- Inline popover rendered in DOM order
- Open on:
  - Click
  - Hover
  - Context menu (right click)
  - Focus

## API

The `Popover` component will use React context to manage both a trigger and content component.

### Popover

Outer component that sets up context and does not render DOM.

> TODO Discuss: dismiss on scroll ?

> TODO Discuss: A11y -> Should only one popup be open at a time or is aria-hidden enough ?

> TODO Discuss: merge position and align props

The `@iqvizyonui/react-positioning` library that exports the `usePopper` hook which will power the `Popover` contains more than the declared props here. These extra positioning props should be exposed as required.

```typescript
export type PopoverProps = {
  /**
   * Controls the popover open state
   */
  open?: boolean;

  /**
   * Call back when the component requests to change value
   */
  onOpenChange?: (e: OpenPopoverEvents, data: OpenEventData) => void;

  /**
   * Flag to open the Popover by hovering the trigger
   */
  openOnHover?: boolean;

  /**
   * Anchor the popover to an element other than the trigger
   */
  target?: HTMLElement;

  /**
   * Popover position relative to target
   */
  position?: 'above' | 'below' | 'before' | 'after';

  /**
   * Popover alignment relative to target
   */
  align?: 'top' | 'bottom' | 'start' | 'end' | 'center';

  /**
   * Popover offset value or callback with positioning props
   */
  offset?: OffsetFunction | [number, number];

  /**
   * Renders `PopoverSurface` to a portal out of DOM order
   *
   * @default document.body
   */
  mountNode?: string;

  /**
   * Explicitly render the popover in DOM order
   */
  inline?: boolean;

  /**
   * Traps focus inside the popup and applies modal dialog behaviour
   */
  trapFocus?: boolean;

  /**
   * Covers the target that the popover is anchored to. This is the `PopoverTrigger` unless `target` prop is used
   */
  coverTarget?: boolean;

  /**
   * Do not render an arrow pointing to the target element. This is the `PopoverTrigger` unless `target` prop is used
   */
  noArrow?: boolean;

  /**
   * Sets the delay for closing popover on mouse leave
   */
  mouseLeaveDelay?: number;

  /**
   * Close when scrolling outside of it
   */
  closeOnScroll?: boolean;
};
```

### PopoverTrigger

This component does not render DOM. Utility component that clones a single child and applies HTML event callbacks to control the open/dismiss of the popover.

```typescript
export type PopoverTriggerProps = {
  /**
   * Should only be a single child
   */
  children?: React.ReactElement;
};
```

### PopoverSurface

This component renders the positioned HTML element and renders user provided children. Renders as `<div>` by default.

```typescript
export type PopoverSurfaceProps = {
  children?: React.ReactNode;
};
```

## Structure

Default popover

```tsx
<div id="container">
  <Popover>
    <PopoverTrigger>
      <button>Trigger</button>
    </PopoverTrigger>

    <PopoverSurface>
      {children}
    </PopoverSurface>
  </Popover>
<div>

// Expected Markup
<div id="container">
  <button aria-expanded="false">Trigger</button>
</div>

// on document.body
<div role="group">
  {/** content */}
</div>
```

Popover that traps focus

```tsx
<div id="container">
  <Popover trapFocus>
    <PopoverTrigger>
      <button>Trigger</button>
    </PopoverTrigger>

    <PopoverSurface>
      {children}
    </PopoverSurface>
  </Popover>
<div>

// Expected Markup
<div id="container">
  <button aria-expanded="false">Trigger</button>
</div>

// on document.body
<div role="dialog" aria-modal="true">
  {/** content */}
</div>
```

Inline popover

```tsx
<div id="container">
  <Popover inline>
    <PopoverTrigger>
      <button>Trigger</button>
    </PopoverTrigger>

    <PopoverSurface>
      {children}
    </PopoverSurface>
  </Popover>
<div>

// Expected Markup
<div id="container">
  <button aria-expanded="false">Trigger</button>
  <div>
    {/** content */}
  </div>
</div>
```

## Behaviors

### Trigger interactions

A popover should support click, hover, context menu and focus interactions for the `PopoverTrigger`. These interactions should also be composable.

#### Click

Clicking the trigger when the popover is closed opens the popover.

Clicking the trigger when the popover is open closes the popover.

Click also includes `Spacebar` and `Enter` keys.

#### Hover

When the mouse hovers over the trigger the popover opens.

When the mouse leaves the trigger and popover content, the popover closes.

#### Context menu

Right click on the trigger opens the popover. The popover anchors to the mouse position.

Shift + F10 on the trigger opens the popover

### Additional interactions

#### Escape key

The popover closes with the escape key when the trigger or popover content has focus.

#### Click outside

The popover closes when a click happens outside the popover trigger or content.

#### Scroll outside

The context menu popover closes when scroll happens outside the popover trigger or content.
When popover is configured with `closeOnScroll`, popover closes when scroll happens outside the popover trigger or content.

### Focus trap

When the popover is configured to be a focus trap, focus the first focusable element inside the popover on open.

### Nesting

Popovers should allow nesting

## Accessibility

### Existing patterns

The [WAI Dialog pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal) and its variants are the inspirations for `Popover` accessibility.

- [Datepicker](https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/datepicker-dialog.html)
- [Modal Dialog](https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html)

### DOM element usage

Only the `PopoverSurface` component will render DOM markup. By default the components renders an HTML `div` element.

### aria-hidden

Using a Popover with a focus trap is no different from a modal dialog in terms of a11y. Therefore, aria-hidden must be applied to all non-interactive elements of the page when the Popover is open.

This also means that a Popover should be closed when another Popover is opened if they are not nested. In a nested case, the parent Popovers need to be hidden.

### Accessible markup

Accessible markup is divided into two scenarios:

```tsx
// Popover that does not trap focus
<button aria-expanded="false">Trigger</button>
<div role="group">
  No focus trap
</div>

// Popover that does trap focus
<div aria-hidden="true" /> // other content
<div aria-hidden="true" /> // other content
<div aria-hidden="true" className='iui-provider'>
  <button aria-expanded="false">Trigger</button>
</div>

<div role="dialog" aria-modal="true">
  Focus trapped
</div>
```
