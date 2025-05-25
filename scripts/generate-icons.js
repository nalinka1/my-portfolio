const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'icon.png': 32,
  'apple-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
  
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(__dirname, '../public', filename);
    
    // Generate PNG files
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Generated ${filename}`);
  }
}

generateIcons().catch(console.error); 