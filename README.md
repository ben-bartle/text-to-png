## Script

`create-one-file.js` is a node script that will output PNG files of input text. 

`> node .\create-one-file.js --help` for options.

## Library

`textToPNG` is the core function that takes in text and outputs a PNG file to disc

```
import { textToPNG } from './text-to-png.js';
await textToPNG({
  font: "<font>",
  text: "<text>",
  size: "<size>",
  file: "<file>"
});
```

## Usecase: Canvas Of Kings

`bbe-cok-text.js` is a script that uses the library to generate all of the text that I need to import into a Canvas Of Kings project.
