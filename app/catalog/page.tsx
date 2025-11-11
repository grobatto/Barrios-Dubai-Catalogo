'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import MasonryGrid from '@/components/MasonryGrid';
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

      <main className="pt-20 bg-gradient-to-b from-purple-50 via-white to-white">
        {/* Page Header */}
        <section className="section-spacing text-center">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6">
                Our Collection
              </h1>
              <p className="text-lg md:text-xl text-text-secondary">
                Each piece tells a story from the heart of Uruguay
              </p>
              <p className="text-sm text-text-light mt-4">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
              </p>
            </motion.div>
          </div>
        </section>

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
        <MasonryGrid
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
