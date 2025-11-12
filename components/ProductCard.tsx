'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const isGrandCollection = product.collection === 'grand';
  const overlayColor = isGrandCollection ? 'bg-accent-gold' : 'bg-accent-primary';
  const badgeColor = isGrandCollection ? 'bg-accent-gold' : 'bg-accent-primary';

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`bg-off-white rounded-xl shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer group relative ${
        isGrandCollection ? 'ring-2 ring-accent-gold ring-opacity-30' : 'hover:ring-2 hover:ring-accent-primary hover:ring-opacity-20'
      }`}
    >
      {/* Grand Collection Badge */}
      {isGrandCollection && (
        <div className="absolute top-4 right-4 z-10 bg-accent-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          GRAND COLLECTION
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Color Overlay on Hover (Purple for standard, Gold for grand) */}
        <div className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-text-primary mb-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm text-text-secondary uppercase tracking-wide">
            {product.type}
          </p>
          {/* Size Badge */}
          {product.size && (
            <span className={`text-xs ${badgeColor} text-white px-2 py-0.5 rounded-full uppercase`}>
              {product.size === 'extra-large' ? 'XL' : product.size.charAt(0)}
            </span>
          )}
          {/* Quality Badge */}
          {product.quality === 'museum' && (
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full uppercase font-medium">
              Museum
            </span>
          )}
        </div>

        {/* Dimensions & Weight */}
        {(product.dimensions || product.weight) && (
          <p className="text-xs text-text-light mb-1">
            {product.dimensions && `${product.dimensions}`}
            {product.dimensions && product.weight && ' • '}
            {product.weight && `${product.weight}`}
          </p>
        )}

        <p className="text-xs text-text-light">
          {product.origin}
        </p>

        {/* Multiple Images Indicator */}
        {product.images.length > 1 && (
          <div className="flex items-center gap-1 mt-3">
            {product.images.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${badgeColor} opacity-50`}
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
