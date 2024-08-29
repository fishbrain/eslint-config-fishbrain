// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';

const HTTP_CODES = [200, 201, 204, 301, 302, 400, 401, 404, 422, 500];
const HTML_HEADER_LEVELS = [1, 2, 3, 4, 5, 6];
const COMMON_MATH_VALUES = [24, 60, 100];
const COMMON_INDEX_VALUES = [-1, 0, 1];
const ALLOWED_NUMBERS = Array.from(
  new Set(
    COMMON_INDEX_VALUES.concat(
      HTTP_CODES,
      HTML_HEADER_LEVELS,
      COMMON_MATH_VALUES,
    ),
  ),
);

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  jestPlugin.configs['flat/recommended'],
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      // Core rules replaced by Typescript rules
      'no-use-before-define': 'off',
      'consistent-return': 'off', // TypeScript takes care of checking return
      // 'import/no-unresolved': 'off', // Doesn't work properly with TypeScript // TODO:
      'no-extra-parens': 'off',

      // Additional Fishbrain rules
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-ignore': 'off',
      // This rule required so many exceptions that it was getting difficult to maintain. So
      // just name things sensibly :)
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      // Noop functions are a common pattern we use during testing, so we don't want to enable it.
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        { types: 'prefer-import' },
      ],
      '@typescript-eslint/prefer-readonly': 'error',

      // Warns if a type assertion does not change the type of an expression
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      // Enforce includes method over indexOf method
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
      '@typescript-eslint/prefer-includes': 'error',

      // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      curly: ['error', 'all'],

      // 'fp/no-delete': 'error',
      // 'fp/no-let': 'error',
      // 'fp/no-loops': 'error',
      // 'fp/no-mutating-assign': 'error',
      // 'fp/no-mutation': [
      //   'error',
      //   {
      //     allowThis: true,
      //   },
      // ],
      // TODO:
      // 'import/named': 'off', // Redundant when used with Typescript.
      // 'import/no-extraneous-dependencies': [
      //   'error',
      //   {
      //     devDependencies: [
      //       '**/*.test.tsx',
      //       '**/*.test.ts',
      //       '**/testing.tsx',
      //       '**/*.stories.tsx',
      //       '**/*.stories.ts',
      //       '**/setupTests.ts',
      //       '**/webpack.config.{js,ts}', // webpack config
      //       '**/webpack.config.*.{js,ts}', // webpack config
      //     ],
      //   },
      // ],
      // 'import/order': [
      //   'error',
      //   {
      //     'newlines-between': 'always-and-inside-groups',
      //     groups: [
      //       ['builtin', 'external'],
      //       ['internal', 'sibling', 'parent', 'index'],
      //     ],
      //   },
      // ],
      // 'import/prefer-default-export': 'off',
      // // Allow typescript imports, airbnb has disallowed it
      // 'import/extensions': [
      //   'error',
      //   'ignorePackages',
      //   {
      //     js: 'never',
      //     jsx: 'never',
      //     ts: 'never',
      //     tsx: 'never',
      //   },
      // ],
      'max-lines': ['error', { max: 300, skipComments: true }],

      // Disallow Magic Numbers
      // https://eslint.org/docs/rules/no-magic-numbers
      'no-magic-numbers': [
        'error',
        { ignoreArrayIndexes: true, ignore: ALLOWED_NUMBERS },
      ],

      // disallow the use of console
      // https://eslint.org/docs/rules/no-console
      'no-console': 'off',
      'prettier/prettier': 'error',

      // Disallow assignments that can lead to race conditions due to usage of await or yield
      // https://eslint.org/docs/rules/require-atomic-updates
      'require-atomic-updates': 'error',

      // no export from test file
      // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
      // 'jest/no-export': 'error',

      // TODO: Below is the "recommended" rules from eslint-plugin-import
      // analysis/correctness
      // 'import/no-unresolved': 'error', // TODO: dupe
      // 'import/named': 'error', // TODO: dupe
      // 'import/namespace': 'error',
      // 'import/default': 'error',
      // 'import/export': 'error',

      // // red flags (thus, warnings)
      // 'import/no-named-as-default': 'off', // TODO: Should error, but it doesn't work with eslint9 just yet.
      // 'import/no-named-as-default-member': 'off', // TODO: Should error, but it doesn't work with eslint9 just yet.
      // 'import/no-duplicates': 'warn',
    },
  },
);
