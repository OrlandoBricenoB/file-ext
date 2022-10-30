# File Ext
[![](https://img.shields.io/npm/v/@jo-sword/file-ext.svg?style=flat)](https://www.npmjs.org/package/@jo-sword/file-ext) [![](https://img.shields.io/npm/dm/file-ext.svg)](https://www.npmjs.org/package/@jo-sword/file-ext)
> Receives the extension or mimeType of a filename or path.

Differences to [`path.extname`](https://nodejs.org/api/path.html#path_path_extname_path):

* Treats dotfiles as extension (`.eslintrc` => `eslintrc`)
* Treats extensionless files as extension (`Makefile` => `makefile`)
* Doesn't include the dot in the extension (`package.json` => `json`)
* Returns lowercase by default (`LICENCE` => `licence`)
* Can get mimeType optionally

## Installation
```
$ npm install --save @jo-sword/file-ext
```

## Example
```js
const fileExt = require('@jo-sword/file-ext')

fileExt('assets/dog.png')    //=> 'png'
fileExt('file.zip')          //=> 'zip'
fileExt('.Eslintrc')         //=> 'eslintrc'
fileExt('.tar.gz')           //=> 'gz'

// With mimeType
fileExt('js', { withType: true }) //=> { extName: 'js', type: "application/javascript; charset=utf-8" }
fileExt('gitignore', { withType: true }) //=> { extName: 'gitignore', type: false }

// Or keep case.
fileExt('.Jo-Sword', { keepCase: true }) //=> 'Jo-Sword'
fileExt('INDEX.HTML', { keepCase: true })   //=> 'HTML'
```

## API
### FileExt(filename, options)
- `filename` {string} The file name or path. Required.
- `options` {object} Options object.

#### Options
- `withType` {Boolean} Whether type should be include.   Default: false.
- `keepCase` {Boolean} Whether case should be preserved. Default: false.

© [orlandobricenob](https://github.com/orlandobricenob), distributed under TSC licence