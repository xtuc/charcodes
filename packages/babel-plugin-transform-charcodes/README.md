# babel-plugin-transform-charcodes

> Replace charcodes AOT

## Examples

### Constants

in:
```js
import * as charcodes from "charcodes"

charcodes.space
```

out:
```js
32
```

### Functions

in:
```js
import * as charcodes from "charcodes"

charcodes.isDigit(1)
```

out:
```js
function isDigit(code) {
  return code >= 48 && code <= 57;
}(1)
```

## Installation

```sh
npm install --save-dev babel-plugin-transform-charcodes
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
    "plugins": ["transform-charcodes"]
}
```

### Via CLI

```sh
babel --plugins transform-charcodes script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
    plugins: ["transform-charcodes"]
});
```
