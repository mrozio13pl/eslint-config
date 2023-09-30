'use strict';

module.exports = {
    env: {
        node: true
    },
    plugins: ['node'],
    rules: {
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-decoder': 'off',
        'node/prefer-global/text-encoder': 'off',
        'node/prefer-global/url-search-params': 'off',
        'node/prefer-global/url': 'off',
        'node/prefer-promises/dns': 'off',
        'node/prefer-promises/fs': 'off',
        'node/exports-style': 'off',
        'node/no-callback-literal': 'off',
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'error',
        'node/no-mixed-requires': 'off',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': 'off',
        'node/no-process-exit': 'off',
        'node/no-restricted-import': 'off',
        'node/no-restricted-require': 'off',
        'node/no-sync': 'off',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
    }
};