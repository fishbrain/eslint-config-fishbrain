# ESLint config for Fishbrain TypeScript projects

[![npm version](https://badge.fury.io/js/eslint-config-fishbrain.svg)](https://badge.fury.io/js/eslint-config-fishbrain)
[![Build Status](https://travis-ci.com/fishbrain/tslint-config-fishbrain.svg?branch=master)](https://travis-ci.com/fishbrain/eslint-config-fishbrain)

Rule set based on [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)
with some extra rules for Jest tests from [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest).

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

### Recommended package.json prettier settings

Add this to `package.json` to get correct config for [prettier](https://prettier.io/)

```json
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all"
  }
```
