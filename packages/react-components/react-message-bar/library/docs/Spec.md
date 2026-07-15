# @iqvizyonui/react-message-bar-preview Spec

## Background

MessageBar communicates important information about the state of the entire application or surface. For example, the status of a page, panel, dialog or card. The information shouldn't require someone to take immediate action, but should persist until the user performs one of the required actions.

## Prior Art

- [Convergence epic](https://github.com/iBz-04/iqvui/issues/22579)

## Sample Code

```tsx
<MessageBar>
  <MessageBarBody>
    <MessageBarTitle>Descriptive title</MessageBarTitle>
    Message providing information to the user with actionable insights. <Link>Link</Link>
  </MessageBarBody>
  <MessageBarActions
    containerAction={<Button aria-label="dismiss" appearance="transparent" icon={<DismissRegular />} />}
  >
    <Button>Action</Button>
    <Button>Action</Button>
  </MessageBarActions>
</MessageBar>
```

## Variants

### Single line

### Multi line

## API

### MessageBar

[Link to types](https://github.com/iBz-04/iqvui/blob/master/packages/react-components/react-message-bar/src/components/MessageBar/MessageBar.types.ts)

### MessageBarTitle

[Link to types](https://github.com/iBz-04/iqvui/blob/master/packages/react-components/react-message-bar/src/components/MessageBarTitle/MessageBarTitle.types.ts)

### MessageBarBody

[Link to types](https://github.com/iBz-04/iqvui/blob/master/packages/react-components/react-message-bar/src/components/MessageBarBody/MessageBarBody.types.ts)

### MessageBarActions

[Link to types](https://github.com/iBz-04/iqvui/blob/master/packages/react-components/react-message-bar/src/components/MessageBarActions/MessageBarActions.types.ts)

## Structure

```html
<div role="group" aria-labelledby="iui-5" class="iui-MessageBar">
  <div class="iui-MessageBar__icon"></div>
  <div class="iui-MessageBarBody">
    <span id="iui-5" class="iui-MessageBarTitle">Descriptive title</span>Message providing information to the user with
    actionable insights.
    <a>Link</a>
  </div>
  <div class="iui-MessageBarActions">
    <button>Action</button>
    <button>Action</button>
  </div>
  <div class="iui-MessageBarActions__containerAction" aria-label="Close">X</div>
</div>
```

## Behaviors

### Reflow

Once the text content in the message bar wraps around to a second line, the layout of the entire component should change.
The layout should more resemble a Dialog, where the additional actions are on the bottom right of the container and the
single container action to dismiss the MessageBar is on the top right.

In the single line layout, The additional actions should render inline but before the container action to dismiss the
MessageBar.

## Accessibility

The entire MessageBar should have the `role="group"` attribute set to let screen reader users know that the content
within the component is part of one landmark.

The MessageBar content is narrated on mount. The narration is handled by an announcer that is consumed through
React context. The narrated message should include both the MessaegBar content and its actions. The `intent` prop
determines the politeness of the narration.

| Intent  | Politeness |
| ------- | ---------- |
| info    | polite     |
| warning | polite     |
| success | polite     |
| error   | assertive  |
