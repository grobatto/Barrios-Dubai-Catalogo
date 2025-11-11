'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  // Create varied layout patterns
  const getLayoutClass = (index: number, isGrand: boolean) => {
    if (isGrand) return 'md:col-span-2 md:row-span-2';

    const patterns = [
      'md:col-span-1',
      'md:col-span-1',
      'md:col-span-2',
      'md:col-span-1',
      'md:col-span-1',
      'md:col-span-1',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="container-custom py-16 md:py-24">
      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 auto-rows-auto">
        {products.map((product, index) => {
          const isGrand = product.collection === 'grand';
          const layoutClass = getLayoutClass(index, isGrand);

          return (
            <div
              key={product.id}
              className={`group cursor-pointer ${layoutClass}`}
              onClick={() => onProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden border border-black">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 6}
                />
                {/* Product Name Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-3 py-2">
                  <p className="text-xs text-white font-light">
                    {product.name}
                  </p>
                </div>
              </div>

              {/* Product Info - Only Grand badge */}
              {isGrand && (
                <div className="mt-3">
                  <p className="text-xs text-text-light tracking-wide uppercase">
                    Grand
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
