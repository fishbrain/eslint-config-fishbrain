const HTTP_CODES = [200, 201, 204, 400, 401, 404, 422, 500];
const ALLOWED_NUMBERS = [-1, 0, 1].concat(HTTP_CODES);

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
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    "no-magic-numbers": [2, { "ignoreArrayIndexes": true, "ignore": ALLOWED_NUMBERS }],
    "no-use-before-define": 0,
    "react/no-render-return-value": 0,
    "react/prop-types": 0, // No need for prop types with Typescript
    
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