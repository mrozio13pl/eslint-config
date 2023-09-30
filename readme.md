# @mrozio/eslint-config

ESLint config for my projects and stuff.

## Install

```sh
npm i eslint @mrozio/eslint-config --save-dev
```

## Usage

- `.eslintrc.js`

```js
module.exports = {
    extends: '@mrozio/eslint-config'
};
```

##### With Typescript
- make sure you have typescript installed

```sh
npm i typescript --save-dev
```

- `.eslintrc.js`

```js
module.exports = {
    extends: '@mrozio/eslint-config/typescript',
    parserOptions: {
        // @see https://github.com/typescript-eslint/typescript-eslint/issues/890
        project: './tsconfig.json'
    }
};
```

## License

MIT