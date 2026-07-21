# @iqvizyonui/global-context

**Global Context for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

This package contains a shim for `React.createContext` API that will register the context object to the global
scope (`window` for browsers, `global` for nodejs). This means that contexts will be real singletons.

> ⚠️ The recommended approach is not to use this package and deduplicate affected packages in node_modules

This package is is a workaround when multiple context objects are included into a bundle. This can happen when
there are multiple copies of the same package installed in `node_modules`.

**This package is not intended to be used directly in code, but through [@iqvizyonui/babel-preset-global-context](../babel-preset-global-context/README.md)**
