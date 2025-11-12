'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';
import ProductLightbox from '@/components/ProductLightbox';
import UniquenessMessage from '@/components/UniquenessMessage';
import productsData from '@/data/products.json';
import { Product } from '@/types/product';

export default function CatalogPage() {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const products = productsData.products as Product[];

  // New category system with 10 categories
  const collections = [
    'museumMasterpieces',
    'eggs',
    'metalBases',
    'agates',
    'hearts',
    'cutted',
    'spheres',
    'freeforms',
    'homeDecor'
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // NOTE: Products uruguay-001 through uruguay-024 are intentionally hidden from catalog view
      // These 24 products are reserved/not yet cataloged for public display
      // This filters from 113 total products down to 89 visible products (80 Uruguay + 9 Grand)
      const productNum = parseInt(product.id.split('-')[1]);
      if (product.id.startsWith('uruguay-') && productNum >= 1 && productNum <= 24) {
        return false;
      }

      // All Collections - show everything
      if (selectedCollection === 'all') {
        return true;
      }

      // Museum Masterpieces - products with collection="grand"
      if (selectedCollection === 'museumMasterpieces') {
        return product.collection === 'grand';
      }

      // Category-based filtering - normalize category names for comparison
      const normalizeCategory = (cat: string) => cat.toLowerCase().replace(/\s+/g, '');
      const productCategory = normalizeCategory(product.category);
      const selectedCategory = normalizeCategory(selectedCollection);

      // Map translation keys to actual category values
      const categoryMap: { [key: string]: string } = {
        'eggs': 'eggs',
        'metalbases': 'metalbases',
        'agates': 'agates',
        'hearts': 'hearts',
        'cutted': 'cutted',
        'spheres': 'spheres',
        'freeforms': 'freeforms',
        'homedecor': 'homedecor'
      };

      return productCategory === categoryMap[selectedCategory];
    });
  }, [products, selectedCollection]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <Navigation />

      <main className="pt-16 bg-white">
        {/* Filters */}
        <FilterBar
          collections={collections}
          selectedCollection={selectedCollection}
          onCollectionChange={setSelectedCollection}
        />

        {/* Natural Uniqueness Message */}
        <UniquenessMessage />

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          onProductClick={handleProductClick}
        />
      </main>

      <Footer />

      <ProductLightbox
        product={selectedProduct}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
