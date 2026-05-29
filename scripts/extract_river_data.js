const fs = require('fs');
const path = require('path');

try {
    const srcPath = path.join(__dirname, '../src/river-data.js');
    console.log(`Reading configurations from ${srcPath}...`);
    const code = fs.readFileSync(srcPath, 'utf8');

    // Remove the export statement to turn it into a pure JS object literal
    let cleanCode = code.replace(/export\s+const\s+riverConfigs\s*=/, '').trim();
    if (cleanCode.endsWith(';')) {
        cleanCode = cleanCode.substring(0, cleanCode.length - 1).trim();
    }

    // Safely evaluate the object
    const riverConfigs = eval(`(${cleanCode})`);

    const outputPath = path.join(__dirname, 'river_data.json');
    console.log(`Writing clean JSON to ${outputPath}...`);
    fs.writeFileSync(outputPath, JSON.stringify(riverConfigs, null, 2), 'utf8');

    console.log("Successfully extracted river data!");
} catch (error) {
    console.error("Error during data extraction:", error);
    process.exit(1);
}
