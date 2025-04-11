
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  type: 'solar' | 'grau' | 'infantil'; // sunglasses, prescription, children's
  imageUrl: string;
  inStock: boolean;
  featured: boolean;
}
