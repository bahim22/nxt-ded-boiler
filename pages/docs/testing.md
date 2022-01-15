
# Testing in next

___

## Jest and Cypress Overview

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
