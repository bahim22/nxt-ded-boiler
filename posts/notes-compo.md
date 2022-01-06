
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

### Sass

Add `SASS/SCSS`

- Run: npm i sass
- Rename all *.css files to*.scss & update change in import statements

### Components with propTypes

 parent component w/ children
  +--------------------------------+
  |            child 1             |
  +--------------------------------+
  |            child 2             |
  +--------------------------------+
  |            child 3             |
  +--------------------------------+
  |            child 4             |
  +--------------------------------+

___
|@param {type} |  var    |    Description |
| ----------- |--------- |--------|
|@param {type}|   [var]  |   Description of optional var.|
|@param {type} |  [var=default]| Descrip of optional var w/ default var.|
|@param {Object}| objectVar  |   Description.|
|@param {type} |  objectVar.key| Desc. of a key in the objectVar param. |
| -------------- |--------------- |---------------|
___
