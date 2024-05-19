import { textToPNG } from './text-to-png.js';
import { program } from 'commander';

program
  .version('1.0.0')
  .option('-f, --font <value>', 'Font', 'CopperPlate Gothic')
  .option('-t, --text <value>', 'Text', 'Bluebonnet')
  .option('-s, --size <value>', 'Size in Pixels', '40')
  .parse(process.argv);

const { font, text, size } = program.opts();

console.log(`Writing ${text} using ${font}!`);

await textToPNG({font, text, size, file: './output/default.png'});

console.log("File Written");