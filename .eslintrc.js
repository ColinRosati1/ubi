const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json');
const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'cypress', 'chai-friendly'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', 'index', 'sibling', 'parent'],
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-sort-props': 'warn',
    'react/jsx-filename-extension': 'off',
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    // TODO: ENG-6736 - schedule for removal
    'react/static-property-placement': 'off',
    // TODO: ENG-6738 - schedule for removal
    'react/sort-comp': 'off',
    // TODO: ENG-6739 - schedule for refactor and removal
    'react/state-in-constructor': 'off',
    // TODO: ENG-6741 - schedule for refactor and removal
    'react/no-deprecated': 'off',
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'prettier'],
      rules: Object.assign(typescriptEslintRecommended.rules, typescriptEslintPrettier.rules, {
        'consistent-return': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', ignoreRestSiblings: true },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*stories.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/no-unused-prop-types': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      }),
    },
  ],
};
