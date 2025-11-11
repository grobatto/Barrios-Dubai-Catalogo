export interface Product {
  id: string;
  name: string;
  category: string;
  section: 'uruguay' | 'grandes';
  images: string[];
  type: 'amethyst' | 'agate';
  origin: string;
  description?: string;
  dimensions?: string;
  characteristics?: string[];
}

export interface ProductsData {
  products: Product[];
}
