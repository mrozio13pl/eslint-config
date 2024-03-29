'use strict';

module.exports = {
    rules: {
        'array-bracket-newline': 'off',
        'array-bracket-spacing': ['warn', 'never', { singleValue: false }],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'error',
        'block-spacing': ['warn', 'always'],
        'comma-spacing': 'warn',
        'comma-style': 'off',
        'computed-property-spacing': ['warn', 'never'],
        'dot-location': ['warn', 'property'],
        'eol-last': 'off',
        'func-call-spacing': ['warn', 'never'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': ['warn', 'beside'],
        indent: ['warn', 4, { SwitchCase: 1 }],
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'max-len': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 1 }],
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'operator-linebreak': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        'semi-spacing': 'error',
        'space-before-blocks': 'warn',
        'space-before-function-paren': 'off',
        'space-in-parens': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'wrap-regex': 'off',
    }
};