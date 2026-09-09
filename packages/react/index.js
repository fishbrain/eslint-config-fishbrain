/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */

import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import compatPlugin from 'eslint-plugin-compat';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';

import {
  config as baseConfig,
  configWithoutVitest as baseConfigWithoutVitest,
  looseTypes as baseLooseTypes,
  TEST_FILES,
} from '@fishbrain/eslint-config-base';

// eslint-plugin-react-hooks is the React team's plugin and stays the authority
// for hooks rules, so we turn off the @eslint-react rules that duplicate it
// rather than the other way around.
const duplicatedByReactHooks = {
  rules: {
    '@eslint-react/error-boundaries': 'off',
    '@eslint-react/exhaustive-deps': 'off',
    '@eslint-react/purity': 'off',
    '@eslint-react/rules-of-hooks': 'off',
    '@eslint-react/set-state-in-effect': 'off',
    '@eslint-react/set-state-in-render': 'off',
    '@eslint-react/static-components': 'off',
    '@eslint-react/unsupported-syntax': 'off',
    '@eslint-react/use-memo': 'off',
  },
};

const reactConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  eslintReact.configs['recommended-typescript'],
  duplicatedByReactHooks,
  jsxA11yPlugin.flatConfigs.recommended,
  compatPlugin.configs['flat/recommended'],
  {
    files: ['**/**/*.{js,ts,mts,cts,jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },
];

// Scope the testing-library plugin to test files only
const testingConfig = [
  {
    files: TEST_FILES,
    ...testingLibraryPlugin.configs['flat/react'],
  },
];

const customRules = {
  rules: {
    '@eslint-react/dom-no-render-return-value': 'off',
    '@eslint-react/dom-no-unknown-property': 'error',
    '@eslint-react/dom-no-unsafe-target-blank': 'error',
    '@eslint-react/no-missing-component-display-name': 'error',
    '@eslint-react/no-missing-context-display-name': 'error',
    // 'jsx-a11y/label-has-for': 'off', // This is deprecated but in the recommended extension for some reason // TODO: Check if needed
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-onchange': 'off',
    'no-alert': 'error',
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};

export const config = defineConfig(
  ...baseConfig,
  ...reactConfig,
  ...testingConfig,
  customRules,
);

export const configWithoutVitest = defineConfig(
  ...baseConfigWithoutVitest,
  ...reactConfig,
  customRules,
);

export const looseTypes = baseLooseTypes;
