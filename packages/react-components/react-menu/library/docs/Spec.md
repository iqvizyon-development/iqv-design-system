# Menu

## Background

### Definition

This spec defines the default function of a `Menu` as an interactive component that displays a list of options that can be represented by a range possible states. Possible variants are defined in [the relevant section](#variants)

The `Menu` should be displayed on a temporary surface that interrupts the normal flow of content. The temporary surface should be triggered by an external user action such as (but not limited to) a click on a button or other UI control.

The interactions that result in the dismiss/removal of the `Menu` component should be configurable.

## Prior art

As a part of the spec definitions in Iqvizyon UI, a research effort has been made through [Open UI](https://open-ui.org/). The current research proposal is available as an open source contribution undergoing review ([research proposal](https://github.com/WICG/open-ui/pull/249))

## Variants

### Nested menus

A `Menu` should be able to trigger an additional instance of itself as a part of one or more of its options. The nested `Menu` component should have the same functional capabilities as the root `Menu` component.

The actions that trigger the the nested `Menu` should be be consistent with the actions that can trigger any root `Menu` from a similar UI control.

We advise that no more than two nested `Menu` components be used, but this spec does not functionally apply that constrain to the implementation of the `Menu` component.

### Selection state

A `Menu` should be able to track and represent the selection state of all or some of its options if required.

When an options is associated with a selection state. The `Menu`, either root or nested, should control its dismiss behavior accordingly based on configuration.

### Sections

A `Menu` can be partitioned into sections using visible dividers in its list of options. Each section can contain a heading title that announces or briefly describes the options in the particular section

### Secondary label

An option of a `Menu` component should be able to declare additional secondary label that can provide additional context describing the option or its usage.

For example a secondary label can be a label that shows a keyboard shortcut that will perform an equivalent action of the option of the `Menu` component.

### Split option with nesting

An option of a `Menu` component can trigger a nested `Menu` component and also perform its default action by splitting the option into two interactable areas that handle each action separately.

### Disabled option(s)

All options in a `Menu` component can be disabled and should provide a visible indication for this purpose. User interaction should be defined for disabled options

### Scrollable

A `Menu` should display a vertical scrollbar when the number of options exceeds the height of the component

### Standalone/No surface

A `Menu` can be used without the temporary popup surface and its trigger. This will allow `Menu` components to be permanent page content or used in custom surfaces with a wider range of UI components.

### Custom content

```
This variant is still a work in progress and needs additional thought
```

Any custom content can be used in the rendering of the Menu, all interactions and accessibility is left to the discretion of the consumer.

## API

The `Menu` should implement a `children` based API as is the standard across all the surveyed alternatives as a part of Open UI research in [Prior Art](#prior-art). The component will leverage the use of `context` in the interaction and data flows of child components.

Sample usages will be give in the following section of this document [Sample code](#sample-code)

### Menu

The root level component serves as a simplified interface (sugar) for popup positioning and triggering.

```typescript
export type MenuProps = MenuListProps &
  Pick<PositioningProps, '<Positioning props as necessary>'> & {
    /**
     * Explicitly require children
     */

    children: React.ReactNode;
    /**
     * Whether the popup is open
     */
    open?: boolean;

    /**
     * Call back when the component requests to change value
     * The `open` value is used as a hint when directly controlling the component
     */
    onOpenChange?: (e: MenuOpenEvents, data: MenuOpenChangeData) => void;

    /**
     * Whether the popup is open by default
     */
    defaultOpen?: boolean;

    /**
     * Wrapper to style and add events for the popup
     */
    menuPopup?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /*
     * Opens the menu on hover
     */
    openOnHover?: boolean;

    /**
     * Opens the menu on right click (context menu), removes all other menu open interactions
     */
    openOnContext?: boolean;

    /**
     * Root menus are rendered out of DOM order on `document.body`, use this to render the menu in DOM order
     * This option is disregarded for submenus
     */
    inline?: boolean;
  };
```

### MenuTrigger

A non-visual component that wraps its child and configures them to be the trigger that will open a menu. This component should only accept one child

```typescript
export type MenuTriggerProps = {
  /**
   * Explicitly require single child
   */
  children: React.ReactElement;
};
```

### MenuList

This component is used internally by `Menu` and manages the context and layout its items.

`MenuList` can also be used separately as the standalone variant of the `Menu`, since it should not control popup positioning or triggers. It is the only component in the API that can be used standalone. Envisioned to be used with more complex popup or trigger scenarios where the `Menu` component does not provide enough control for these situations.

```typescript
export type MenuListProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> & {
    /**
     * Callback when checked items change for value with a name
     *
     * @param name - the name of the value
     * @param checkedItems - the items for this value that are checked
     */
    onCheckedValueChange?: (e: React.MouseEvent | React.KeyboardEvent, name: string, checkedItems: string[]) => void;

    /**
     * Map of all checked values
     */
    checkedValues?: Record<string, string[]>;

    /**
     * Default values to be checked on mount
     */
    defaultCheckedValues?: Record<string, string[]>;

    /**
     * States that menu items can contain icons and reserve slots for item alignment
     */
    hasIcons?: boolean;

    /**
     * States that menu items can contain selectable items and reserve slots for item alignment
     */
    hasCheckmarks?: boolean;
  };
```

### MenuGroup

Creates a group inside a `MenuList`, setting up header layout and dividers between `MenuItems`.

The MenuGroup is also a useful component to declare different selection groups (checkbox/radio) in a `MenuList`.

> This component only accepts native DOM attributes as props.

### MenuGroupHeader

Creates a section header element with appropriate styling. Will set correct `aria-labelledby` relationship if it is instantiated within a [MenuGroup](#menugroup)

> This component only accepts native DOM attributes as props.

### MenuDivider

Creates a divider element in the `MenuList` with correct HTML and aria semantics for divider.

This divider is purely a visual cue. To ensure consistent narration experience across all screenreaders [MenuGroup](#menugroup) should be used

> This component only accepts native DOM attributes as props.

### MenuItem

```typescript
export type MenuItemProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> & {
    /**
     * Icon slot rendered before children content
     */
    icon?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /**
     * A helper slot for alignment when a menu item is used with selectable menuitems
     * Avoid using this slot as a replacement for MenuItemCheckbox and MenuItemRadio components
     */
    checkmark?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /**
     * Icon slot that shows the indicator for a submenu
     */
    submenuIndicator?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /**
     * Component children are placed in this slot
     * Avoid using the `children` property in this slot in favour of Component children whenever possible
     */
    content?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /**
     * Secondary content rendered opposite the primary content (e.g Shortcut text)
     */
    secondaryContent?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;

    /**
     * If the menu item is a trigger for a submenu
     */
    hasSubmenu?: boolean;

    /**
     * Applies disabled styles to menu item but remains focusable
     */
    disabled?: boolean;

    /**
     * Clicking on the menu item will not dismiss an open menu
     */
    persistOnClick?: boolean;
  };
```

### MenuItemCheckbox/Radio

Variants of `MenuItem` that allows a single or multiple selection state based on the value that it represents. API is intended to mirror that of HTML inputs

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

```typescript
/**
 * Props for selecatble menu items
 */
export type MenuItemSelectableProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * Follows input convention
   * https://www.w3schools.com/jsref/prop_checkbox_name.asp
   */
  name: string;

  /**
   * Follows input convention
   * https://www.w3schools.com/jsref/prop_checkbox_value.asp
   */
  value: string;

  /**
   * Whether the selectable item is disabled
   */
  disabled?: boolean;
};

export type MenuItemCheckboxProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> &
  MenuItemProps &
  MenuItemSelectableProps & {
    /**
     * Slot for the checkmark indicator
     */
    checkmark?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;
  };

export type MenuItemRadioProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> &
  MenuItemProps &
  MenuItemSelectableProps & {
    checkmark?: ShorthandProps<React.HTMLAttributes<HTMLElement>>;
  };
```

## Sample code

The below samples do not represent the definitive props of the final implemented component, but represent the ideal final implementations. Can be subject to change during the implementation phase.

### Basic Menu

```tsx
const menu = (
  <Menu>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <MenuItem>Option 2</MenuItem>
      <MenuItem>Option 3</MenuItem>
    </MenuList>
  <Menu>
)
```

```html
<!-- expected DOM output  -->
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="menuitem" tabindex="-1">Option 2</div>
  <div role="menuitem" tabindex="-1">Option 3</div>
</div>
```

### Menu items with icons

```tsx
const menu = (
  <Menu>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem icon={<FileIcon />}>Option 1</MenuItem>
      <MenuItem icon={<BellIcon />}>Option 2</MenuItem>
      <MenuItem icon={<LinkIcon />}>Option 3</MenuItem>
    </MenuList>
  <Menu>
)
```

```html
<!-- expected DOM output  -->
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">
    <span role="presentation"><svg>FileIcon</svg></span>
    Option 1
  </div>
  <div role="menuitem" tabindex="0">
    <span role="presentation"><svg>BellIcon</svg></span>
    Option 2
  </div>
  <div role="menuitem" tabindex="0">
    <span role="presentation"><svg>LinkIcon</svg></span>
    Option 3
  </div>
</div>
```

### Sections

```tsx
const menu = (
  <Menu>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <MenuDivider />
      <MenuGroup title="Section title">
        <MenuItem>Section Option 1</MenuItem>
        <MenuItem>Section Option 2</MenuItem>
        <MenuItem>Section Option 3</MenuItem>
      <MenuGroup />
    </MenuList>
  <Menu>
)
```

```html
<!-- expected DOM output  -->
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="separator" aria-hidden="true"></div>
  <div role="group" aria-labelledby="sectionid">
    <div role="presentation" aria-hidden="true" id="sectionid">Section title</div>
    <div role="menuitem" tabindex="-1">Section Option 1</div>
    <div role="menuitem" tabindex="-1">Section Option 2</div>
    <div role="menuitem" tabindex="-1">Section Option 3</div>
  </div>
  <div role="separator"></div>
</div>
```

Custom section headings can also be used, but must be used within a [MenuGroup](#menugroup) to ensure correct narration experience

```tsx

const menu = (
  <Menu>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <MenuDivider />
      <MenuGroup>
        <MenuGroupHeader>{children}</MenuGroupHeader>
        <MenuItem>Section Option 1</MenuItem>
        <MenuItem>Section Option 2</MenuItem>
        <MenuItem>Section Option 3</MenuItem>
      <MenuGroup />
    </MenuList>
  <Menu>
)
```

```html
<!-- expected DOM output  -->
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="separator" aria-hidden="true"></div>
  <div role="group" aria-labelledby="sectionid">
    <div role="presentation" aria-hidden="true" id="sectionid">children</div>
    <div role="menuitem" tabindex="-1">Section Option 1</div>
    <div role="menuitem" tabindex="-1">Section Option 2</div>
    <div role="menuitem" tabindex="-1">Section Option 3</div>
  </div>
  <div role="separator"></div>
</div>
```

### Submenus

```tsx
const menu = (
  <Menu>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <Menu>
        <MenuTrigger>
          <MenuItem>Open submenu</MenuItem>
        </MenuTrigger>
        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>
    </MenuList>
  <Menu>
)
```

```html
<!-- expected DOM output  -->
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="menuitem" tabindex="-1" aria-haspopup="menu" aria-expanded="false" id="submenu-trigger">Open submenu</div>
</div>

<!-- expected DOM output for submenu  -->
<div role="menu" aria-labelledby="submenu-trigger">
  <div role="menuitem" tabindex="-1">Option 1</div>
  <div role="menuitem" tabindex="-1">Option 2</div>
  <div role="menuitem" tabindex="-1">Option 3</div>
</div>
```

### Standlone

```tsx
const [open] = React.useState(false);

const menu = (
  <CustomSurface open={open}>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <MenuItem>Option 2</MenuItem>
      <MenuItem>Option 3</MenuItem>
    <MenuList>
  <CustomSurface>
)
```

```html
<!-- expected DOM output  -->
<div role="menu">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="menuitem" tabindex="-1">Option 2</div>
  <div role="menuitem" tabindex="-1">Option 3</div>
</div>
```

### Selection

```tsx
const trigger = <button> Open menu </button>
const [selectedItems, setSelectedItems] = React.useState([]);

// basic checkbox example
const menuCheckbox = (
  <Menu
    kind="checkbox"
    selectedItems={selectedItems}
    onSelectionChange={setSeelctedItems}
  >
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItemCheckbox name="checkbox1" value={1}>Option 1</MenuItemCheckbox>
      <MenuItemCheckbox name="checkbox1" value={2}>Option 2</MenuItemCheckbox>
      <MenuItemCheckbox name="checkbox2" value={3}>Option 3</MenuItemCheckbox>
    </MenuList>
  <Menu>
)

// leverage MenuGroup for different selection groups
const menuSelectableSections = (
  <Menu
    selectedItems={selectedItems}
    onSelectionChange={setSeelctedItems}
  >
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuGroup title="Checkbox section">
        <MenuItemCheckbox name="checkbox" value={1}>Option 1</MenuItem>
        <MenuItemCheckbox name="checkbox" value={2}>Option 2</MenuItem>
        <MenuItemCheckbox name="checkbox" value={3}>Option 3</MenuItem>
      </MenuGroup>
      <MenuGroup title="Radio section">
        <MenuItemRadio name="radio" value={1}>Option 1</MenuItemRadio>
        <MenuItemRadio name="radio" value={2}>Option 2</MenuItemRadio>
        <MenuItemRadio name="radio" value={3}>Option 3</MenuItemRadio>
      </MenuGroup>
    </MenuList>
  <Menu>
)
```

```html
<button aria-haspopup="menu" aria-expanded="true" id="trigger">Open menu</button>

<!-- expected DOM output for basic checkbox  -->
<div role="menu" aria-labelledby="trigger">
  <div role="menuitemcheckbox" tabindex="0" aria-checked="true">Option 1</div>
  <div role="menuitemcheckbox" tabindex="-1" aria-checked="false">Option 2</div>
  <div role="menuitemcheckbox" tabindex="-1" aria-checked="false">Option 3</div>
</div>

<!-- expected DOM output for different selection groups  -->
<div role="menu" aria-labelledby="trigger">
  <div role="group" aria-label="Checkbox section">
    <div role="presentation" aria-hidden="true">Checkbox section</div>
    <div role="menuitemcheckbox" tabindex="0" aria-checked="true">Option 1</div>
    <div role="menuitemcheckbox" tabindex="-1" aria-checked="false">Option 2</div>
    <div role="menuitemcheckbox" tabindex="-1" aria-checked="false">Option 3</div>
  </div>
  <div role="separator"></div>
  <div role="group" aria-label="Radio section">
    <div role="presentation" aria-hidden="true">Radio section</div>
    <div role="menuitemradio" tabindex="-1" aria-checked="true">Option 1</div>
    <div role="menuitemradio" tabindex="-1" aria-checked="false">Option 2</div>
    <div role="menuitemradio" tabindex="-1" aria-checked="false">Option 3</div>
  </div>
</div>
```

### Split button

```tsx
const trigger = <button> Open menu </button>

// basic checkbox example
const menuSplitbutton= (
  <Menu trigger={trigger}>
    <MenuTrigger><button>Opem menu</button></MenuTrigger>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <Menu>
        <MenuSplitGroup>
          <MenuItem>Main action</MenuItem>
          <MenuTrigger>
            <MenuItem />
          </MenuTrigger>
        </MenuSplitGroup>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
      </Menu>
    <MenuList>
  <Menu>
)
```

```html
<div role="menu" aria-labelledby="trigger">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="menuitem" tabindex="-1" aria-haspopup="menu" aria-expanded="false" id="submenu-trigger">Open submenu</div>
</div>

<!-- expected DOM output  -->
<div role="menu">
  <div role="menuitem" tabindex="0">Option 1</div>
  <div role="group">
    <div role="menuitem" tabindex="-1">content slot</div>
    <div role="menuitem" tabindex="-1" aria-haspopup="menu" aria-expanded="false" id="submenu-trgger">
      <svg>indicator icon</svg>
    </div>
  </div>
</div>

<div role="menu" aria-labelledby="submenu-trigger">
  <div role="menuitem" tabindex="-1">Option 1</div>
  <div role="menuitem" tabindex="-1">Option 2</div>
  <div role="menuitem" tabindex="-1">Option 3</div>
</div>
```

## Behaviors

### Useful references

The below references were used to decide n appropriate keyboard interactions from an a11y perspective.

- https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#
- https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html
- https://www.w3.org/WAI/tutorials/menus/application-menus/

### Mouse/Keyboard interactions

Below is a set of diagrams that tries to illustrates all the interactions menus and nested menus support in an easily understandable way.

> TODO convert these diagrams to excalidraw or smth that is text format
> TODO add extra descriptions to diagrams

<img src="../etc/images/menu-interactions/Slide1.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide2.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide3.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide4.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide5.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide6.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide7.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide8.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide9.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide10.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide11.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide12.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide13.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide14.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide15.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide16.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide17.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide18.PNG" width="700" />

### Split button MenuItem submenu

All of the above Mouse events seen previously should apply to the part of the split button that is intended to open a submenu.

> TODO convert these diagrams to excalidraw or smth that is text format
> TODO add extra descriptions to diagrams

<img src="../etc/images/menu-interactions/Slide19.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide20.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide21.PNG" width="700" />
<img src="../etc/images/menu-interactions/Slide22.PNG" width="700" />

### MenuItem selection

Below are the interactions that should be supported for all menu items that are required to handle a selection state.

In the event that the selection method is a radio, the previous selected item must be unselected.

| Type     | Action | Result | Details                                      |
| -------- | ------ | ------ | -------------------------------------------- |
| Keyboard | Space  | Toggle | Toggle the selection status of the menu item |
| Keyboard | Enter  | Toggle | Toggle the selection status of the menu item |
| Mouse    | Click  | Toggle | Toggle the selection status of the menu item |

#### Linking keyboard navigation and mouse hover

When a user sets focus on menu items using keyboard navigation, and then switches to mouse hover there should be one unique 'active' state for menu items. There should not be two different indicators at this point for hover and focus. Below is a GIF demonstrating this behaviour.

![Linked keyboard and mouse navigation](../etc/images/linked-keyboard-mouse-navigation.gif)

### Positioning

#### Inline vs portal rendering

A menu should be positioned so that it can be rendered either out of order on the DOM (e.g. portal to body) or inline in DOM order.

#### Submenu positioning

Submenu should be placed after the menu item trigger and aligned with the top edge.

Although this should not be recommended, all positioning aspects should be configurable for submenus.

## Accessibiltiy

Accessibility behaviour is built into the spec as much as possible. This section addresses specific issues that don't fit well with the standard definition of the component.

### Creating sections or groups within a menu

⚠️ When using [MenuDivider](#menudivider) without [MenuGroup](#menugroup)

The [MenuDivider](#menudivider) is a purely visual component. The component is only intended to be used as visual 'sugar'. When meaningful partitions [MenuItems](#menuitem) exists, [MenuGroup](#menugroup) should be used to provide the correct experience for narration.

⚠️ When using [MenuSectionHeader](#menudivider)

[MenuGroup](#menugroup) as a parent component ensures that correct `aria-labelledby` relationship is defined between the header and the group.

### Disabled menu items

Disabled menu items should be focusable

### Linking keyboard navigation and mouse hover

This can be difficult to impleemnt correctly without introducing a11y issues. The mouse should only apply focus if it is certain that the user is actively using the mouse on the page. If a menu is opened with keyboard interaction, and contains the mouse cursor by chance focus should not be applied.
