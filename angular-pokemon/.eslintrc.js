module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/component-selector': ['error', { prefix: 'app', style: 'kebab-case', type: 'element' }],
        '@angular-eslint/directive-selector': ['error', { prefix: 'app', style: 'camelCase', type: 'attribute' }],
        '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'eol-last': 'error',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended', 'plugin:@angular-eslint/template/accessibility'],
      rules: {},
    },
  ],
};
