'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductLightbox from '@/components/ProductLightbox';
import productsData from '@/data/products.json';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get featured products (first 8 from Uruguay section)
  const featuredProducts = productsData.products
    .filter((p: Product) => p.section === 'uruguay')
    .slice(0, 8);

  // Get Grand Collection products (first 4 for homepage)
  const grandCollectionProducts = productsData.products
    .filter((p: Product) => p.collection === 'grand')
    .slice(0, 4);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Introduction Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
                Discover Our Collection
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                Discover our collection of handpicked amethysts and agates from the renowned
                mines of Artigas, Uruguay. Each piece tells a story of natural beauty
                and geological wonder, now available in Dubai.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                As a family business with deep roots in Uruguay, we bring you only
                the finest gemstones, selected with care and expertise passed down
                through generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
                Featured Pieces
              </h2>
              <p className="text-lg text-text-secondary">
                A selection of our finest gemstones
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product: Product, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <Link href="/catalog" className="btn-secondary inline-block">
                View Full Catalog
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Grand Collection Section */}
        <section className="section-spacing bg-gradient-to-b from-amber-50 via-white to-amber-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-accent-gold text-white text-sm font-semibold px-6 py-2 rounded-full mb-6">
                PREMIUM SELECTION
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-6" style={{ color: '#9A7B41' }}>
                The Grand Collection
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Our most exceptional specimens. Museum-quality geodes and statement pieces
                selected for their extraordinary size, clarity, and natural beauty. Perfect for
                luxury spaces and distinguished collections.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {grandCollectionProducts.map((product: Product, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <Link
                href="/catalog"
                className="inline-block px-8 py-4 bg-accent-gold text-white font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300 rounded-sm"
              >
                Explore Grand Collection
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Dubai Section */}
        <section className="section-spacing bg-gradient-to-b from-purple-50 to-white">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
                Now in Dubai
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                We are excited to announce the opening of our new location in Dubai,
                bringing the finest Uruguayan gemstones to the heart of the Middle East.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                Contact us to learn more about our collection and schedule a viewing.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
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
