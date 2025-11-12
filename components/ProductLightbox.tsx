'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Product } from '@/types/product';
import ProductDisclaimer from './ProductDisclaimer';

interface ProductLightboxProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductLightbox({
  product,
  isOpen,
  onClose,
}: ProductLightboxProps) {
  if (!product) return null;

  const slides = product.images.map((image) => ({
    src: image,
    alt: product.name,
  }));

  // WhatsApp contact for international inquiries (Artigas, Uruguay)
  const whatsappNumber = '+59899967347';
  const whatsappMessage = `Hello, I'm interested in ${product.name}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Lightbox
        open={isOpen}
        close={onClose}
        slides={slides}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.src}
                alt={slide.alt || ''}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ),
          buttonPrev: slides.length > 1 ? undefined : () => null,
          buttonNext: slides.length > 1 ? undefined : () => null,
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
        carousel={{
          finite: slides.length <= 1,
        }}
      />

      {/* Product Info Sidebar (overlay on lightbox) */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-full md:w-96 h-full bg-white z-[9999] p-8 overflow-y-auto transform transition-transform duration-300 ease-out pointer-events-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mt-12">
            {/* Grand Collection Badge */}
            {product.collection === 'grand' && (
              <div className="inline-block bg-accent-gold text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
                GRAND COLLECTION
              </div>
            )}

            <h2 className="font-serif text-3xl text-text-primary mb-4">
              {product.name}
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                  Type
                </p>
                <p className="text-lg capitalize">{product.type}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                  Category
                </p>
                <p className="text-lg">{product.category}</p>
              </div>

              {product.quality && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                    Quality
                  </p>
                  <p className="text-lg capitalize">{product.quality}</p>
                </div>
              )}

              {product.dimensions && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                    Dimensions
                  </p>
                  <p className="text-lg">{product.dimensions}</p>
                </div>
              )}

              {product.weight && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                    Weight
                  </p>
                  <p className="text-lg">{product.weight}</p>
                </div>
              )}

              {product.size && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                    Size
                  </p>
                  <p className="text-lg capitalize">{product.size.replace('-', ' ')}</p>
                </div>
              )}

              <div>
                <p className="text-xs uppercase tracking-wider text-text-light mb-1">
                  Origin
                </p>
                <p className="text-lg">{product.origin}</p>
              </div>
            </div>

            {product.description && (
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-text-light mb-2">
                  Description
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.characteristics && product.characteristics.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-text-light mb-3">
                  Characteristics
                </h3>
                <ul className="space-y-2">
                  {product.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span className="text-text-secondary">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ProductDisclaimer />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-white text-center py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium ${
                product.collection === 'grand' ? 'bg-accent-gold' : 'bg-accent-primary'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Inquire about this piece
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
