'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-text-secondary">
                A family legacy of Uruguayan gemstone excellence
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
                  From the Mines of Artigas
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Artigas, Uruguay is world-renowned for producing some of the finest
                  amethysts and agates on Earth. The unique geological conditions
                  in this region create gemstones of exceptional quality and vibrant color.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  For generations, the mines of Artigas have yielded treasures that
                  captivate collectors and enthusiasts worldwide. The deep purple
                  amethysts and intricate banded agates from this region are prized
                  for their natural beauty and geological significance.
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
                  A Family Tradition
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Barrio Amethysts is a family-owned business with deep roots in
                  Uruguay's gemstone industry. Our expertise in selecting and
                  presenting the finest specimens has been passed down through
                  generations.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Every piece in our collection is handpicked with the same care
                  and attention to quality that has defined our family for decades.
                  We take pride in sharing these natural wonders with the world.
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
                Expanding to Dubai
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We are thrilled to bring our collection to Dubai, one of the world's
                premier destinations for luxury and fine craftsmanship. This expansion
                allows us to share the beauty of Uruguayan gemstones with a new audience.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                Our commitment to quality, authenticity, and exceptional service
                remains unchanged as we establish our presence in the Middle East.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Visit Our Dubai Location
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
                Our Commitment
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Every gemstone we offer meets our exacting standards for quality and beauty
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Authenticity',
                  description:
                    'Every piece is genuinely sourced from the mines of Artigas, Uruguay, with complete traceability.',
                },
                {
                  title: 'Quality',
                  description:
                    'We select only the finest specimens, ensuring exceptional color, clarity, and natural formation.',
                },
                {
                  title: 'Expertise',
                  description:
                    'Generations of experience guide our selection process, guaranteeing museum-quality pieces.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-2xl text-text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
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
