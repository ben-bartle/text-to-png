const fs = require('fs');
const { createCanvas, registerFont } = require('canvas');

// Set the input word and font
const inputWord = 'Hello, World!';
// const fontPath = '/path/to/your/font.ttf'; // Replace with the actual path to your font file

// Set canvas dimensions
const canvasWidth = 400;
const canvasHeight = 200;

// Create a canvas
const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext('2d');

// Load the font
// registerFont(fontPath, { family: 'CustomFont' });

// // Set font properties
// ctx.font = '40px CustomFont';
// ctx.fillStyle = 'white';
// ctx.textAlign = 'center';
// ctx.textBaseline = 'middle';

// Draw the input word
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
ctx.fillText(inputWord, canvasWidth / 2, canvasHeight / 2);

// Save the canvas as a PNG file
const outputPath = './output.png'; // Replace with the desired output path
const out = fs.createWriteStream(outputPath);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log(`PNG file saved at ${outputPath}`);
});