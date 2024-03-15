# plop-action-eslint

[![npm version](https://badge.fury.io/js/plop-action-eslint.svg)](https://badge.fury.io/js/plop-action-eslint)
[![GitHub license](https://img.shields.io/github/license/natterstefan/plop-action-eslint.svg)](https://github.com/natterstefan/plop-action-eslint/blob/main/LICENSE)
[![Node CI](https://github.com/natterstefan/plop-action-eslint/actions/workflows/ci.yml/badge.svg)](https://github.com/natterstefan/plop-action-eslint/actions/workflows/ci.yml)

A [Plop](https://github.com/plopjs/plop) action to lint files with
[ESLint](https://eslint.org/) and automatically format with
[Prettier](#prettier-support).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Actions](#actions)
- [Prettier Support](#prettier-support)

## Installation

```sh
npm install plop-action-eslint --save-dev

# or with yarn
yarn add plop-action-eslint -D
```

## Usage

Before you can use `plop-action-eslint`, you have to load it into the `plop`
object by adding the folling to your `plopfile.js`:

```javascript
// plopfile.js
module.exports = async plop => {
  await plop.load('plop-action-eslint')
}
```

Once loaded, you have access the following actions.

### Actions

#### `eslint`

Lints and fixes (autofix is enabled) the file of the given path with your
projects ESLint configuration.

```javascript
{
  type: "eslint",
  path: "src/component/{{pascalCase name}}.js",
}
```

You can also pass an array of paths.

```javascript
{
  type: "eslint",
  path: [
    "src/component/{{pascalCase name}}.js",
    "src/component/{{pascalCase name}}.test.js",
  ],
}
```

## Prettier Support

In order to automatically format your code with Prettier as well, you have to
use [eslint-config-prettier][1] and [eslint-plugin-prettier][2] in your ESLint
configuration.

## How to release

### Manually trigger release

```bash
# generate a new tag
yarn lerna:version

# generate a new Changelog entry
npx lerna-changelog --from <tag> --to <tag>
# add the result manually to CHANGELOG.md and commit it
git add CHANGELOG.md
git commit -m "chore: prepared release"

# push the tags
git push --tags

# publish the new version
yarn lerna:publish
```

## License

[MIT](./LICENSE)

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://natterstefan.me/"><img src="https://avatars.githubusercontent.com/u/1043668?v=4?s=100" width="100px;" alt="Stefan Natter"/><br /><sub><b>Stefan Natter</b></sub></a><br /><a href="https://github.com/natterstefan/plop-action-eslint/commits?author=natterstefan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vytenis.kuciauskas.lt/"><img src="https://avatars.githubusercontent.com/u/468006?v=4?s=100" width="100px;" alt="Vytenis"/><br /><sub><b>Vytenis</b></sub></a><br /><a href="https://github.com/natterstefan/plop-action-eslint/commits?author=FDiskas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/iholovin"><img src="https://avatars.githubusercontent.com/u/95911872?v=4?s=100" width="100px;" alt="Ivan Holovin"/><br /><sub><b>Ivan Holovin</b></sub></a><br /><a href="https://github.com/natterstefan/plop-action-eslint/commits?author=iholovin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/buggedcom"><img src="https://avatars.githubusercontent.com/u/2810?v=4?s=100" width="100px;" alt="Oliver Lillie"/><br /><sub><b>Oliver Lillie</b></sub></a><br /><a href="https://github.com/natterstefan/plop-action-eslint/commits?author=buggedcom" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## Credits

This plop action is based on the code that was shared in
[plop#80](https://github.com/plopjs/plop/issues/80#issuecomment-645179250) by
[FDiskas](https://github.com/FDiskas).

[1]: https://github.com/prettier/eslint-config-prettier
[2]: https://github.com/prettier/eslint-plugin-prettier
