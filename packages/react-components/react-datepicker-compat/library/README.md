# @iqvizyonui/react-datepicker-compat

**React Datepicker components for [Iqvizyon UI React](https://ibz-04.github.io/iqvui/react/)**

Picking a date can be tough without context. A date picker (DatePicker) offers a popup control that’s optimized for picking a single date from a calendar view where contextual information like the day of the week or fullness of the calendar is important. You can modify the calendar to provide additional context or to limit available dates.

## Usage

To import DatePicker:

```js
import { DatePicker } from '@iqvizyonui/react-datepicker-compat';
```

### Examples

```jsx
<DatePicker />
```

Alternatively, run Storybook locally with:

```sh
yarn workspace @iqvizyonui/react-datepicker-compat start
```

# Compat component

## What makes a compat component?

A compat component keeps its original functionality and most of its original API surface while being built with the v9 toolset and depending only on v9 packages.

## How publishing the package will be handled

Compat components are not added in the `@iqvizyonui/react-components` package suite. Instead, these components should be imported from their respective package as shown above. In contrast with components that live in `@iqvizyonui/react-components`, compat components are to be released as `0.x.x` and there won't be an unstable release (`beta/alpha`) before this release. This is due to the way we will handle versioning for changes, allowing for breaking changes when necessary.

### Versioning for changes

We will take a similar approach as v0 where we will follow this pattern:

- `breaking change (major)`: Since this is a compat component, we will allow breaking changes if absolutely necessary. To accommodate for this, we will denote those changes as a minor version in semver, i.e. `0.(change will be reflected here).x`.
- `minor and patch`: These changes will be reflected in the patch version in semver as `0.x.(change will be reflected here)`.
