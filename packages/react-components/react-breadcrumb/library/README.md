# @iqvizyonui/react-breadcrumb

**React Breadcrumb components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page's location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy.

## Usage

To import React Breadcrumb components:

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbProps
} from "@iqvizyonui/react-components';
```

Simple example of Breadcrumb Usage:

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbDivider } from '@iqvizyonui/react-breadcrumb';

export const App = () => (
  <Breadcrumb aria-label="breadcrumb">
    <BreadcrumbItem>Item 1</BreadcrumbItem>
    <BreadcrumbDivider />
    <BreadcrumbItem>Item 2</BreadcrumbItem>
    <BreadcrumbDivider />
    <BreadcrumbItem current={true}>Item 3</BreadcrumbItem>
  </Breadcrumb>
);
```

## Specification


## API

For information about the components, please refer to the [API documentation](https://iqvizyon-development.github.io/iqv-design-system/react/?path=/docs/components-breadcrumb--default).
