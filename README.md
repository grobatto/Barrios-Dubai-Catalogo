# Barrio Amethysts - Premium Gemstone Catalog

A luxury catalog website showcasing premium amethysts and agates from Artigas, Uruguay, now available in Dubai.

## Features

- **Premium Design**: Inspired by Gemfields and Tiffany, with generous white space and elegant typography
- **Responsive Masonry Grid**: Pinterest-style product layout that adapts to all screen sizes
- **Advanced Filtering**: Filter products by section (Uruguay/Grandes) and categories
- **Interactive Lightbox**: Full-screen product gallery with detailed information
- **WhatsApp Integration**: Direct inquiry system for each product
- **Smooth Animations**: Framer Motion animations throughout for a polished experience
- **Optimized Images**: All 373 product images converted to WebP for fast loading

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Lightbox**: yet-another-react-lightbox
- **Grid Layout**: react-masonry-css
- **Image Optimization**: Sharp + Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/Barrios-Dubai-Catalogo.git
cd Barrios-Dubai-Catalogo
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── catalog/           # Catalog page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Homepage hero section
│   ├── ProductCard.tsx    # Product card with hover effects
│   ├── MasonryGrid.tsx   # Masonry grid layout
│   ├── ProductLightbox.tsx # Product detail lightbox
│   ├── FilterBar.tsx     # Filtering interface
│   └── Footer.tsx        # Site footer
├── data/                  # Product data
│   └── products.json     # 113 products from 373 images
├── public/images/        # Optimized WebP images
│   └── products/         # Product images
├── scripts/              # Utility scripts
│   └── convert-images.js # Image conversion script
└── types/                # TypeScript types
    └── product.ts        # Product type definitions
\`\`\`

## Image Management

All product images are stored in WebP format for optimal performance:

- **Source**: Original images from \`fotos guzman ayala/\`
- **Output**: Converted to WebP in \`public/images/products/\`
- **Organization**: Maintained folder structure (Uruguay/Grandes sections)

To reconvert images:
\`\`\`bash
npm run convert-images
\`\`\`

## Configuration

### WhatsApp Number

Update the placeholder WhatsApp number in:
- \`components/Footer.tsx\`
- \`components/ProductLightbox.tsx\`
- \`app/contact/page.tsx\`

Replace \`+971XXXXXXXXX\` with your actual number.

### Social Media

Update Instagram handle and email in:
- \`components/Footer.tsx\`
- \`app/contact/page.tsx\`

## Design System

### Colors

- Background: Pure white (#FFFFFF)
- Primary Text: Soft black (#1A1A1A)
- Accent Purple: Deep amethyst (#663399)
- Accent Gold: Soft luxury gold (#C9A961)

### Typography

- **Serif (Headers)**: Cormorant Garamond (Google Fonts)
- **Sans-serif (Body)**: Inter (Google Fonts)

### Spacing

Generous spacing following luxury design principles:
- Section spacing: 80-140px vertical padding
- Component gaps: 24px
- Container padding: 32-64px

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic deployment.

## Performance

- ✅ Lighthouse score 90+ target
- ✅ WebP images for fast loading
- ✅ Lazy loading enabled
- ✅ Responsive images with Next.js Image
- ✅ Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - All rights reserved

## Contact

For inquiries about this project:
- WhatsApp: +971XXXXXXXXX
- Instagram: @barrioamethysts
- Email: info@barrioamethysts.com

---

Built with ❤️ for Barrio Amethysts
