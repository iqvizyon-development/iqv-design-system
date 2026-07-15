# Portal Spec

## Background

Components that require positioning out of the normal DOM order such as Menu and Tooltip are generally rendered through React portals. This is very useful when the components need to break out of the bounds of a parent component so that the content is not overflowed or covered by another element with zIndex. Portals also support event bubbling in the React tree.

Since our styling system uses css variables that are written onto DOM, we need to ensure that all portals are rendered onto a part of the DOM where the css variables are available.

Portals also need need to include the same dir attribute as the parent react tree, so that RTL/LTR is displayed correctly in the portal and the parent content.

## Prior Art

Open UI research was not done for this component. `Portal` does not actually represent a UI control, but a utility component specific to React that makes the rendering of out of order DOM elements easy from within the React tree.

## Sample Code

`Portal` by default mounts the content to `document.body`. In the event a consumer needs to target a specific mount node for Portal content this should be configurable via prop. Both variants should still be able to access theme and fluent context if available.

```
const customElement = document.createElement('div');

<App> // using IqvizyonProvider of ThemeProvider but not PortalProvider
  <Portal /> // attached to document.body
  <Portal mountNode={customElement} /> // mounted on custom element
</App>
```

`Portal` should be used as a component at any part of the React tree:

```tsx
<ContextProvider>
  <Portal>
    <ContextConsumer /> // should be able to access context
  </Portal>
</ContextProvider>
```

`Portal` should be able to access theme values as css variables:

```tsx
const useStyles = makeStyles({
    portalContent: theme => {...}
})


const styles = useStyles();

<ThemeProvider>
    <Portal>
      <div className={styles.portalContent}>
        Can use all theme CSS variables from the parent ThemeProvider
      </div>
    </Portal>
</ThemeProvider>
```

## Variants

- Mounting the portal on a custom node

## API

### Portal

| Name      | Description                            | Required | Type        | Default value                    |
| --------- | -------------------------------------- | -------- | ----------- | -------------------------------- |
| mountNode | Where the portal is mounted to the DOM | No       | HTMLElement | ProviderContext or document.body |

### Virtual parents

Out of order DOM elements can be problematic when using 'click outside' event listeners since you cannot rely on `element.contains(event.target)` because the `Portal` elements are out of DOM order.

```tsx

const outerButtonRef = React.useRef();
const innerButtonRef = React.useRef();


<Portal>
  <div>
    <button ref={outerButtonRef}> Outer button </button>
    <Portal>
      <div>
        <button ref={innerButtonRef}> Inner button </button>
      </div>
    </Portal>
  </div>
</Portal>

// DOM output
<div>
  <button>Outer button</button>
</div>

<div>
  <button>Inner button</button>
</div>

// Let's add an event listener to 'dismss' the outer portal when clicked outside
// ⚠⚠⚠ This will always be called when clicking on the inner button
document.addEventListener((event) => {
  if (outerButtonRef.current.contains(event.target)) {
    dismissOuterPortal();
  }
})
```

When the above case is not required, using `element.contains` is perfectly fine. But nested cases should still be handled appropriately. We do this using the concept of `virtual parents`

`Portal` will make public 2 utilities that will only be used in cases where the user needs to know if an out of order DOM element will need to be used or not.

- `setVirtualParent` - sets virtual parent
- `elementContains` - similar to `element.contains` but uses the virtual hierarchy as reference

Below shows what a virtual parent is

```tsx
// Setting a virtual parent

const parent document.getElementById('parent')
const child document.getElement.ById('child');

child._virtual.parent = parent;
```

## Structure

```tsx
<IqvizyonProvider>
  <Portal id="portal-1" />
  <Portal id="portal-2" />
</IqvizyonProvider>
```

DOM output:

```tsx
<body>
  <div>
    {/* Virtual parent for portal*/}
    <span aria-hidden />
    {/* Virtual parent for portal*/}
    <span aria-hidden />
  </div>

  <div id="portal-1" class="theme-provider-0">
    {children}
  </div>
  <div id="portal-2" class="theme-provider-0">
    {children}
  </div>
</body>
```

```tsx
<IqvizyonProvider>
  <Portal id="portal-1">
    <Portal id="portal-2" />
  </Portal>
</IqvizyonProvider>
```

DOM output:

```tsx
<body>
  <div>
    {/* Virtual parent for outer portal*/}
    <span aria-hidden></span>
  </div>

  <div id="portal-1" class="theme-provider-0">
    {/* Virtual parent for inner portal*/}
    <span aria-hidden />
    {children}
  </div>
  <div id="portal-2" class="theme-provider-0">
    {children}
  </div>
</body>
```

## Behaviors

### Server Side Rendering (SSR)

The ReactDOM `createPortal` requires a valid DOM node to render. This is problematic when `document` does not actually exist during the server render. Instead during the server render `null` will be used. This is not a big problem for most components that use portals such as popups or dialogs since they must be opened from some kind of trigger element (i.e. button)

However, there are some cases where a `Portal` content will always need to be rendered on the page. Tooltips should always be rendered so that `aria` attributes will refer to actual elements. This is problematic since the Tooltip (or higher order component) needs to be aware of the server render where `null`is rendered and render the actual content on the first client render.

The `Portal` component should handle this SSR case, and should be aware of the server and client renders when calling `ReactDOM.createPortal`.

## Accessibility

This component is considered a utility to render its children to an out of order DOM element. Since the component itself does not render DOM it is up to the consumer to handle the A11y requirements of their portal content.
