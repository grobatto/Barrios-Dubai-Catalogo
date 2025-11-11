'use client';

import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface MasonryGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const breakpointColumns = {
  default: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MasonryGrid({ products, onProductClick }: MasonryGridProps) {
  if (products.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-text-secondary text-lg">
          No products found matching your filters.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="container-custom py-12"
    >
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-6 w-auto"
        columnClassName="pl-6 bg-clip-padding"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="mb-6"
          >
            <ProductCard
              product={product}
              onClick={() => onProductClick(product)}
            />
          </motion.div>
        ))}
      </Masonry>
    </motion.div>
  );
}
