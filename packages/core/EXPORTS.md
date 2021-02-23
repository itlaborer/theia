# @theia/core re-exports

In order to make application builds more stable `@theia/core` re-exports some common dependencies
for Theia extensions to re-use.

## Usage example

Let's take inversify as an example since you will most likely use this package, you can import this
package by prefixing with `@theia/core/shared/`:

```ts
import { injectable } from '@theia/core/shared/inversify';

@injectable()
export class SomeClass {
    // ...
}
```

## List of re-exported packages

 - `@phosphor/algorithm`
 - `@phosphor/commands`
 - `@phosphor/coreutils`
 - `@phosphor/domutils`
 - `@phosphor/dragdrop`
 - `@phosphor/messaging`
 - `@phosphor/properties`
 - `@phosphor/signaling`
 - `@phosphor/virtualdom`
 - `@phosphor/widgets`
 - `@theia/application-package`
 - `@theia/application-package/lib/environment`
 - `express`
 - `fs-extra`
 - `fuzzy`
 - `inversify`
 - `lodash.debounce`
 - `lodash.throttle`
 - `nsfw`
 - `react`
 - `react-dom`
 - `react-virtualized`
 - `vscode-languageserver-protocol`
 - `vscode-languageserver-types`
 - `vscode-uri`
 - `vscode-ws-jsonrpc`
 - `ws`
 - `yargs`
