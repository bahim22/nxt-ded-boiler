
# Notes for Next App v2.2.0

## Getting Started

___

```bash
npx create-next-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Package and Config Setup

`ESLint Plugin`

`Ruleset`:
✔️ next/google-font-display
> Enforce optional or swap font-display behavior with Google Fonts
✔️ next/google-font-preconnect
> Enforce preconnect usage with Google Fonts
✔️ next/link-passhref
> Enforce passHref prop usage with custom Link components
✔️ next/no-css-tags
> Prevent manual stylesheet tags
✔️ next/no-document-import-in-page
> Disallow importing next/document outside of pages/document.js
✔️ next/no-head-import-in-document
>Disallow importing next/head in pages/document.js
✔️ next/no-html-link-for-pages
>Prohibit HTML anchor links to pages without a Link component
✔️ next/no-img-element
>Prohibit usage of HTML < img> element
✔️ next/no-head-element
>Prohibit usage of HTML < head> element
✔️ next/no-page-custom-font
>Prevent page-only custom fonts
✔️ next/no-sync-scripts
>Forbid synchronous scripts
✔️ next/no-title-in-document-head
>Disallow using < title> with Head from next/document
✔️ next/no-unwanted-polyfillio
>Prevent duplicate polyfills from Polyfill.io
✔️ next/inline-script-id
>Enforce id attribute on next/script components with inline content
✔️ next/no-typos
>Ensure no typos were made declaring Next.js's data fetching function
✔️ next/next-script-for-ga
>Use the Script component to defer loading of the script until necessary.
>By default, Next.js will run ESLint for all files in the pages/, components/, and lib/ directories
  but, you can specify which directories using the dirs option in the eslint config in next.config.js for production builds:

## Packages

- Main Project Dep: `react`,`react-dom`, `next`
- Linting: `eslint`, eslint-config-next (optional: -@next/eslint-plugin-next)
- `prettier`
- `babel`
- `next-seo`

___

### ESLint

```js
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'],
 // Only run ESLint on the 'pages' & 'utils' Dir during prod builds (next build)
  },
   "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off" }
//disable/modify rules of supp plugins (react,react-hooks,next) by using rules property in .eslintrc file
 }
```

Usually only need 1 `.env.local` file, but you can + defaults for dev (`next dev`) or prod `(next start`) environment, by setting defaults in `.env` (all environments), `.env.development` (dev environment), & `.env.production` (prod environment).

___
`Optional` install dep then + to webpack config file
>plugin that uses eslint to find and fix issues in js code

```bash
npm install eslint-webpack-plugin --save-dev
```

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...};
```

___
___

### Prettier

Use  Prettier for formatting and linters for catching bugs

- install dep then add prettier to eslint config
- (can also test for redundant or conflicting rules per file )

```bash
npm install --save-dev eslint-config-prettier
npx eslint-config-prettier pages/index.js
```

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

`eslint plugin prettier`
plugin:prettier/recommended

```bash
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

```json
{
  "extends": ["next", "prettier"]
}
```

"extends": ["prettier"]
>enables the config from eslint-config-prettier, which turns off some ESLint rules that conflict with Prettier.
"plugins": ["prettier"] registers this plugin.
"prettier/prettier": "error" turns on the rule provided by this plugin, which runs Prettier from within ESLint.
"arrow-body-style": "off" and "prefer-arrow-callback": "off"
>turns off two ESLint core rules that cause issues w/ this plugin

### Testing

jest testing with `.env.test`

```js
// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
```

### Sass

Add `SASS/SCSS` support to Next.js project
Run: npm i sass

Rename all *.css files to*.scss

Also, update this change in import statements i.e. import "../styles/globals.scss" , import styles from "../styles/Home.module.scss";
