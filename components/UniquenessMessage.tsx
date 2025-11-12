'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function UniquenessMessage() {
  const { language } = useLanguage();

  return (
    <div className="my-12 py-12 px-6 md:px-8 text-center border-y border-border-light bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display mb-6 text-text-primary">
          {/* Natural Uniqueness */}
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          {t('naturalUniqueness', language)}
        </p>
      </div>
    </div>
  );
}
