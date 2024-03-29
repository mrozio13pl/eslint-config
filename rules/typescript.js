'use strict';

module.exports = {
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-meaningless-void-operator': 'warn',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-mixed-enums': 'warn',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
        '@typescript-eslint/unified-signatures': ['warn', { ignoreDifferentlyNamedParameters: true }]
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': 'typescript',
    },
};