// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:sonarjs/recommended',
    'sonarjs',
    'plugin:prettier/recommended',
    // 'plugin:compat/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    'docs',
    'public',
    'dist',
    'build',
    '.browserslistrc',
    '.babelrc.js',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    // extraFileExtensions: ['.vue'],
  },
  settings: {
    // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
    polyfills: [],
  },
  plugins: ['vue', 'eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['self', 'that'], // Allow `const self = this`; `[]` by default
      },
    ],
    'no-bitwise': 'warn',
    'no-plusplus': 'warn',
    'no-underscore-dangle': 'off',
    'no-shadow': 'error',
    'no-invalid-this': 'warn',
    'no-undefined': 'warn',
    // 针对一些需要子类实现的方法，不限制其内部必须要使用this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          '_enter',
          '_update',
          '_exit',
          '_render',
          'destroy',
          'update',
          'render',
          '_bindEvents',
        ],
      },
    ],
    // if 后面必须加{}
    curly: ['error', 'all'],
  },
};
