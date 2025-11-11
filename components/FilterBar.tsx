'use client';

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
  const getSectionLabel = (section: string) => {
    if (section === 'grandes') return 'Grand Collection';
    if (section === 'uruguay') return 'Uruguay';
    return section;
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-border-light">
      <div className="container-custom py-6">
        {/* Collection Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => onSectionChange('all')}
              className={`text-sm transition-colors ${
                selectedSection === 'all'
                  ? 'text-text-primary font-medium border-b-2 border-text-primary pb-0.5'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              All
            </button>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`text-sm transition-colors ${
                  selectedSection === section
                    ? 'text-text-primary font-medium border-b-2 border-text-primary pb-0.5'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {getSectionLabel(section)}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onCategoryChange('all')}
                className={`text-xs transition-colors ${
                  selectedCategory === 'all'
                    ? 'text-text-primary underline'
                    : 'text-text-light hover:text-text-secondary'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`text-xs transition-colors ${
                    selectedCategory === category
                      ? 'text-text-primary underline'
                      : 'text-text-light hover:text-text-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
