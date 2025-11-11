export interface Product {
  id: string;
  name: string;
  category: string;
  section: 'uruguay' | 'grandes';
  collection?: 'standard' | 'grand';
  images: string[];
  type: 'amethyst' | 'agate';
  origin: string;
  description?: string;
  dimensions?: string;
  weight?: string;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  quality?: 'museum' | 'premium' | 'standard';
  rotation?: number;
  characteristics?: string[];
}

export interface ProductsData {
  products: Product[];
}
