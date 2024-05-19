import fs from 'fs';
import { createCanvas } from "canvas";

export async function textToPNG({font = defaultFont, text, size, file})
{
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
    return new Promise((resolve, reject) => {
        const outputPath = file; // Replace with the desired output path
        const out = fs.createWriteStream(outputPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out)

        out.on('finish', () => {
            resolve();
        });
    
        out.on('error', (error) => {
            console.error(error.message);
            reject(error);
        });
    });
    
}

