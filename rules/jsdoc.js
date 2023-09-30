'use strict';

module.exports = {
    plugins: ['jsdoc'],
    rules: {
        'jsdoc/check-examples': 'off',
        'jsdoc/check-alignment': 1,
        'jsdoc/check-param-names': 1,
        'jsdoc/check-syntax': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/empty-tags': 1,
        'jsdoc/implements-on-classes': 1,
        'jsdoc/multiline-blocks': 1,
        'jsdoc/no-blank-block-descriptions': 1,
        'jsdoc/no-blank-blocks': 1,
        'jsdoc/no-multi-asterisks': 1,
        'jsdoc/no-undefined-types': 1,
        'jsdoc/require-example': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-property-description': 1,
        'jsdoc/require-property-name': 1,
        'jsdoc/require-property': 1,
        'jsdoc/require-returns': 'off',
        'jsdoc/require-throws': 'off',
        'jsdoc/valid-types': 'off'
        // https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules
    }
};