// eslint-disable-next-line fp/no-mutation
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:compat/recommended',
    'fishbrain-base',
  ],
  plugins: ['jsx-a11y', 'react-hooks'],
  rules: {
    'jsx-a11y/label-has-for': 'off', // This is deprecated but in the recommended extension for some reason
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-onchange': 'off',
    'no-alert': 'error',
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/no-render-return-value': 'off',
    'react/prop-types': 'off', // No need for prop types with Typescript
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': 0,
    'react/jsx-boolean-value': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: 'function-expression',
      },
    ],
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
