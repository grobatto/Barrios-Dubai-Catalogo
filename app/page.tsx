'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';
import { Product } from '@/types/product';

export default function Home() {
  // Get Grand Collection featured pieces
  const grandProducts = (productsData.products as Product[])
    .filter(p => p.collection === 'grand')
    .slice(0, 3);

  return (
    <>
      <Navigation />
      <main id="main-content">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-gold-50 pt-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="container-custom text-center relative z-10 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium tracking-wider uppercase">
              Est. 1992 • Artigas, Uruguay
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-text-primary"
          >
            BARRIOS AMETHYSTS
            <span className="block text-primary-600 mt-2">CATALOGUE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="text-xl md:text-2xl text-text-secondary font-light tracking-wide mb-3 max-w-3xl mx-auto"
          >
            Museum-Quality Uruguayan Gemstones
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            className="text-base md:text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Your direct source to Uruguayan amethysts. Family business dedicated to extracting, processing and exporting amethysts, agates and citrines from Artigas mines since 1992
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/catalog"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-none hover:bg-primary-700 transition-all duration-300 text-sm tracking-wider uppercase font-medium min-w-[200px]"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-text-primary text-text-primary rounded-none hover:bg-text-primary hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium min-w-[200px]"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-light text-primary-600 mb-2">30+</div>
              <div className="text-xs md:text-sm text-text-light uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center border-x border-border-light">
              <div className="text-3xl md:text-4xl font-serif font-light text-primary-600 mb-2">500+</div>
              <div className="text-xs md:text-sm text-text-light uppercase tracking-wider">Collectors Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-light text-primary-600 mb-2">100%</div>
              <div className="text-xs md:text-sm text-text-light uppercase tracking-wider">Direct from Source</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-text-light"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Grand Collection Preview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Grand Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-text-primary mb-6">
              Museum Masterpieces
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Extraordinary cathedral geodes of exceptional size and quality, curated for luxury hotels, galleries, and prestigious private collections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {grandProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href="/catalog" className="group block">
                  <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-6 shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 text-xs tracking-wider uppercase font-medium">
                      Grand
                    </div>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-light uppercase tracking-wider">
                    {product.dimensions} • {product.weight}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-text-primary text-text-primary rounded-none hover:bg-text-primary hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium"
            >
              View Full Collection
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-primary mb-6">
              The Barrios Difference
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A family dream turned reality. Passionate about discovering unique minerals while committed to quality products without harming the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Direct from Our Mines",
                description: "We extract, process and export directly from the renowned Catalán region in Artigas, Uruguay - home to the world's finest amethysts.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Family Business Since 1992",
                description: "Three decades of passion discovering unique minerals. From humble beginnings to serving collectors worldwide with commitment to quality.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Global Reach",
                description: "Exporting premium amethysts, agates and citrines to Germany, China, Brazil, USA and collectors worldwide.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-light text-text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Ready to Discover Your Perfect Piece?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-10 leading-relaxed">
              Browse our complete online catalogue or contact us directly. We work closely with collectors, designers and businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-none hover:bg-primary-50 transition-all duration-300 text-sm tracking-wider uppercase font-medium min-w-[200px]"
              >
                Contact Us
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-none hover:bg-white hover:text-primary-600 transition-all duration-300 text-sm tracking-wider uppercase font-medium min-w-[200px]"
              >
                View Catalogue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
}
