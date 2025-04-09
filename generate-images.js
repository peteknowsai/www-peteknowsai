import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, 'public', 'images', 'profile.jpg');
const outputDir = path.join(__dirname, 'public', 'images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImages() {
  try {
    // Generate OG Image (1200x630) as JPG
    await sharp(inputImage)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .toFile(path.join(outputDir, 'og-image.jpg'));
    console.log('✅ Generated og-image.jpg');
    
    // Generate OG Image (1200x630) as PNG for WhatsApp
    await sharp(inputImage)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .png({ quality: 90 })
      .toFile(path.join(outputDir, 'whatsapp.png'));
    console.log('✅ Generated whatsapp.png');

    // Generate Square OG Image (600x600) - sometimes works better with WhatsApp
    await sharp(inputImage)
      .resize(600, 600, { fit: 'cover', position: 'center' })
      .png({ quality: 90 })
      .toFile(path.join(outputDir, 'square-og.png'));
    console.log('✅ Generated square-og.png');

    // Generate Apple Touch Icon (180x180)
    await sharp(inputImage)
      .resize(180, 180, { fit: 'cover', position: 'center' })
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('✅ Generated apple-touch-icon.png');

    // Generate Favicon 32x32
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover', position: 'center' })
      .toFile(path.join(outputDir, 'favicon-32x32.png'));
    console.log('✅ Generated favicon-32x32.png');

    // Generate Favicon 16x16
    await sharp(inputImage)
      .resize(16, 16, { fit: 'cover', position: 'center' })
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
    console.log('✅ Generated favicon-16x16.png');

    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateImages();
