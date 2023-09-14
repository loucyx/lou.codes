# Change log

## 6.2.7

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update `CHANGELOG.md`.

## 6.2.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.2.5

### Patch Changes

-   ⬆️ dependency upgrade.
-   🏗️ update `DayOfMonth` to use `Range` instead of `Exclude<Enumerate`.

## 6.2.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.2.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.2.2

### Patch Changes

-   🐛 fix bug with `ReadOnly`'s tuples (again, I hope this time for good).

## 6.2.1

### Patch Changes

-   🐛 fix bug with `ReadOnly`'s tuples.

## 6.2.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   🏗️ a little bit better `ReadOnly` (again).

## 6.1.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.1.2

### Patch Changes

-   🐛 rollback of `ReadOnly` because I'm not psychologically ready to deal with
    this right now.

## 6.1.1

### Patch Changes

-   🐛 fix bug with `ReadOnly` (I hope).

## 6.1.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   🏗️ a little bit better `ReadOnly`.

## 6.0.7

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.0.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.0.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.0.4

### Patch Changes

-   🔧 update `package.json`'s `prettier` script.

## 6.0.3

### Patch Changes

-   ⬆️ dependency upgrade.
-   🚨 apply linting fixes.

## 6.0.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.0.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 6.0.0

### Major Changes

-   🏗️ Split `Predicate` type into `Predicate` and `Filter`.
-   💥 Update `Comparison` to optionally use `Predicate` or `Filter`.

## 5.1.19

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.18

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.17

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.16

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.15

### Patch Changes

-   ⬆️ dependency upgrade (🤦🏻 I forgot this in the previous version).

## 5.1.14

### Patch Changes

-   🔧 back to `node@>=20` babyyyy!

## 5.1.13

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.12

### Patch Changes

-   🔧 update `engines` to suggest `node@>=19` (something isn't right with
    `node@20` at the moment).

## 5.1.11

### Patch Changes

-   🔧 update `engines` to suggest `node@>=20` and `pnpm@>=8`.

## 5.1.10

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.9

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update `README.md`.

## 5.1.8

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.7

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.5

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 docs are now generated in CI.

## 5.1.4

### Patch Changes

-   🐛 fix wrong exports in `package.json`.
-   🔥 remove `dist` exports in `package.json`.

## 5.1.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 5.1.1

### Patch Changes

-   🏗️ change tuples to be labeled.

## 5.1.0

### Minor Changes

-   ✨ add new `ReadOnlyArguments` type.

## 5.0.4

### Patch Changes

-   🐛 fix missing `ReadOnly` to work properly with tuples.

## 5.0.3

### Patch Changes

-   🎨 improve `Tagger`: `TemplateStringsArray` is already a `ReadOnlyArray`.

## 5.0.2

### Patch Changes

-   🐛 fix missing `package.json` `prepublishOnly` script.

## 5.0.1

### Patch Changes

-   🐛 fix bug `package.json` `exports` and `types` fields.

## 5.0.0

### Major Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `JSONValue` type.
-   🚚 rename `AsynchronousIterable` to `IsomorphicIterable`.
-   🚚 rename `AsynchronousIterableItem` to `IsomorphicIterableItem`.
-   🚚 rename `GenericConstructor` to `Class`.
-   🚚 rename `GenericFunction` to `Function`.
-   🚚 rename `MaybePromise` to `Awaitable`.
-   🚚 rename `ReadOnlyDeep` to `ReadOnly`.
-   🚚 rename `Stringable` to `Strigifiable`.
-   🚚 rename `TypeOfMap` to `TypeOfDictionary`.
-   🔥 remove `Entries` (use `ReadOnlyArray<Entry>` directly).
-   🔥 remove `EntriesOf` (use `ReadOnlyArray<EntryOf<...>>` directly).
-   🔥 remove `KeyOfArray` (use `KeyOf` instead).
-   🔥 remove `NonPrimitive` (use `object` directly).
-   🔥 remove `Not` (use `Exclude` directly).
-   🔥 remove `ReadOnlyDeepArray` (use `ReadOnlyArray` directly).
-   🔥 remove `ReadOnlyDeepRecord` (use `ReadOnlyRecord` directly).
-   ✨ add new `ArrayLike` type, similar to `ArrayLike` from TypeScript, but
    with default `unknown` type.
-   🏗️ rework `Empty`.
-   🏗️ rework `EmptyString`.
-   🏗️ rework `Falsy` (now it includes 💩 `null` and `document.all`).
-   🏗️ rework `ReadOnlyArray` to be deep by default.
-   🏗️ rework `ReadOnlyRecord` to be deep by default.
-   🚚 move `/lib` back to `/src`.
-   📄 update JSDocs with more details about each type.

## 4.1.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.1.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.1.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.1.2

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔥 remove `.editorconfig`.
-   👷 update CI config.
-   🔧 update configs with new `@vangware/configs`.

## 4.1.1

### Patch Changes

-   🏗️ Changed `AsynchronousIterable` to be `ReadOnlyDeep`.
-   🚨 fix linting issues.
-   ✅ add missing tests.
-   ⬆️ dependency upgrade.

## 4.1.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ Add `ReadOnlyDeep`.
-   ✨ Add `ReadOnlyDeepArray`.
-   ✨ Add `ReadOnlyDeepRecord`.

## 4.0.6

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 update configs.

## 4.0.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.0.4

### Patch Changes

-   📝 update README badges.
-   ⬆️ dependency upgrade.

