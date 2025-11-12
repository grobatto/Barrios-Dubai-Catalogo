'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

interface FilterBarProps {
  collections: string[];
  selectedCollection: string;
  onCollectionChange: (collection: string) => void;
}

export default function FilterBar({
  collections,
  selectedCollection,
  onCollectionChange,
}: FilterBarProps) {
  const { language } = useLanguage();

  const getCollectionLabel = (collection: string): string => {
    // Map collection keys to translation keys
    const translationKeyMap: { [key: string]: string } = {
      'museumMasterpieces': 'museumMasterpieces',
      'eggs': 'eggs',
      'metalBases': 'metalBases',
      'agates': 'agates',
      'hearts': 'hearts',
      'cutted': 'cutted',
      'spheres': 'spheres',
      'freeforms': 'freeforms',
      'homeDecor': 'homeDecor',
      // Legacy support
      'grand': 'gradesSection',
      'uruguay': 'uruguaySection'
    };

    const translationKey = translationKeyMap[collection] || collection;
    return t(translationKey, language);
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-border-light shadow-sm">
      <div className="container-custom py-8">
        {/* Collection Filters */}
        <div>
          <div className="flex flex-wrap gap-8">
            <button
              onClick={() => onCollectionChange('all')}
              aria-label="Show all collections"
              className={`text-sm transition-all duration-300 ${
                selectedCollection === 'all'
                  ? 'text-primary-600 font-medium border-b-2 border-primary-600 pb-1'
                  : 'text-text-secondary hover:text-primary-600'
              } tracking-wide uppercase`}
            >
              {t('allCollections', language)}
            </button>
            {collections.map((collection) => (
              <button
                key={collection}
                onClick={() => onCollectionChange(collection)}
                aria-label={`Filter by ${getCollectionLabel(collection)}`}
                className={`text-sm transition-all duration-300 ${
                  selectedCollection === collection
                    ? 'text-primary-600 font-medium border-b-2 border-primary-600 pb-1'
                    : 'text-text-secondary hover:text-primary-600'
                } tracking-wide uppercase`}
              >
                {getCollectionLabel(collection)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
