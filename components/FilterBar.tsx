'use client';

import { motion } from 'framer-motion';

interface FilterBarProps {
  sections: string[];
  categories: string[];
  selectedSection: string;
  selectedCategory: string;
  onSectionChange: (section: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  sections,
  categories,
  selectedSection,
  selectedCategory,
  onSectionChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-6">
      <div className="container-custom">
        {/* Section Filters */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider text-text-light mb-3">
            Collection
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedSection === 'all'
                  ? 'bg-accent-primary text-white shadow-md'
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              }`}
            >
              All
            </motion.button>
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange(section)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSection === section
                    ? section === 'grandes' ? 'bg-accent-gold text-white shadow-md' : 'bg-accent-primary text-white shadow-md'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                {section === 'grandes' ? 'Grand Collection' : section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider text-text-light mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-accent-earth text-white'
                    : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
                }`}
              >
                All
              </motion.button>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent-earth text-white'
                      : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
