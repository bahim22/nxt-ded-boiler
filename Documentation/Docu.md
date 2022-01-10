
# Component Notes

## DATE INFO

```js
import { parseISO } from 'date-fns'

// Convert string '2014-02-11T11:30:30' to date:
var result = parseISO('2014-02-11T11:30:30')
//=> Tue Feb 11 2014 11:30:30

import { format } from 'date-fns'
// Represent 11 February 2014 in middle-endian format:
var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'
```

> `Example` _package.json with prettier, eslint and babel_
  > dependencies (may use some depending on type of project and other dep)

```json
  "scripts": {
    "doctoc": "doctoc README.md && replace \"\\[\\[([\\w/-]+)\\](?:([^\\[\\]]+)\\[([\\w/-]+)\\])?\\]\" \"[\\$1\\$2\\$3]\" README.md",
    "prettier": "prettier --write .",
    "test:lint": "eslint . && prettier --check .",
    "test:lint-verify-fail": "eslint \"test-lint/*.{js,ts,vue}\" --config .eslintrc.base.js --format json",
    "test:lint-rules": "eslint index.js --config test-config/.eslintrc.js --format json",
    "test:deprecated": "eslint-find-rules --deprecated index.js",
    "test:jest": "jest",
    "test": "npm run test:lint && npm run test:jest && npm run test:cli-sanity && npm run test:cli-sanity-warning && npm run build",
    "build": "node scripts/build.js"
  },
  "devDependencies": {
    "@babel/eslint-parser": "7.13.14",
    "@babel/eslint-plugin": "7.13.16",
    "@babel/plugin-syntax-flow": "7.12.13",
    "@babel/plugin-syntax-jsx": "7.12.13",
    "doctoc": "2.0.0",
    "eslint": "7.25.0",
    "eslint-config-google": "0.14.0",
    "eslint-find-rules": "3.6.1",
    "eslint-plugin-babel": "5.3.1",
    "eslint-plugin-flowtype": "5.7.2",
    "eslint-plugin-prettier": "3.4.0",
    "eslint-plugin-react": "7.23.2",
    "eslint-plugin-standard": "4.0.2",
    "eslint-plugin-unicorn": "31.0.0",
    "jest": "26.6.3",
    "prettier": "2.2.1",
    "replace": "1.2.1",
    "rimraf": "3.0.2",
  }
```