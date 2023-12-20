
# RedIcons
[`redicons-cli`](https://www.npmjs.com/package/redicons-cli) allows you to easily manage
[`RedIcons`](https://github.com/iaseth/redicons) in your React projects.

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/timenames/blob/master/README.md.rx).


## Getting Started
This will install the latest version of [`redicons-cli`](https://www.npmjs.com/package/redicons-cli):
```
npm i -g redicons-cli@latest
```
Now, you can run the `redicons` command in your Terminal.


## Usage
Add an icon with the `add` command:
```
redicons add bs-bug
```

Remove an icon with the `remove` command:
```
redicons remove bs-bug
```

Update an existing icon with the `update` command:
```
redicons update bs-bug
```

List all added icons with the `list` command:
```
redicons list
```

Search for an icon with the `search` command:
```
redicons search arrow
```

Show help:
```
redicons help
```

Show version:
```
redicons version
```


## Shortcuts
Every redicon command has a shortcut, usually the first character of the command name.

Some command also have a special character shortcut. All of these are listed in the table below.

| Command | Shortcut | Special Shortcut |
| ------- | -------- | ---------------- |
| add     | a        | +                |
| remove  | r        | -                |
| update  | u        |                  |
| list    | l        | =                |
| search  | s        | ?                |
| help    | h        |                  |
| version | v        |                  |


## Dependencies
This package has no dependencies.


## Dev dependencies
|     | `Package`     | `Version`   |
| --- | ------------- | ----------- |
| 1   | `@types/node` | `^20.10.4`  |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).

