'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  section: string;
  images: string[];
  type: string;
  origin: string;
  description?: string;
  characteristics?: string[];
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden cursor-pointer group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Purple Overlay on Hover */}
        <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-text-primary mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-text-secondary uppercase tracking-wide mb-2">
          {product.type}
        </p>

        <p className="text-xs text-text-light">
          {product.origin}
        </p>

        {/* Multiple Images Indicator */}
        {product.images.length > 1 && (
          <div className="flex items-center gap-1 mt-3">
            {product.images.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-50"
              />
            ))}
            {product.images.length > 4 && (
              <span className="text-xs text-text-light ml-1">
                +{product.images.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
