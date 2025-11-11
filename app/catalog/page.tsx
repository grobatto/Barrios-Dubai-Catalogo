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
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const products = productsData.products as Product[];

  // Get unique sections and categories
  const sections = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.section)));
  }, [products]);

  const categories = useMemo(() => {
    const filteredProducts =
      selectedSection === 'all'
        ? products
        : products.filter((p) => p.section === selectedSection);
    return Array.from(new Set(filteredProducts.map((p) => p.category))).sort();
  }, [products, selectedSection]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Hide products uruguay-001 to uruguay-024
      const productNum = parseInt(product.id.split('-')[1]);
      if (product.id.startsWith('uruguay-') && productNum >= 1 && productNum <= 24) {
        return false;
      }

      const sectionMatch =
        selectedSection === 'all' || product.section === selectedSection;
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory;
      return sectionMatch && categoryMatch;
    });
  }, [products, selectedSection, selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsLightboxOpen(true);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setSelectedCategory('all');
  };

  return (
    <>
      <Navigation />

      <main className="pt-16 bg-white">
        {/* Filters */}
        <FilterBar
          sections={sections}
          categories={categories}
          selectedSection={selectedSection}
          selectedCategory={selectedCategory}
          onSectionChange={handleSectionChange}
          onCategoryChange={setSelectedCategory}
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
