# react-library

Workspace Generator for bootstrapping a new Iqvizyon UI React library

<!-- toc -->

- [Usage](#usage)
  - [Examples](#examples)
- [Options](#options)
  - [`name`](#name)
  - [`owner`](#owner)
  - [`kind`](#kind)

<!-- tocstop -->

## Usage

```sh
yarn nx g @iqvizyonui/workspace-plugin:react-library --help
```

Show what will be generated without writing to disk:

```sh
yarn nx g @iqvizyonui/workspace-plugin:react-library --dry-run
```

### Examples

```sh
yarn nx g @iqvizyonui/workspace-plugin:react-library
```

## Options

#### `name`

Type: `string`

Library name (without @fluentui scope prefix)

#### `owner`

Type: `string`

Team owning the library. Will be written in CODEOWNERS

#### `kind`

Type: `standard` | `compat`

Iqvizyon UI React library kind: `standard` for new components, or `compat` for compatibility packages.
