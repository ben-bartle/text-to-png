// generates all text for my bluebonnet east map in canvas of kings

import { textToPNG } from './text-to-png.js';

const font = "CopperPlate Gothic";
const size = 100;

const knownText = {
    bbe: {
        text: "Bluebonnet East",
    },
    wilds: {
        text: "The Wilds",
    },
    dewberryfields: {
        text: "Dewberry Fields",  
    },
    pecanBottom: {
        text: "Pecan Bottom",  
    }
};
const knownDistances = [0.03, 0.07, 0.11, 0.14, 0.17, 0.18, 0.53, 0.88];

const knownDistancesText = {};
knownDistances.forEach(distance => { 
    knownDistancesText[`${distance}mi`] =  {
        text: `${distance}mi`
    };
});

const inputs = {
    ...knownText,
    ...knownDistancesText
};
    
var outputPromises = Object.keys(inputs).map(async key => {
    const input = inputs[key];
    const { text } = input;
    const file = `./output/${key}.png`;
    await textToPNG({ text, font, size, file});
    console.log(`${text} written to ${file}`);
});

await Promise.all(outputPromises);

console.log("All files Written");