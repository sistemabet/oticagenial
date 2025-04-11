
import { Product } from '../types/product';
import { mockProducts } from '../data/mock-products';

// In a real implementation, this would connect to the PHP backend
// and fetch data from the MySQL database
export const fetchAllProducts = async (): Promise<Product[]> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

export const fetchProductById = async (id: number): Promise<Product | undefined> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      resolve(product);
    }, 500);
  });
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const featured = mockProducts.filter(p => p.featured);
      resolve(featured);
    }, 500);
  });
};

export const fetchProductsByType = async (type: 'solar' | 'grau' | 'infantil'): Promise<Product[]> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(p => p.type === type);
      resolve(filteredProducts);
    }, 500);
  });
};

export const fetchProductsByBrand = async (brand: string): Promise<Product[]> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(p => p.brand === brand);
      resolve(filteredProducts);
    }, 500);
  });
};

export const fetchAllBrands = async (): Promise<string[]> => {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const brands = [...new Set(mockProducts.map(p => p.brand))];
      resolve(brands);
    }, 500);
  });
};
