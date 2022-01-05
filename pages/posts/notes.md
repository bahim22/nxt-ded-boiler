
# Notes for Next App v2.2.0

___

## Getting Started

First, run the development server:

```bash
npx create-next-app
npm run dev

```

___

Open [http://localhost:3000](http://localhost:3000)

[API routes](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`.
Files in this directory are treated as [API routes]
___

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Dionysus Era</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

const App = () => (
  <Container className="p-4 bg-dark">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header align-auto">Welcome To HimaLand</h1>
      <ExampleToast>
        <a href="mailto:ibalde222@icloud.com">Send email</a>
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <Button className='bg-dark p-3 mb-4'/>
    </Container>
  </Container>
);
```

___

## Setup for create-next-app

`ESLint Plugin`
ruleset:

`Rule` `Description`
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

-react,react-dom
-linting: eslint, eslint-config-next
    -@next/eslint-plugin-next

- prettier
- babel
- next-seo

- CSS
  - f

### ESLint

```js
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'],
 // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
   "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off" }
    //disable/modify rules provided by the supp plugins (react,react-hooks,next) by using rules property in .eslintrc file
 }
```

In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

Next.js allows you to set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment).

`Optional` install, then add to webpack config file
>This plugin uses eslint to find and fix problems in your JavaScript code

```bash
npm install eslint-webpack-plugin --save-dev
```

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

### Prettier

- install dep then add prettier to eslint config 
- (can also test forredundant or conflicting rules per file )

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

"extends": ["prettier"] enables the config from eslint-config-prettier, which turns off some ESLint rules that conflict with Prettier.
"plugins": ["prettier"] registers this plugin.
"prettier/prettier": "error" turns on the rule provided by this plugin, which runs Prettier from within ESLint.
"arrow-body-style": "off" and "prefer-arrow-callback": "off" turns off two ESLint core rules that unfortunately are problematic with this plugin – see the next section.


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
### css

Add SASS/SCSS support to Next.js project
Run: npm i sass

Rename all *.css files to *.scss

Also, update this change in import statements i.e. import "../styles/globals.scss" , import styles from "../styles/Home.module.scss";

That's all. Start writing css styles in scss syntax
