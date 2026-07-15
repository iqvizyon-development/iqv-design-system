# migrate-converged-pkg

Workspace Generator for migrating converged packages to new DX (stage 1)[https://github.com/iBz-04/iqvui/issues/18579]

<!-- toc -->

- [NOTES](#notes)
- [Usage](#usage)
  - [Examples](#examples)
- [Options](#options)
  - [`name`](#name)
  - [`all`](#all)
  - [`stats`](#stats)

<!-- tocstop -->

## Usage

```sh
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg ...
```

Show what will be generated without writing to disk:

```sh
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg --dry-run
```

### Examples

Run migration on package named `@iqvizyonui/example`

```sh
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg --name='@iqvizyonui/example'
```

Run migration on all v1 packages

```sh
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg --all
```

Get migration stats for how many packages have been migrated yet.

> No actual migration will happen.

```sh
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg --stats
```

## Options

#### `name`

Type: `string`

Package/library name (needs to be full name of the package, scope included - e.g. `@iqvizyonui/<package-name>`)

> NOTE: will trigger CLI prompt if you didn't provide this option

**Run migration on subset of packages:**

To run migration on multiple packages you can specify a comma separated list of project names.

```sh
# run migration on:
# - @iqvizyonui/lib-zero
# - @iqvizyonui/lib-one
# - @iqvizyonui/lib-two
yarn nx g @iqvizyonui/workspace-plugin:migrate-converged-pkg --name='@iqvizyonui/lib-zero,@iqvizyonui/lib-one,@iqvizyonui/lib-two'
```

#### `owner`

Type: `string`

Add particular team to CODEOWNERS file

#### `all`

Type: `boolean`

Run batch migration on all v1 packages

#### `stats`

Type: `boolean`

Get stats for migration progress.
