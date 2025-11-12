'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function ProductDisclaimer() {
  const { language } = useLanguage();

  return (
    <div className="my-8 p-6 border-l-4 border-primary-600 bg-gray-50 rounded-r-lg">
      <p className="text-sm text-text-secondary leading-relaxed">
        {t('productDisclaimer', language)}
      </p>
    </div>
  );
}
