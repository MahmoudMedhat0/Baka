module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'plugin:import/recommended'],
  plugins: ['@typescript-eslint', 'lodash', 'unused-imports'],
  settings: {
    // This is a work around for react-native imports always showing errors,
    // it is an open issue you can track it here // https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
    'lodash/import-scope': ['error', 'full'],
    'max-params': ['error', 3],
    'max-lines': ['error', 200],
    'object-shorthand': 'error',
    'react/jsx-props-no-spreading': ['error', {explicitSpread: 'ignore'}],
    'react/no-unused-prop-types': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'index', 'parent', 'sibling'],
        alphabetize: {order: 'asc', caseInsensitive: true},
        pathGroups: [
          {pattern: 'react*', group: 'builtin'},
          {
            pattern: '@vfgroup-oneplatform/{*,/**}',
            group: 'index',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: 'function', next: '*'},
      {blankLine: 'always', prev: 'expression', next: '*'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {blankLine: 'always', prev: ['case', 'default'], next: '*'},
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      rules: {
        'max-lines': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