## 4.0.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.0.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.0.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 4.0.0

### Major Changes

-   ✨ Add `DayOfMonth`.
-   ✨ Add `DayOfWeek`.
-   ✨ Add `Enumerate`.
-   ✨ Add `Hours`.
-   ✨ Add `ISODayOfMonth`.
-   ✨ Add `ISOHours`.
-   ✨ Add `ISOMilliseconds`.
-   ✨ Add `ISOMinutes`.
-   ✨ Add `ISOSeconds`.
-   ✨ Add `ISOYear`.
-   ✨ Add `Milliseconds`.
-   ✨ Add `Minutes`.
-   ✨ Add `Month`.
-   ✨ Add `Range`.
-   ✨ Add `Range`.
-   ✨ Add `Seconds`.
-   ⬆️ dependency upgrade.
-   🎨 Improve `Digit`.
-   🎨 Improve `ISODate`.
-   🎨 Improve `Radix`.
-   💥 Rename `ISODay` to `ISODayOfMonth`.

## 3.4.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add `LocaleIdentifier` type for string locale identifiers.

## 3.3.15

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update `CHANGELOG.md` to use emojis instead of aliases.

## 3.3.14

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.13

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.12

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.11

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.10

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 add `"sideEffects": false` to `package.json`.

## 3.3.9

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update docs.

## 3.3.8

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.7

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update docs.

## 3.3.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.3.0

### Minor Changes

-   💩 this is a breaking change, but nobody uses this but me, so whatever.

## 3.2.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `Stringable` type.

## 3.1.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `Radix` type.

## 3.0.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 3.0.3

### Patch Changes

-   🎨 logo update.

## 3.0.2

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update docs.

## 3.0.1

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 update TypeDoc config.
-   📝 update docs.

## 3.0.0

### Major Changes

-   🏗 `TypeOfMap` now includes `null` and uses `NonPrimitive` for `object`.
-   🏗 Update `Primitive` to include `null`.
-   ✨ add new `GenericConstructor` type.
-   ✨ add new `Nullish` type.
-   ✨ add new `Numeric` type.

## 2.6.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ⬆️ add new `NonPrimitive` type.

## 2.5.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.5.1

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 update docs.

## 2.5.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `AsynchronousIterable` type.
-   ✨ add new `AsynchronousIterableItem` type.
-   📝 update docs.

## 2.4.13

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 improved docs.

## 2.4.12

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.11

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.10

### Patch Changes

-   ⬆️ dependency upgrade.
-   🏗 update imports with full path.

## 2.4.9

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.8

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.7

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.5

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 better eslint script config.

## 2.4.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.4.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `GenericFunction` type.

## 2.3.7

### Patch Changes

-   ⬆️ dependency upgrade.
-   ✨ add new `Not` type.
-   ✨ add new `NotEmpty` type.
-   🏗 change `Truthy` to use `Not` internally.

## 2.3.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.3.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.3.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.3.3

### Patch Changes

-   ⬆️ dependency upgrade.
-   ➖ remove unneeded dependencies.

## 2.3.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.3.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.3.0

### Minor Changes

-   ✨ add new `Maybe` type.
-   ⬆️ dependency upgrade.

## 2.2.0

### Minor Changes

-   ✨ add new `MaybePromise` type.
-   ⬆️ dependency upgrade.

## 2.1.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.1.4

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 update `.npmrc`.

## 2.1.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.1.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.1.1

### Patch Changes

-   📝 improved docs (emojis FTW).

## 2.1.0

### Minor Changes

-   ⬆️ dependency upgrade.
-   ✨ add `ReplaceType` type.

## 2.0.6

### Patch Changes

-   ⬆️ dependency upgrade.
-   📝 improved docs.

## 2.0.5

### Patch Changes

-   ✨ add new `Tagger` type for tagged template strings.

## 2.0.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.0.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.0.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.0.1

### Patch Changes

-   ⬆️ dependency upgrade.

## 2.0.0

### Major Changes

-   🚚 Rename `Comparative` to `Comparison`.
-   🚚 Rename `DefaultNever` to `NeverFallback`.
-   🚚 Rename `Init` to `Initial`.
-   🚚 Rename `InitAndLast` to `InitialAndLast`.
-   🚚 Rename `Monuple` to `Single`.
-   ⬆️ dependency upgrade.
-   🚚 move to package type `module`.
-   🚚 move `/src` to `/lib`. No need for compilation when we'll use the TS
    files.

## 1.0.18

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.17

### Patch Changes

-   ⬆️ dependency upgrade.
-   🎨 typedoc update.
-   🚨 update code based on new linting rules.

## 1.0.16

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.15

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.14

### Patch Changes

-   🐛 fix but with light theme in docs.

## 1.0.13

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.12

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.11

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.10

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.9

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.8

### Patch Changes

-   ⬆️ dependency upgrade.
-   ➖ remove `husky` :tada:
-   ➕ add `@arkweid/lefthook`.
-   🏗 change markdown files to use references.
-   🍱 update logo in `README.md`

## 1.0.7

### Patch Changes

-   ⬆️ dependency upgrade.
-   🔧 update `package.json` with more data.
-   ➖ remove unneeded react linting dependencies.

## 1.0.6

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.5

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.4

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.3

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.2

### Patch Changes

-   ⬆️ dependency upgrade.

## 1.0.1

### Patch Changes

-   ⬆️ dependency upgrade.
-   ✨ add `Comparative` type.
