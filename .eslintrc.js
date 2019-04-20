const HTTP_CODES = [200, 201, 204, 400, 401, 404, 422, 500];
const HTML_HEADER_LEVELS = [1, 2, 3, 4, 5, 6];
const COMMON_MATH_VALUES = [24, 60, 100];
const ALLOWED_NUMBERS = Array.from(new Set([-1, 0, 1].concat(HTTP_CODES, HTML_HEADER_LEVELS, COMMON_MATH_VALUES)));

module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:compat/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "jest", "jsx-a11y", "fp", "react-hooks"],
  "rules": {
    "class-methods-use-this": 0,
    "@typescript-eslint/camelcase": ['error', { properties: 'never' }],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": [2, "always"],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-use-before-define": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "fp/no-delete": "error",
    "fp/no-let": "error",
    "fp/no-loops": "error",
    "fp/no-mutating-assign": "error",
    "fp/no-mutation": ["error", {
      "allowThis": true
    }],
    "implicit-arrow-linebreak": 0,
    "import/order": ["error", {
      "newlines-between": "always-and-inside-groups",
      "groups": [["builtin", "external"], ["internal", "sibling", "parent", "index"]]
    }],
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-for": 0, // This is deprecated but in the recommended extension for some reason
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/no-onchange": 0,
    "no-magic-numbers": [2, { "ignoreArrayIndexes": true, "ignore": ALLOWED_NUMBERS }],
    "no-use-before-define": 0,
    "react/no-render-return-value": 0,
    "react/prop-types": 0, // No need for prop types with Typescript
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "extraFileExtensions": [".ts", ".tsx"]
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
};