module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'react-app',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    impliedStrict: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  rules: {
    /* Best Practices */
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any'],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],

    /* ECMAScript 6 */
    'arrow-parens': ['error', 'always'],
    'no-confusing-arrow': 0,
    'arrow-body-style': 0,

    /* Stylistic */
    // indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-underscore-dangle': 0,
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'function-paren-newline': ['error', 'consistent'],
    'space-before-function-paren': 0,

    /* Stylistic TypeScript */
    // "@typescript-eslint/indent": ["error", 2],

    /* Variables */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
      },
    ],

    /* JSX Accessibility */
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: [''],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    /* React */
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // rule is no longer relevant since React 16.3:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1754
    'react/no-did-update-set-state': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'allow-multiline',
        beforeClosing: 'never',
      },
    ],
  },
};
