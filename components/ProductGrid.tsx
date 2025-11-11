'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  // Grand Collection: 2x2, Uruguay: 1x1
  const getLayoutClass = (isGrand: boolean) => {
    if (isGrand) return 'md:col-span-2 md:row-span-2';
    return 'md:col-span-1';
  };

  return (
    <div className="container-custom py-16 md:py-24">
      {/* Consistent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 auto-rows-auto">
        {products.map((product, index) => {
          const isGrand = product.collection === 'grand';
          const layoutClass = getLayoutClass(isGrand);

          return (
            <div
              key={product.id}
              className={`group cursor-pointer ${layoutClass}`}
              onClick={() => onProductClick(product)}
            >
              {/* Product Image */}
              <div className={`relative w-full ${isGrand ? 'aspect-square' : 'aspect-[3/4]'} bg-cream overflow-hidden border border-border-light hover:border-primary-200 transition-all duration-500 shadow-sm hover:shadow-luxury`}>
                <Image
                  src={product.images[0]}
                  alt={`${product.name} - ${product.dimensions || 'Uruguayan gemstone'} - Premium amethyst from Artigas`}
                  fill
                  sizes={isGrand ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={index < 6}
                />
                {isGrand && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 text-xs tracking-wider uppercase font-medium">
                    Grand
                  </div>
                )}
              </div>

              {/* Product Info - Below Image */}
              <div className="mt-4">
                <h3 className="text-sm font-light text-text-primary leading-tight group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>
                {isGrand && (
                  <p className="text-xs text-gold-600 mt-2 tracking-wider uppercase font-medium">
                    Grand Collection
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
