/**
 * ESLint config for Typescript.
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        './index.js',
        './rules/typescript.js'
    ]
};