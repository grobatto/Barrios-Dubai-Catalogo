'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6">
                {t('aboutPageTitle', language)}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary">
                {t('aboutPageSubtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Artigas Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl text-text-primary mb-6">
                  {t('fromMinesTitle', language)}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  {t('fromMinesPara1', language)}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {t('fromMinesPara2', language)}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-text-light">
                  <p className="text-sm">Image: Artigas Mines</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Family Business Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden lg:order-1"
              >
                <div className="absolute inset-0 flex items-center justify-center text-text-light">
                  <p className="text-sm">Image: Family Business</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:order-2"
              >
                <h2 className="font-serif text-4xl text-text-primary mb-6">
                  {t('familyTraditionTitle', language)}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  {t('familyTraditionPara1', language)}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {t('familyTraditionPara2', language)}
                </p>
                <p className="text-xl text-primary-600 font-light leading-relaxed mt-6 italic border-l-4 border-primary-600 pl-6">
                  {t('familyDream', language)}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dubai Expansion Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
                {t('expandingDubaiTitle', language)}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {t('expandingDubaiPara1', language)}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                {t('expandingDubaiPara2', language)}
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                {t('visitDubaiLocation', language)}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="section-spacing bg-gradient-to-b from-purple-50 to-white">
          <div className="container-custom max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl text-text-primary mb-6">
                {t('ourCommitmentTitle', language)}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t('ourCommitmentSubtitle', language)}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  titleKey: 'authenticityTitle',
                  descKey: 'authenticityDesc',
                },
                {
                  titleKey: 'qualityTitle',
                  descKey: 'qualityDesc',
                },
                {
                  titleKey: 'expertiseTitle',
                  descKey: 'expertiseDesc',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-2xl text-text-primary mb-4">
                    {t(item.titleKey, language)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(item.descKey, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
