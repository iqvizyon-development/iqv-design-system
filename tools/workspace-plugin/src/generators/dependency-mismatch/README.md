# dependency-mismatch

Fixes dependency mismatches between Iqvizyon UI packages.

The generator goes through all projects in the workspace and updates Iqvizyon UI package dependencies to the version
in the original package.json.

Before publish:

````json
{
  "name": "@iqvizyonui/react-theme",
  "version": "9.0.1"
}

{
  "name": "@iqvizyonui/react-docsite"
  "dependencies": {
    "@iqvizyonui/react-theme": "^9.0.1"
  }
}

After publish (dependency versions mismatching):
```json
{
  "name": "@iqvizyonui/react-theme",
  "version": "9.0.2"
}

{
  "name": "@iqvizyonui/react-docsite",
  "dependencies": {
    "@iqvizyonui/react-theme": "^9.0.1"
  }
}
````

After running generator:

```json
{
  "name": "@iqvizyonui/react-theme",
  "version": "9.0.2"
}

{
  "name": "@iqvizyonui/react-docsite",
  "dependencies": {
    "@iqvizyonui/react-theme": "^9.0.2"
  }
}
```

<!-- toc -->

- [NOTES](#notes)
- [Usage](#usage)
  - [Examples](#examples)
  <!-- tocstop -->

## Usage

```sh
yarn nx g @iqvizyonui/workspace-plugin:dependency-mismatch
```

Show what will be generated without writing to disk:

```sh
yarn nx g @iqvizyonui/workspace-plugin:dependency-mismatch --dry-run
```

### Examples

```sh
yarn nx g @iqvizyonui/workspace-plugin:dependency-mismatch
```
