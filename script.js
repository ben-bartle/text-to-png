const fs = require('fs');
const { createCanvas } = require('canvas');
const { program } = require('commander');

program
  .version('1.0.0')
  .option('-f, --font <value>', 'Font', 'CopperPlate Gothic')
  .option('-t, --text <value>', 'Text', 'Bluebonnet')
  .option('-s, --size <value>', 'Size in Pixels', '40')
  .parse(process.argv);

const { font, text, size } = program.opts();

console.log(`Writing ${text} using ${font}!`);

// Set canvas dimensions
const canvasWidth = Number(size)*text.length;
const canvasHeight = Number(size)*2;

// Create a canvas
const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext('2d');

// Set font properties
ctx.font = `bold ${size}px ${font}`;

// Draw the text
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(text, canvasWidth/2, canvasHeight/2);

// Save the canvas as a PNG file
const outputPath = './output.png'; // Replace with the desired output path
const out = fs.createWriteStream(outputPath);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log(`PNG file saved at ${outputPath}`);
});