/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */

import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import compatPlugin from 'eslint-plugin-compat';
import globals from 'globals';

import {
  config as baseConfig,
  configWithoutJest as baseConfigWithoutJest,
  looseTypes as baseLooseTypes,
} from '@fishbrain/eslint-config-base';

const reactConfig = [
  {
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
  },
  jsxA11yPlugin.flatConfigs.recommended,
  compatPlugin.configs['flat/recommended'],
];

const customRules = {
  rules: {
    // 'jsx-a11y/label-has-for': 'off', // This is deprecated but in the recommended extension for some reason // TODO: Check if needed
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-onchange': 'off',
    'no-alert': 'error',
    'no-console': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/no-render-return-value': 'off',
    'react/prop-types': 'off', // No need for prop types with Typescript
    'react/react-in-jsx-scope': 'off',

    // TODO: Disabled until https://github.com/facebook/react/issues/28313 is resolved.
    // 'react-hooks/exhaustive-deps': 'error',
    // 'react-hooks/rules-of-hooks': 'error',
  },
};

export const config = tseslint.config(
  ...baseConfig,
  ...reactConfig,
  customRules,
);

export const configWithoutJest = tseslint.config(
  ...baseConfigWithoutJest,
  ...reactConfig,
  customRules,
);

export const looseTypes = baseLooseTypes;
