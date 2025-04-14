
import { Product } from '../types/product';
import { mockProducts } from '../data/mock-products';

// Determina a URL da API baseado no ambiente
const isProduction = window.location.hostname !== 'localhost';
const API_URL = isProduction 
  ? '/api' // URL relativa em produção
  : 'http://localhost:3001/api'; // URL completa em desenvolvimento

// Define se usa dados mock ou não
// Em produção, sempre tenta usar a API real primeiro
const useMockData = !isProduction;

// Função para buscar dados da API com fallback para dados mock
async function fetchFromApi<T>(endpoint: string, mockData: T): Promise<T> {
  if (useMockData) {
    console.log(`Usando dados mock para ${endpoint}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 500);
    });
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar de ${endpoint}:`, error);
    console.warn('Usando dados mock como fallback');
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
