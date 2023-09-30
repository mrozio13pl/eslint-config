'use strict';

module.exports = {
    extends: 'eslint:recommended',
    rules: {
        // problems
        'array-callback-return': 'error',
        'no-constant-binary-expression': 'warn',
        'no-constructor-return': 'warn',
        'no-control-regex': 'warn',
        'no-debugger': 'warn',
        'no-duplicate-imports': 'warn',
        'no-promise-executor-return': 'warn',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-unused-private-class-members': 'warn',
        'no-use-before-define': 'warn',
        'use-isnan': 'warn',
        'valid-typeof': 'error',

        // suggestions
        'accessor-pairs': 'off',
        'arrow-body-style': 'off',
        'block-scoped-var': 'warn',
        'consistent-return': 'error',
        curly: 'off',
        'dot-notation': 'warn',
        eqeqeq: ['error', 'allow-null'],
        'grouped-accessor-pairs': 'warn',
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-else-return': 'warn',
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],
        'no-param-reassign': 'off',
        'no-useless-constructor': 'warn',
        'prefer-const': 'warn',
        'prefer-exponentiation-operator': 'warn',
        'quote-props': ['warn', 'as-needed'],
        'spaced-comment': ['error', 'always'],
        yoda: ['warn', 'never', { exceptRange: true }],
    }
};