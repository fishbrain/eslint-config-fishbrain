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
    'react/no-render-return-value': 'off',
    'react/prop-types': 'off', // No need for prop types with Typescript
    'react/jsx-max-props-per-line': ['warning', { when: 'multiline' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'warn',
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
