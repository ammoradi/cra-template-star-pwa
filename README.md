![star-pwa banner](banner.png?raw=true "star-pwa")

## Usage

### npx

```sh
npx create-react-app my-app --template star-pwa
```

## Includes

- [typescript][typescript]
- [axios][axios]
- [redux][redux]
- [redux-thunk][redux-thunk]
- [redux-persist][redux-persist]
- [react-router][reactrouter]
- [styled-components][styled-components]
- [eslint][eslint]
- [prettier][prettier]
- [stylelint][stylelint]

## Features

- Static type checking with typescript
- Redux for app's state management
- Async data fetching with axios and redux thunk
- persisting app data with redux persist
- Routing with react router
- Eslint configuration that's compatible with prettier
- Styling with styled components
- Stylelint configuration that's compatible with styled components
- Pre-commit hooks that runs eslint, prettier and stylelint on your code before commit.
- Provide global theme management system
- Global app loading management
- Provide some basic components
- Configuration for PWA production update handling
- VS Code support

## Note

- please see all project's `.ts` files at first. **there are some comments in code for you**.
- because of **[create react app limitation](https://github.com/facebook/create-react-app/issues/8082)** all of dev dependencies (like eslint, prettier, stylelint, husky and lint-staged packages) added to dependencies. but you can move them to devDependencies manually

## License

Licensed under the MIT license.

<!-- prettier-ignore-start -->
[typescript]: https://www.typescriptlang.org/
[redux]: https://redux.js.org/
[redux-thunk]: https://github.com/reduxjs/redux-thunk
[redux-persist]: https://github.com/rt2zz/redux-persist
[axios]: https://github.com/axios/axios
[reactrouter]: https://reactrouter.com/
[styled-components]: https://styled-components.com/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
[stylelint]: https://github.com/stylelint/stylelint
<!-- prettier-ignore-end -->
