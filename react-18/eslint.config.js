import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginTanstackQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      '@tanstack/query': pluginTanstackQuery,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginTanstackQuery.configs.recommended.rules,
      ...configPrettier.rules,
      '@typescript-eslint/no-empty-object-type': 'off',
      'import/no-default-export': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
