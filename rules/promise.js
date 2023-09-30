'use strict';

module.exports = {
    plugins: ['promise'],
    rules: {
        'promise/always-return': 'warn',
        'promise/avoid-new': 'off',
        'promise/catch-or-return': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/no-multiple-resolved': 'warn',
        'promise/no-native': 'off',
        'promise/no-nesting': 'off',
        'promise/no-new-statics': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-return-in-finally': 'warn',
        'promise/no-return-wrap': 'warn',
        'promise/param-names': 'warn',
        'promise/prefer-await-to-callbacks': 'off',
        'promise/prefer-await-to-then': 'off',
        'promise/valid-params': 'warn'
    }
};