const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '../fotos guzman ayala');
const OUTPUT_DIR = path.join(__dirname, '../public/images/products');
const DATA_FILE = path.join(__dirname, '../data/products.json');

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.heic'];

// Track all products
const products = [];
let productIdCounter = 1;

// Clean and format category name
function cleanCategoryName(name) {
  return name
    .replace(/^Nueva carpeta\s*\(\d+\)$/i, '') // Remove "Nueva carpeta (n)"
    .replace(/^Nueva carpeta$/i, '')
    .trim();
}

// Generate slug from name
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Determine if file is an image
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

// Convert and resize image
async function convertImage(inputPath, outputPath, width = 1200) {
  try {
    await sharp(inputPath)
      .resize(width, width, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return false;
  }
}

// Process a single image
async function processImage(inputPath, relativePath, section, category) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const outputFilename = `${slugify(filename)}.webp`;
  const outputPath = path.join(OUTPUT_DIR, section, category, outputFilename);

  // Ensure output directory exists
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  // Convert image
  const success = await convertImage(inputPath, outputPath);

  if (success) {
    return `/images/products/${section}/${category}/${outputFilename}`;
  }

  return null;
}

// Process a category folder
async function processCategory(categoryPath, section, categoryName) {
  console.log(`  Processing category: ${categoryName}`);

  const items = await fs.readdir(categoryPath, { withFileTypes: true });
  const images = [];

  for (const item of items) {
    const itemPath = path.join(categoryPath, item.name);

    if (item.isFile() && isImageFile(item.name)) {
      const imagePath = await processImage(itemPath, item.name, section, slugify(categoryName));
      if (imagePath) {
        images.push(imagePath);
      }
    } else if (item.isDirectory()) {
      // For "grandes" section, each subfolder is a product
      if (section === 'grandes') {
        const subImages = [];
        const subItems = await fs.readdir(itemPath);

        for (const subItem of subItems) {
          const subItemPath = path.join(itemPath, subItem);
          const stat = await fs.stat(subItemPath);

          if (stat.isFile() && isImageFile(subItem)) {
            const imagePath = await processImage(
              subItemPath,
              subItem,
              section,
              `${slugify(categoryName)}/${slugify(item.name)}`
            );
            if (imagePath) {
              subImages.push(imagePath);
            }
          }
        }

        if (subImages.length > 0) {
          products.push({
            id: `${section}-${String(productIdCounter++).padStart(3, '0')}`,
            name: cleanCategoryName(item.name) || `Grande Piece ${productIdCounter - 1}`,
            category: categoryName,
            section: section,
            images: subImages,
            type: 'amethyst',
            origin: 'Artigas, Uruguay',
            description: 'Premium Uruguayan gemstone',
            characteristics: ['Natural formation', 'Museum quality', 'Handpicked'],
          });
        }
      }
    }
  }

  // For Uruguay section, group images by category
  if (section === 'uruguay' && images.length > 0) {
    // Create products - group multiple images or single images
    const imagesPerProduct = images.length > 10 ? 2 : 1;

    for (let i = 0; i < images.length; i += imagesPerProduct) {
      const productImages = images.slice(i, i + imagesPerProduct);

      products.push({
        id: `${section}-${String(productIdCounter++).padStart(3, '0')}`,
        name: `${categoryName} ${Math.floor(i / imagesPerProduct) + 1}`,
        category: categoryName,
        section: section,
        images: productImages,
        type: categoryName.toLowerCase().includes('agate') ? 'agate' : 'amethyst',
        origin: 'Artigas, Uruguay',
        description: `Beautiful ${categoryName.toLowerCase()} from Uruguay`,
        characteristics: ['Natural formation', 'Premium quality', 'Handpicked'],
      });
    }
  }
}

// Process a section (Uruguay or Grandes)
async function processSection(sectionPath, sectionName) {
  console.log(`\nProcessing section: ${sectionName}`);

  const items = await fs.readdir(sectionPath, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const categoryPath = path.join(sectionPath, item.name);
      await processCategory(categoryPath, sectionName.toLowerCase(), item.name);
    }
  }
}

// Main function
async function main() {
  console.log('Starting image conversion...\n');
  console.log('Source:', SOURCE_DIR);
  console.log('Output:', OUTPUT_DIR);

  try {
    // Check if source directory exists
    await fs.access(SOURCE_DIR);

    // Process Uruguay section
    const uruguayPath = path.join(SOURCE_DIR, 'Uruguay');
    try {
      await fs.access(uruguayPath);
      await processSection(uruguayPath, 'Uruguay');
    } catch (error) {
      console.log('Uruguay folder not found, skipping...');
    }

    // Process Grandes section
    const grandesPath = path.join(SOURCE_DIR, 'grandes/PIEZAS GRANDES');
    try {
      await fs.access(grandesPath);
      await processSection(grandesPath, 'Grandes');
    } catch (error) {
      console.log('Grandes folder not found, skipping...');
    }

    // Save products data
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify({ products }, null, 2),
      'utf-8'
    );

    console.log(`\n✅ Conversion complete!`);
    console.log(`📦 Total products created: ${products.length}`);
    console.log(`📄 Data saved to: ${DATA_FILE}`);

  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

main();
