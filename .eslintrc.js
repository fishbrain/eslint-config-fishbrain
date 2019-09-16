// eslint-disable-next-line fp/no-mutation
module.exports = {
  extends: [
    'airbnb',
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
    'no-alert': 0,
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.jsx'] }],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/no-render-return-value': 'off',
    'react/prop-types': 'off', // No need for prop types with Typescript
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
