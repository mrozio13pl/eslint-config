'use strict';

module.exports = {
    env: {
        node: true
    },
    extends: [
        './rules/jsdoc',
        './rules/markdown',
        './rules/misc',
        './rules/node',
        './rules/promise',
        './rules/recommended',
        './rules/styles'
    ].map(require.resolve)
};