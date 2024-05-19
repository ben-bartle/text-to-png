const fs = require('fs');
const { createCanvas, registerFont } = require('canvas');
const { program } = require('commander');

program
  .version('1.0.0')
  .option('-f, --font <value>', 'Font', 'CopperPlate Gothic')
  .option('-t, --text <value>', 'Text', 'Bluebonnet')
  .parse(process.argv);

const { font, text } = program.opts();

console.log(`Writing ${text} using ${font}!`);

// Set canvas dimensions
const canvasWidth = 400;
const canvasHeight = 200;

// Create a canvas
const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext('2d');

// Set font properties
ctx.font = `bold 40px ${font}`;

// Draw the text
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

// Save the canvas as a PNG file
const outputPath = './output.png'; // Replace with the desired output path
const out = fs.createWriteStream(outputPath);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log(`PNG file saved at ${outputPath}`);
});