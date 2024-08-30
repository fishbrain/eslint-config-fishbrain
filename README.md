# ESLint config for Fishbrain TypeScript React projects

![Base config Version](https://img.shields.io/npm/v/%40fishbrain%2Feslint-config-base?label=%40fishbrain%2Feslint-config-base)
![React config Version](https://img.shields.io/npm/v/%40fishbrain%2Feslint-config-react?label=%40fishbrain%2Feslint-config-react)

## Usage

Install the dependency:

```bash
yarn add -D @fishbrain/eslint-config-base
# Or, for React projects
yarn add -D @fishbrain/eslint-config-react
```

Create a file in the root of your project named `eslint.config.js`, or `eslint.config.mjs` if ESM is not enabled.
Populate it with the following content:

```js
import { config } from '@fishbrain/eslint-config-base';

export default [
  ...config,
];
```

Finally you can run linting with a script in `package.json`. Note that we reference ESLint from `node_modules` directly
as it's installed as a dependency of our config and is not available by calling `eslint`:

```json
{
  "scripts": {
    "lint": "node_modules/.bin/eslint src some_other_dir some_file.js",
  }
}
```

### Overriding rules

Rules can be overriden in a project by editing the `eslint.config.js` file like so:

```js
export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
];
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

## Releasing

1. Run `yarn workspaces foreach -A version <patch|minor|major>`.
2. Merge all changes to `develop`
3. Run `/golive eslint-config-fishbrain` in Slack.
4. Merge the created go live PR.
