
import { Product } from '../types/product';
import { mockProducts } from '../data/mock-products';

const API_URL = 'http://localhost:3001/api';

// Fallback to mock data if API is not available
const useMockData = false; // Definido como false para usar a API real

// Function to fetch data from API with fallback to mock data
async function fetchFromApi<T>(endpoint: string, mockData: T): Promise<T> {
  if (useMockData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 500);
    });
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    console.warn('Falling back to mock data');
    return mockData;
  }
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  return fetchFromApi('/products', mockProducts);
};

export const fetchProductById = async (id: number): Promise<Product | undefined> => {
  return fetchFromApi(`/products/${id}`, mockProducts.find(p => p.id === id));
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  return fetchFromApi('/products/featured/list', mockProducts.filter(p => p.featured));
};

export const fetchProductsByType = async (type: 'solar' | 'grau' | 'infantil'): Promise<Product[]> => {
  return fetchFromApi(`/products/type/${type}`, mockProducts.filter(p => p.type === type));
};

export const fetchProductsByBrand = async (brand: string): Promise<Product[]> => {
  return fetchFromApi(`/products/brand/${brand}`, mockProducts.filter(p => p.brand === brand));
};

export const fetchAllBrands = async (): Promise<string[]> => {
  return fetchFromApi('/products/brands/list', [...new Set(mockProducts.map(p => p.brand))]);
};
