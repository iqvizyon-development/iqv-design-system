# epic-generator

Workspace Generator for creating a migration tracker issue epic and subsequent team sub-issues on GitHub.

<!-- toc -->

- [Usage](#usage)
  - [Examples](#examples)
- [Options](#options)
  - [`repository`](#repository)
  - [`title`](#title)
  - [`message`](#message)

<!-- tocstop -->

## Usage

```sh
yarn nx g @iqvizyonui/workspace-plugin:epic-generator ...
```

### Examples

Create an epic and sub-issues on the `iqvizyon-development/iqv-design-system` repository with the title `Migrate packages`.

```sh
yarn nx g @iqvizyonui/workspace-plugin:epic-generator --repository="iqvizyon-development/iqv-design-system" --title="Migrate packages"
```

## Options

#### `repository`

Type: `string`
Default: "iqvizyon-development/iqv-design-system"

Full name of the GitHub repository to create the issues on.

#### `title`

Type: `string`

Title of the epic issue and sub-issues.

#### `message`

Type: `string`
Default: "\*Description to be added\*"

Description used in the epic issue.
