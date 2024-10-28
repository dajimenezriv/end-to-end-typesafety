module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'eslint-plugin-unicorn'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: { node: true },
  ignorePatterns: ['.eslintrc.js', 'schema.d.ts'],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-loss-of-precision': 'off',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    // 'import/no-default-export': 'error',
    'eol-last': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: { regex: '^T([A-Z]|$)', match: true },
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        custom: {
          // Name must end in Controller, Module, Service or Middleware
          // We cannot have two uppercase letters in a row. APIError -> ApiError
          // Numbers are allowed
          regex: '^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*(Controller|Module|Service|Middleware|Processor)$',
          match: true,
        },
      },
    ],
  },
};
