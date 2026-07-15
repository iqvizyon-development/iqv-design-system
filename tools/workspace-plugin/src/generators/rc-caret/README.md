# rc-caret

Short-lived workspace generator that converts pinned Iqvizyon UI RC dependencies to be caret dependencies

Before:

```json
{
  "dependencies": {
    "@iqvizyonui/react-button": "9.0.0-rc.1"
  }
}
```

After:

```json
{
  "dependencies": {
    "@iqvizyonui/react-button": "^9.0.0-rc.1"
  }
}
```

<!-- toc -->

- [NOTES](#notes)
- [Usage](#usage)
  - [Examples](#examples)
- [Options](#options)
  - [`name`](#name)
  - [`all`](#all)

<!-- tocstop -->

## NOTES

- Can be used on packages that are not v1
- Only converts v9 dependencies that have the rc prerelease tag

## Usage

```sh
yarn nx g @iqvizyonui/workspace-plugin:rc-caret
```

Show what will be generated without writing to disk:

```sh
yarn nx g @iqvizyonui/workspace-plugin:rc-caret --dry-run
```

### Examples

Check `@iqvizyonui/react-components` for pinned rc deps and convert them to carets

```sh
yarn nx g @iqvizyonui/workspace-plugin:rc-caret --name=react-components
```

Check all packages for pinned rc deps and convert them to carets

```sh
yarn nx g @iqvizyonui/workspace-plugin:rc-caret --all
```

## Options

#### `name`

Type: `string`

Project name (without npmScope - e.g. `react-one`)

> NOTE: will trigger CLI prompt if you didn't provide this option

#### `all`

Type: `boolean`

Run batch migration on all v1 packages with the tag `platform:web` in `nx.json`
