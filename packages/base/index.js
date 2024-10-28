import jestPlugin from 'eslint-plugin-jest';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

const HTTP_CODES = [
  200, 201, 204, 301, 302, 307, 308, 400, 401, 403, 404, 409, 410, 422, 500,
];
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
    curly: ['error', 'all'],
    'max-lines': ['error', { max: 300, skipComments: true }],
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: ALLOWED_NUMBERS },
    ],
    'prettier/prettier': 'error',
    'require-atomic-updates': 'error',
  },
};

const customRulesTypescript = {
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
  },
};

export const configWithoutTypescript = [
  ...baseConfig,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  jestPlugin.configs['flat/recommended'],
  customRules,
];
export const configWithoutJest = tseslint.config(
  ...baseConfig,
  customRules,
  customRulesTypescript,
);
export const config = tseslint.config(
  ...baseConfig,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  jestPlugin.configs['flat/recommended'],
  customRules,
  customRulesTypescript,
);

/* Use this if your project is not well typed yet (e.g. lots of `any` types). Ideally you should not use this, but in some cases it may be necessary. */
export const looseTypes = [
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
];
