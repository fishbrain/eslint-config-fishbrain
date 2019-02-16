module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "jest"],
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-for-in-array": "error",
    "class-methods-use-this": ["error", { "exceptMethods": ["render"] }],
    "consistent-return": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": ["error", "after"],
    "react/prop-types": 0, // No need for prop types with Typescript
  },
  "parserOptions": {
      "project": "./tsconfig.json"
  },
  "env": {
      "browser": true,
      "jest": true
  },
  "settings": {
      "react": {
        "version": "detect"
      }
    }
};