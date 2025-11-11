/**
 * Product Migration Script
 * Applies AI-analyzed categories and names to products.json
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔄 Starting product data migration...\n');

// Load files
const productsPath = path.join(__dirname, '../data/products.json');
const analysisPath = path.join(__dirname, '../data/product-analysis-results.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const analysisData = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

// Create a map of product ID to analysis results
const analysisMap = new Map();
analysisData.products.forEach(product => {
  analysisMap.set(product.id, product);
});

// Statistics
let updated = 0;
let unchanged = 0;
const categoryCount = {};

// Update each product
productsData.products = productsData.products.map(product => {
  const analysis = analysisMap.get(product.id);

  if (!analysis) {
    console.log(`⚠️  No analysis found for ${product.id}`);
    unchanged++;
    return product;
  }

  // Track category counts
  const newCategory = analysis.suggestedCategory;
  categoryCount[newCategory] = (categoryCount[newCategory] || 0) + 1;

  // Update product with analyzed data
  const updatedProduct = {
    ...product,
    name: analysis.suggestedName,
    category: analysis.suggestedCategory,
    type: analysis.verifiedStoneType === 'mixed minerals' ? product.type :
          analysis.verifiedStoneType.includes('agate') ? 'agate' :
          'amethyst'
  };

  // Add size if not already present and suggested
  if (!updatedProduct.size && analysis.suggestedSize) {
    updatedProduct.size = analysis.suggestedSize;
  }

  // Add analysis notes to description if product doesn't have a good description
  if (!updatedProduct.description || updatedProduct.description.includes('Beautiful freeform')) {
    updatedProduct.description = analysis.analysisNotes;
  }

  updated++;
  return updatedProduct;
});

// Write updated products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

// Print summary
console.log('✅ Migration complete!\n');
console.log(`📊 Statistics:`);
console.log(`   - Updated: ${updated} products`);
console.log(`   - Unchanged: ${unchanged} products`);
console.log(`   - Total: ${productsData.products.length} products\n`);
console.log(`📁 Category Distribution:`);
Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    console.log(`   - ${category}: ${count} products`);
  });

console.log(`\n💾 Updated file: ${productsPath}`);
console.log(`📋 Backup available: data/products-backup-*.json\n`);
