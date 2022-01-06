
# Testing in next

`Git Hooks Info`

Hooks used running auto tasks and testing git cmds such as pre commit messages, automating other git cmds, etc. Ex. prepare-commit-msg

1. Git hooks are scripts that Git executes before or after events such
2. as: commit, push, and receive.
3. Current Git hooks config in vscode settings and Git Supercharged ext

`Aside`: you can change temp dir before cmd git init or git clone using:

```bash
git init --template=/path/to/your/templates/directory/
git clone https://github.com/bahim22/last-nxt-ded.git --template=/path/to/your/templates/directory/
```

## Husky

___
`Note`:(lire the livre et ecrive avant d'utiliser)`Note`

1. Improves Git hooks and commits
2. `husky install` tells Git to use .husky/ as the Git hooks Dir.
3. `husky add` makes a standalone shell script w/ a  wrapper to support additional feat.

```bash
npx husky-init && npm install
```

> add git hook by using husky add (may have to use 2nd cmd on W10)
> husky add [filename] [cmd]

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
git add .husky/pre-commit
node node_modules/.bin/husky add
```

> bypass pre-commit and commit-msg hooks using Git -n/--no-verify option
> For Git cmds that don't have --no-verify option, use Husky env. variables

```bash
git commit -m "yolo!" --no-verify
HUSKY=0 git push # yolo!
```

___

### Jest and Cypress Overview

___
`Jest` testing with `.env.test` (or use `cypress` for testing)

```js
// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
```

___
`Cypress`
Usage: helps set up and start writing tests while you build your application locally. After building up a suite of tests and integrating Cypress CI pipeline and using Cypress Dashboard

_Benefits_:

- time travel - snapshots as tests run 2. use dev tools to debug tests 3. auto waits for cmds 4. verify/jcontrol behavior of funcs, server resp 5. network traffic control 6. CI pipeline
  - set up the tests, write tests, run, debug

_Test Types_:

- E2E: end to end tests on code that runs in browser (visits app in chrome and interacts w/ the UI)
- mount components and exe component tests; also create API tests

___
