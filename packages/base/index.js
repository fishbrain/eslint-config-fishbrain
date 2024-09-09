import jestPlugin from 'eslint-plugin-jest';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
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

const baseConfig = [
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
  { plugins: { prettier: prettierPlugin } },
];

const customRules = {
  rules: {
    '@typescript-eslint/no-empty-function': 'off', // Noop functions are a common pattern we use during testing, so we don't want to enable it.
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: true,
        allowNumber: true,
      },
    ],
    curly: ['error', 'all'],
    'max-lines': ['error', { max: 300, skipComments: true }],
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: ALLOWED_NUMBERS },
    ],
    'prettier/prettier': 'error',
    'require-atomic-updates': 'error',

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
};

export const configWithoutJest = tseslint.config(...baseConfig, customRules);
export const config = tseslint.config(
  ...baseConfig,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  jestPlugin.configs['flat/recommended'],
  customRules,
);

/* Use this if your project is not well typed yet (e.g. lots of `any` types). Ideally you should not use this, but in some cases it may be necessary. */
export const looseTypes = [
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
];
