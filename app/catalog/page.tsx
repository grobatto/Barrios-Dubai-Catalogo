'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';
import ProductLightbox from '@/components/ProductLightbox';
import productsData from '@/data/products.json';
import { Product } from '@/types/product';

export default function CatalogPage() {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const products = productsData.products as Product[];

  // Only show Uruguay and Grand Collection
  const collections = ['uruguay', 'grand'];

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

      // Match by collection for grand, by section for uruguay
      const collectionMatch =
        selectedCollection === 'all' ||
        product.collection === selectedCollection ||
        (selectedCollection === 'uruguay' && product.section === 'uruguay');
      return collectionMatch;
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
