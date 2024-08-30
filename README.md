# ESLint config for Fishbrain TypeScript React projects

[![npm version](https://badge.fury.io/js/eslint-config-fishbrain.svg)](https://badge.fury.io/js/eslint-config-fishbrain)

Rule set based on [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)
with some extra rules for Jest tests from [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest).

For non-react TypeScript projects, see [eslint-config-fishbrain-base](https://github.com/fishbrain/eslint-config-fishbrain-base)

## Usage

```bash
npm install -D eslint-config-fishbrain
```

In `.eslintrc` (or whatver your ESLint config file is)

```json
{
  "extends": ["eslint-config-fishbrain"]
}
```

### Recommended tsconfig.json settings

In addition to setting target, module, moduleResolution etc,
these strictness settings are recommended.

```json
{
  "compilerOptions": {
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Recommended Prettier settings

Add this to `package.json` to get correct config for [prettier](https://prettier.io/)

```json
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all"
  }
```

### Browser compatibility settings

If you want to target certain browsers you can also set them in `package.json`.

```json
  "browserslist": ["chrome 70", "last 1 versions", "not ie <= 8"]
```

You can also add exceptions for polyfills in `.eslintrc`. See
[eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) for more info.

```json
{
  "settings": {
    "polyfills": [
      // Example of marking entire API and all methods and properties as polyfilled
      "Promise",
      // Example of marking specific method of an API as polyfilled
      "WebAssembly.compile",
      // Example of API with no property (i.e. a function)
      "fetch",
      // Example of instance method, must add `.prototype.`
      "Array.prototype.push"
    ]
  }
}
```

## Releasing

1. Run `yarn version <patch|minor|major>`.
2. Merge all changes to `develop`
3. Run `/golive eslint-config-fishbrain` in Slack.
4. Merge the created go live PR.
